/* ==============================================
   Bank Intelligence Dashboard — App Logic
   ============================================== */

const searchInput   = document.getElementById('bankSearch');
const clearBtn      = document.getElementById('clearBtn');
const autocomplete  = document.getElementById('autocompleteList');
const resultsSection= document.getElementById('resultsSection');
const emptyState    = document.getElementById('emptyState');
const notFoundState = document.getElementById('notFoundState');
const notFoundMsg   = document.getElementById('notFoundMsg');
const bankHeader    = document.getElementById('bankHeader');
const metricsGrid   = document.getElementById('metricsGrid');
const sourceInfo    = document.getElementById('sourceInfo');

let activeIndex = -1;
let currentQuery = '';

/* ------------ Utility Functions ------------ */

function formatNumber(n) {
  if (n === null || n === undefined) return null;
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'T';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'B';
  return n.toLocaleString();
}

function formatCustomers(n) {
  if (n === null || n === undefined) return null;
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'B';
  if (n >= 100_000_000)   return (n / 1_000_000).toFixed(0) + 'M';
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(1) + 'M';
  return n.toLocaleString();
}

function formatAssets(n) {
  if (n === null || n === undefined) return null;
  // Shown in USD M notation
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'T';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'B';
  return n.toLocaleString() + 'M';
}

function confidenceBadge(level) {
  if (!level) return '';
  const map = {
    high:   { label: '● 확인됨', cls: 'conf-high' },
    medium: { label: '◐ 추정치', cls: 'conf-med' },
    low:    { label: '○ 근사치', cls: 'conf-low' }
  };
  const c = map[level] || map.low;
  return `<span class="conf-badge ${c.cls}">${c.label}</span>`;
}

/* ------------ Search Logic ------------ */

function searchBanks(query) {
  if (!query || query.trim().length < 1) return [];
  const q = query.trim().toLowerCase();
  return BANK_SEARCH_INDEX.filter(item =>
    item.searchTerms.some(term => term.includes(q))
  ).slice(0, 8);
}

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

/* ------------ Autocomplete Rendering ------------ */

function renderAutocomplete(results, query) {
  if (!results.length) {
    autocomplete.classList.remove('open');
    autocomplete.innerHTML = '';
    return;
  }
  activeIndex = -1;
  autocomplete.innerHTML = results.map((item, i) => `
    <li class="autocomplete-item" data-key="${item.key}" data-index="${i}">
      <span class="autocomplete-flag">${item.data.flag}</span>
      <div class="autocomplete-info">
        <div class="autocomplete-name">${highlight(item.key, query)}</div>
        <div class="autocomplete-meta">${item.data.country} · ${item.data.region}</div>
      </div>
      ${item.data.ticker !== '지주사 비상장' ? `<span class="autocomplete-ticker">${item.data.ticker.split('/')[0].trim()}</span>` : ''}
    </li>
  `).join('');
  autocomplete.classList.add('open');

  autocomplete.querySelectorAll('.autocomplete-item').forEach(el => {
    el.addEventListener('mousedown', e => {
      e.preventDefault();
      selectBank(el.dataset.key);
    });
  });
}

/* ------------ Bank Info Rendering ------------ */

function renderBankInfo(key) {
  const data = BANK_DATA[key];
  if (!data) return;

  // Hide other states
  emptyState.style.display    = 'none';
  notFoundState.style.display = 'none';
  resultsSection.style.display = 'block';

  // --- Bank Header ---
  bankHeader.innerHTML = `
    <div class="bank-flag">${data.flag}</div>
    <div class="bank-info">
      <div class="bank-full-name">${data.fullName}</div>
      <div class="bank-meta">
        ${data.ticker !== '지주사 비상장'
          ? `<span class="bank-badge badge-ticker">${data.ticker}</span>` : ''}
        <span class="bank-badge badge-country">${data.country}</span>
        <span class="bank-badge badge-region">${data.region}</span>
        <span class="bank-badge badge-year">FY${data.irYear}</span>
      </div>
    </div>
  `;

  // --- Metrics ---
  const assetsFmt     = formatAssets(data.totalAssets);
  const revenueFmt    = data.retailRevenue !== null
    ? `$${(data.retailRevenue / 1000).toFixed(1)}B` : null;
  const customersFmt  = formatCustomers(data.retailCustomers);

  metricsGrid.innerHTML = `
    <!-- Total Assets -->
    <div class="metric-card assets">
      <div class="metric-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="10" width="16" height="8" rx="2" fill="#2563eb" opacity="0.2"/>
          <rect x="5" y="6" width="10" height="12" rx="2" fill="#2563eb" opacity="0.4"/>
          <rect x="8" y="2" width="4" height="16" rx="2" fill="#2563eb"/>
        </svg>
      </div>
      <div class="metric-label">총 자산 (Total Assets)</div>
      ${assetsFmt
        ? `<div class="metric-value">${assetsFmt}</div>
           <div class="metric-unit">USD 기준&nbsp;&nbsp;${confidenceBadge(data.dataConfidence.assets)}</div>
           ${data.dataConfidence.assets === 'medium' && data.estimationBasis?.assets
             ? `<div class="metric-basis">📊 ${data.estimationBasis.assets}</div>` : ''}`
        : `<div class="metric-na">N/A</div>`
      }
    </div>

    <!-- Retail Revenue -->
    <div class="metric-card revenue">
      <div class="metric-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C10 2 4 5 4 11C4 14.3137 6.68629 17 10 17C13.3137 17 16 14.3137 16 11C16 5 10 2 10 2Z" fill="#10b981" opacity="0.3"/>
          <path d="M10 6V14M7 10H13" stroke="#10b981" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="metric-label">리테일 부문 매출 (Retail Revenue)</div>
      ${revenueFmt
        ? `<div class="metric-value">${revenueFmt}</div>
           <div class="metric-unit">USD 기준&nbsp;&nbsp;${confidenceBadge(data.dataConfidence.revenue)}</div>
           ${data.dataConfidence.revenue === 'medium' && data.estimationBasis?.revenue
             ? `<div class="metric-basis">📊 ${data.estimationBasis.revenue}</div>` : ''}`
        : `<div class="metric-na">N/A</div>
           <div class="metric-unit">세부 데이터 미공개</div>`
      }
    </div>

    <!-- Retail Customers -->
    <div class="metric-card customers">
      <div class="metric-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="8" cy="7" r="3" fill="#7c3aed" opacity="0.4"/>
          <path d="M3 17C3 14.2386 5.23858 12 8 12H10C12.7614 12 15 14.2386 15 17" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="14" cy="6" r="2" fill="#7c3aed" opacity="0.6"/>
          <path d="M17 16C17 14.3431 15.6569 13 14 13" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="metric-label">리테일 고객 수 (Retail Customers)</div>
      ${customersFmt
        ? `<div class="metric-value">${customersFmt}</div>
           <div class="metric-unit">명 기준&nbsp;&nbsp;${confidenceBadge(data.dataConfidence.customers)}</div>
           ${data.dataConfidence.customers === 'medium' && data.estimationBasis?.customers
             ? `<div class="metric-basis">📊 ${data.estimationBasis.customers}</div>` : ''}`
        : `<div class="metric-na">N/A</div>
           <div class="metric-unit">세부 데이터 미공개</div>`
      }
    </div>

    <!-- Selling Price -->
    <div class="metric-card price">
      <div class="metric-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10L10 4L16 10L10 16L4 10Z" fill="#d97706" opacity="0.2"/>
          <path d="M10 6V14M8 10H12" stroke="#d97706" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="10" cy="10" r="8" stroke="#d97706" stroke-width="1.4" opacity="0.4"/>
        </svg>
      </div>
      <div class="metric-label">판매 가격 (Selling Price)</div>
      <div class="metric-value" style="font-size:18px; color:#92400e;">—</div>
      <div class="metric-coming-soon">🔧 로직 설정 대기 중</div>
    </div>
  `;

  // --- Source Info ---
  sourceInfo.innerHTML = `
    <svg class="source-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#94a3b8" stroke-width="1.4"/>
      <path d="M8 7V11M8 5.5V5" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    <div>
      <div class="source-text">
        <strong>데이터 출처:</strong> ${data.irSource}
      </div>
      ${data.notes
        ? `<div class="source-note">📌 ${data.notes}</div>`
        : ''
      }
      ${data.currency && data.currency !== 'USD'
        ? `<div class="source-note">💱 환율: ${data.currency} 적용 (2024년 평균 기준)</div>`
        : ''
      }
    </div>
  `;
}

/* ------------ Public: selectBank ------------ */

function selectBank(key) {
  const data = BANK_DATA[key];
  if (!data) return;
  searchInput.value = key;
  currentQuery = key;
  clearBtn.style.display = 'flex';
  autocomplete.classList.remove('open');
  autocomplete.innerHTML = '';
  renderBankInfo(key);
}

/* ------------ Input Handling ------------ */

searchInput.addEventListener('input', () => {
  const val = searchInput.value.trim();
  currentQuery = val;
  clearBtn.style.display = val ? 'flex' : 'none';

  if (!val) {
    autocomplete.classList.remove('open');
    autocomplete.innerHTML = '';
    resultsSection.style.display = 'none';
    notFoundState.style.display  = 'none';
    emptyState.style.display     = 'block';
    return;
  }

  const results = searchBanks(val);
  renderAutocomplete(results, val);

  if (!results.length) {
    resultsSection.style.display = 'none';
    emptyState.style.display     = 'none';
    notFoundState.style.display  = 'block';
    notFoundMsg.textContent = `"${val}" 에 해당하는 은행을 찾을 수 없습니다. 영문 또는 한글 은행명으로 검색해보세요.`;
  } else {
    notFoundState.style.display = 'none';
  }
});

/* Keyboard navigation */
searchInput.addEventListener('keydown', e => {
  const items = autocomplete.querySelectorAll('.autocomplete-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, -1);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeIndex >= 0 && items[activeIndex]) {
      selectBank(items[activeIndex].dataset.key);
    } else if (items.length === 1) {
      selectBank(items[0].dataset.key);
    }
    return;
  } else if (e.key === 'Escape') {
    autocomplete.classList.remove('open');
    activeIndex = -1;
    return;
  }

  items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
});

/* Clear button */
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  currentQuery = '';
  clearBtn.style.display      = 'none';
  autocomplete.classList.remove('open');
  autocomplete.innerHTML      = '';
  resultsSection.style.display = 'none';
  notFoundState.style.display  = 'none';
  emptyState.style.display     = 'block';
  searchInput.focus();
});

/* Close autocomplete on outside click */
document.addEventListener('click', e => {
  if (!e.target.closest('.search-container')) {
    autocomplete.classList.remove('open');
    activeIndex = -1;
  }
});

/* Inject confidence badge styles */
const style = document.createElement('style');
style.textContent = `
  .conf-badge {
    display: inline-flex;
    align-items: center;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 10px;
    margin-left: 4px;
    vertical-align: middle;
    letter-spacing: 0.3px;
  }
  .conf-high { background: #dcfce7; color: #166534; }
  .conf-med  { background: #fef9c3; color: #854d0e; }
  .conf-low  { background: #fee2e2; color: #991b1b; }
`;
document.head.appendChild(style);
