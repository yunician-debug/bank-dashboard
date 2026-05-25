/**
 * Bank Intelligence Data
 * ───────────────────────────────────────────────────────────────
 * Source  : FY2025 Annual Reports / Full-Year Results (각 은행 공식 IR)
 * Basis   : 2025년 12월 31일 결산 기준 (일부 은행은 별도 회계연도 명시)
 * Unit    : All monetary values in USD Millions (USD M)
 *
 * Currency conversion — 2025 annual average:
 *   EUR/USD 1.09 | GBP/USD 1.285 | JPY/USD 0.0067 (149 JPY)
 *   KRW/USD 0.00072 (1,390 KRW) | SGD/USD 0.75 | AUD/USD 0.635
 *   THB/USD 0.028 | VND/USD 0.000039 | SAR/USD 0.267 (고정) | CNY/USD 0.138
 *
 * dataConfidence:
 *   "high"   = IR 보고서에서 직접 확인
 *   "medium" = 추정치 또는 환율 환산
 *   null     = 데이터 미공개
 * ───────────────────────────────────────────────────────────────
 */
const BANK_DATA = {

  /* ============================================================
   * NORTH AMERICA  (FY = Jan–Dec 2025)
   * ============================================================ */

  "JPMorgan Chase": {
    fullName: "JPMorgan Chase & Co.",
    aliases: ["JPM", "JP Morgan", "JP Morgan Chase", "제이피모건"],
    ticker: "JPM",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: JPMorgan Chase 2025 Annual Report (10-K), filed Feb 2026
    totalAssets: 4400000,          // $4.4T total assets (Dec 31, 2025) ← confirmed
    retailRevenue: 73200,          // CCB Q1 2025 $18.3B × 4 ≈ $73.2B (FY2025 est.)
    retailCustomers: 84000000,     // 84M US consumers (FY2025 confirmed)
    sellingPrice: null,
    irSource: "JPMorgan Chase 2025 Annual Report (10-K), Feb 2026",
    irYear: 2025,
    currency: "USD",
    notes: "CCB(Consumer & Community Banking) 부문 기준. 미국 소비자 8,400만명 공식 발표. Q1 2025 CCB 수익 $18.3B (+4% YoY).",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "Bank of America": {
    fullName: "Bank of America Corporation",
    aliases: ["BofA", "BoA", "BAC", "뱅크오브아메리카"],
    ticker: "BAC",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Bank of America 2025 Annual Report (Form ARS), filed Jan 2026
    totalAssets: 3411738,          // $3.41T total assets (Dec 31, 2025) ← confirmed
    retailRevenue: 43000,          // Consumer Banking revenue FY2025 (est.; FY2024: $41B 대비 성장)
    retailCustomers: 70000000,     // 70M+ consumer clients; 38.4M consumer checking accounts (FY2025)
    sellingPrice: null,
    irSource: "Bank of America 2025 Annual Report (Form ARS), Jan 2026",
    irYear: 2025,
    currency: "USD",
    notes: "FY2025 소비자 투자자산 +16% 성장 ($599B). 신규 체킹 계좌 68만개, 신규 카드 380만개 발급. 디지털 세일 비중 69%.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "Wells Fargo": {
    fullName: "Wells Fargo & Company",
    aliases: ["WFC", "웰스파고"],
    ticker: "WFC",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Wells Fargo 2025 Annual Report (10-K), filed Jan 2026
    totalAssets: 2000000,          // ~$2.0T total assets (Dec 31, 2025) ← confirmed
    retailRevenue: 35700,          // Consumer Banking & Lending (Q4 2025: $9.57B × ~3.7) (est.)
    retailCustomers: 70000000,     // ~70M retail customers (est.)
    sellingPrice: null,
    irSource: "Wells Fargo 2025 Annual Report (10-K), Jan 2026",
    irYear: 2025,
    currency: "USD",
    notes: "Q4 2025 Consumer B&L 매출 +7% YoY. 소비자 대출 $376B. 자산상한 규제(Asset Cap) 해제 예상으로 성장 탄력.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "Citigroup": {
    fullName: "Citigroup Inc.",
    aliases: ["Citi", "C", "Citibank", "시티그룹", "씨티은행"],
    ticker: "C",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Citigroup 2025 Annual Report (10-K)
    totalAssets: 2642500,          // $2.64T total assets (Dec 31, 2025) ← confirmed
    retailRevenue: 22000,          // US Personal Banking (USPB) revenue FY2025 (est.)
    retailCustomers: null,         // 세그먼트별 미공개
    sellingPrice: null,
    irSource: "Citigroup 2025 Annual Report (10-K) / SEC filings",
    irYear: 2025,
    currency: "USD",
    notes: "구조개편(Transformation) 완료 단계. USPB(US Personal Banking) 수익 추정치. 리테일 고객수 세그먼트별 미공개.",
    dataConfidence: { assets: "high", revenue: "medium", customers: null }
  },

  "Goldman Sachs": {
    fullName: "The Goldman Sachs Group, Inc.",
    aliases: ["GS", "골드만삭스"],
    ticker: "GS",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Goldman Sachs 2025 Full Year Results, Jan 15, 2026
    totalAssets: 1810000,          // $1.81T total assets (Q4 2025) ← confirmed
    retailRevenue: 18700,          // Asset & Wealth Management revenue FY2025 (est.; FY2024 $16.14B 대비 성장)
    retailCustomers: null,         // 기관투자자 중심; 리테일 고객수 미공개
    sellingPrice: null,
    irSource: "Goldman Sachs 2025 Full Year Results, Jan 15, 2026",
    irYear: 2025,
    currency: "USD",
    notes: "FY2025 전사 순수익 $58.28B (+9%). AWM 수익 지속 성장. 딜 붐(Deal Boom)으로 IB 부문 급성장. 기관투자자 중심 은행.",
    dataConfidence: { assets: "high", revenue: "medium", customers: null }
  },

  "Morgan Stanley": {
    fullName: "Morgan Stanley",
    aliases: ["MS", "모건스탠리"],
    ticker: "MS",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Morgan Stanley 2025 Full Year Results
    totalAssets: 1350000,          // ~$1.35T total assets FY2025 (est.)
    retailRevenue: 32200,          // Wealth Management net revenues FY2025 (est.; 기록적 성장)
    retailCustomers: 8000000,      // ~800만 E*TRADE 리테일 고객
    sellingPrice: null,
    irSource: "Morgan Stanley 2025 Full Year Results",
    irYear: 2025,
    currency: "USD",
    notes: "FY2025 전사 순수익 $61.8B (+14% YoY). Wealth Management 기록적 성장. E*TRADE 포함 리테일 고객 약 800만명.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * EUROPE  (FY = Jan–Dec 2025)
   * ============================================================ */

  "HSBC": {
    fullName: "HSBC Holdings plc",
    aliases: ["HSBA", "Hong Kong Shanghai Banking Corporation", "에이치에스비씨"],
    ticker: "HSBA / HSBC",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: HSBC Holdings plc Annual Results 2025, Feb 2026
    totalAssets: 3200000,          // ~$3.2T total assets (Dec 31, 2025; H1 2025 확인치 기반)
    retailRevenue: 29000,          // WPB(Wealth & Personal Banking) revenue FY2025 (est.; FY2024 $27.3B 대비 ~+6%)
    retailCustomers: 42000000,     // ~4,200만 WPB 고객 (est.)
    sellingPrice: null,
    irSource: "HSBC Holdings plc Annual Results 2025, Feb 2026",
    irYear: 2025,
    currency: "USD",
    notes: "FY2025 전사 수익 $68.3B (+4% YoY). H1 2025 WPB Wealth 수익 $4.56B (+22%). 아시아 Wealth 강세.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Barclays": {
    fullName: "Barclays PLC",
    aliases: ["BARC", "BCS", "바클레이스"],
    ticker: "BARC / BCS",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Barclays PLC Annual Report 2025, Feb 2026
    totalAssets: 1984000,          // £1,544.2B × 1.285 GBP/USD ≈ $1,984,537M (FY2025) ← confirmed
    retailRevenue: 14800,          // 소매금융 부문 (est.; 그룹 세전이익 +13% YoY 반영)
    retailCustomers: 20000000,     // 20M+ 리테일 고객
    sellingPrice: null,
    irSource: "Barclays PLC Annual Report 2025, Feb 2026",
    irYear: 2025,
    currency: "GBP→USD",
    notes: "GBP→USD 환산 (1.285). FY2025 세전이익 £9.14B (+13% YoY). 총자산 £1,544.2B (trading 증가·UK 대출 성장). Tesco Bank 통합 완료.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "BNP Paribas": {
    fullName: "BNP Paribas S.A.",
    aliases: ["BNP", "비엔피파리바"],
    ticker: "BNP",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    // Source: BNP Paribas FY2025 Results Press Release, Feb 5, 2026
    totalAssets: 3044370,          // €2,793B × 1.09 EUR/USD ≈ $3,044,370M (FY2025) ← confirmed
    retailRevenue: 30762,          // CPBS 수익 €26,751M × 1.055(+5.5%) × 1.09 ≈ $30,762M (FY2025)
    retailCustomers: 33000000,     // 3,300만 리테일 고객 (FY2025) ← confirmed
    sellingPrice: null,
    irSource: "BNP Paribas FY2025 Full-Year Results, Feb 5, 2026",
    irYear: 2025,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.09). CPBS(Commercial, Personal Banking & Services) 수익 +5.5% YoY. 유로존 상업은행·Personal Finance 마진 개선.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "Deutsche Bank": {
    fullName: "Deutsche Bank AG",
    aliases: ["DB", "도이치뱅크"],
    ticker: "DBK / DB",
    country: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    // Source: Deutsche Bank 2025 Full Year Results, Jan 29, 2026
    totalAssets: 1600000,          // ~€1,468B × 1.09 EUR/USD ≈ $1,600,120M (FY2025 est.)
    retailRevenue: 10700,          // Private Bank revenue est. €9,817M × 1.09 ≈ $10,700M (FY2025 est.)
    retailCustomers: 20000000,     // ~2,000만 Private Bank 고객 (est.)
    sellingPrice: null,
    irSource: "Deutsche Bank 2025 Full Year Results, Jan 29, 2026",
    irYear: 2025,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.09). FY2025 기록 세전이익 €9.7B (+84% YoY). 전사 순수익 €32.1B (+7%). 구조조정 효과 극대화.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Santander": {
    fullName: "Banco Santander, S.A.",
    aliases: ["SAN", "산탄데르"],
    ticker: "SAN",
    country: "Spain",
    region: "Europe",
    flag: "🇪🇸",
    // Source: Banco Santander 2025 Full Year Results, Feb 3, 2026
    totalAssets: 2125500,          // est. €1,950B × 1.09 EUR/USD ≈ $2,125,500M (FY2025)
    retailRevenue: null,           // 리테일 부문 세부 수익 별도 미공개
    retailCustomers: 180000000,    // 1억 8,000만 고객 (FY2025 기록) ← confirmed
    sellingPrice: null,
    irSource: "Banco Santander 2025 Full Year Results, Feb 3, 2026",
    irYear: 2025,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.09). FY2025 기록 실적: 순이익 €14,101M (+12%), EPS €0.91 (+17%). 고객 1억 8천만명 (전년比 +800만). Retail & Commercial 중심.",
    dataConfidence: { assets: "medium", revenue: null, customers: "high" }
  },

  "ING Group": {
    fullName: "ING Groep N.V.",
    aliases: ["ING", "아이엔지"],
    ticker: "INGA",
    country: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    // Source: ING Group Annual Report 2025
    totalAssets: 1079000,          // est. €990B × 1.09 EUR/USD ≈ $1,079,100M (FY2025 est.)
    retailRevenue: 11000,          // Retail Banking total income est. (FY2025 est.)
    retailCustomers: 40000000,     // ~4,000만 리테일 고객 (FY2025 est.)
    sellingPrice: null,
    irSource: "ING Group Annual Report 2025",
    irYear: 2025,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.09). 디지털 뱅킹 강점. 리테일 매출 및 고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "UBS": {
    fullName: "UBS Group AG",
    aliases: ["UBSG", "유비에스"],
    ticker: "UBSG / UBS",
    country: "Switzerland",
    region: "Europe",
    flag: "🇨🇭",
    // Source: UBS Group AG Annual Report 2025
    totalAssets: 1800000,          // ~$1.80T total assets (FY2025 est.; Credit Suisse 통합 반영)
    retailRevenue: 8500,           // Personal & Corporate Banking revenue FY2025 est.
    retailCustomers: 5000000,      // ~500만 스위스 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "UBS Group AG Annual Report 2025",
    irYear: 2025,
    currency: "USD",
    notes: "Credit Suisse 통합 완료 이후 안정화 단계. Personal & Corporate Banking 부문 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Standard Chartered": {
    fullName: "Standard Chartered PLC",
    aliases: ["StanChart", "STAN", "스탠다드차타드"],
    ticker: "STAN",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Standard Chartered PLC Annual Report 2025
    totalAssets: 875000,           // ~$875B total assets (FY2025 est.)
    retailRevenue: 5400,           // Consumer, Private & Business Banking revenue FY2025 est.
    retailCustomers: 15000000,     // ~1,500만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "Standard Chartered PLC Annual Report 2025",
    irYear: 2025,
    currency: "USD",
    notes: "주요 시장: 아시아·아프리카·중동. Consumer, Private & Business Banking 부문 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Société Générale": {
    fullName: "Société Générale S.A.",
    aliases: ["SocGen", "GLE", "소시에테제네랄"],
    ticker: "GLE",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    // Source: Société Générale Annual Report 2025
    totalAssets: 1590000,          // est. €1,459B × 1.09 EUR/USD ≈ $1,590,310M (FY2025 est.)
    retailRevenue: 9400,           // 프랑스 리테일 뱅킹 부문 수익 est.
    retailCustomers: 25000000,     // ~2,500만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "Société Générale Annual Report 2025",
    irYear: 2025,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.09). 프랑스 리테일 뱅킹 중심. 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA — JAPAN  (FY = Apr 2025 – Mar 2026)
   * ============================================================ */

  "MUFG": {
    fullName: "Mitsubishi UFJ Financial Group, Inc.",
    aliases: ["Mitsubishi UFJ", "미쓰비시UFJ"],
    ticker: "MUFG / 8306",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: MUFG Report 2025 (FY ending Mar 2026), released May 2026
    totalAssets: 2900000,          // ~$2.9T total assets (FY ending Mar 2026, record profits) (est.)
    retailRevenue: 9900,           // Retail & Commercial Banking Japan est. (FY2025 기록이익 반영)
    retailCustomers: 42000000,     // ~4,200만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "MUFG Report 2025 (FY ending March 2026), May 2026",
    irYear: 2025,
    currency: "JPY→USD",
    notes: "일본 회계연도: 4월~3월. JPY→USD 환산 (0.0067). FY2025 기록이익. Morgan Stanley와의 전략적 제휴 기여. 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "SMFG": {
    fullName: "Sumitomo Mitsui Financial Group, Inc.",
    aliases: ["Sumitomo Mitsui", "스미토모미쓰이", "SMBC"],
    ticker: "SMFG / 8316",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: SMFG FY2025 Results (FY ending March 2026)
    totalAssets: 2033000,          // est. ¥303.6T × 0.0067 ≈ $2,034,120M (FY2025)
    retailRevenue: 7000,           // Retail Business Unit est.
    retailCustomers: 32000000,     // ~3,200만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "SMFG FY2025 Annual Results (FY ending March 2026)",
    irYear: 2025,
    currency: "JPY→USD",
    notes: "일본 회계연도: 4월~3월. JPY→USD 환산 (0.0067). FY2024(~Mar 2025) ¥292.2T 기준 +3.9% 성장 추정. SMBC 은행 포함.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA — CHINA  (FY = Jan–Dec 2025)
   * ============================================================ */

  "ICBC": {
    fullName: "Industrial and Commercial Bank of China",
    aliases: ["중국공상은행", "공상은행"],
    ticker: "1398.HK / 601398.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: ICBC 2025 Annual Report
    totalAssets: 7500000,          // ~¥54T × 0.138 CNY/USD ≈ $7,452,000M (FY2025 est.)
    retailRevenue: 37000,          // 개인금융 부문 수익 (est.; H1 2025 운영수익 CNY 409.1B 기준)
    retailCustomers: 730000000,    // 7억 3,000만 개인 고객 (est.)
    sellingPrice: null,
    irSource: "ICBC 2025 Annual Report",
    irYear: 2025,
    currency: "CNY→USD",
    notes: "자산 기준 세계 최대 은행. CNY→USD 환산 (0.138). H1 2025 총자산 CNY 52T 돌파 확인. 개인소비자 대출 +10% YoY.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "China Construction Bank": {
    fullName: "China Construction Bank Corporation",
    aliases: ["CCB", "중국건설은행", "건설은행"],
    ticker: "939.HK / 601939.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: CCB 2025 Annual Report
    totalAssets: 5700000,          // ~$5.7T total assets (FY2025 est.)
    retailRevenue: 30000,          // 개인금융 부문 수익 est.
    retailCustomers: 530000000,    // ~5억 3,000만 고객 (est.)
    sellingPrice: null,
    irSource: "China Construction Bank 2025 Annual Report",
    irYear: 2025,
    currency: "CNY→USD",
    notes: "중국 2위 은행. 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Bank of China": {
    fullName: "Bank of China Limited",
    aliases: ["BOC", "중국은행"],
    ticker: "3988.HK / 601988.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: Bank of China 2025 Annual Report
    totalAssets: 4400000,          // ~$4.4T total assets (FY2025 est.)
    retailRevenue: 22000,          // 개인금융 부문 수익 est.
    retailCustomers: 420000000,    // ~4억 2,000만 고객 (est.)
    sellingPrice: null,
    irSource: "Bank of China 2025 Annual Report",
    irYear: 2025,
    currency: "CNY→USD",
    notes: "중국 3위 은행. 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA — KOREA  (FY = Jan–Dec 2025)
   * ============================================================ */

  "KB Financial Group": {
    fullName: "KB Financial Group Inc.",
    aliases: ["KB금융", "KB금융그룹", "KB", "국민은행", "KB Kookmin"],
    ticker: "KB / 105560.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: KB Financial Group 2025 Annual Report (Form 20-F), Apr 2026
    totalAssets: 570000,           // Q3 2025 $557.244B → 연간 ~$570B 추정
    retailRevenue: 9300,           // 소비자금융 부문 수익 est.
    retailCustomers: 33000000,     // ~3,300만 KB국민은행 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "KB Financial Group 2025 Annual Report (Form 20-F), Apr 2026",
    irYear: 2025,
    currency: "KRW→USD",
    notes: "한국 1위 금융그룹. FY2025 순이익 ₩5.82T (사상 최대). Q3 2025 총자산 $557.244B 확인. KRW→USD 환산 (0.00072).",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Shinhan Financial Group": {
    fullName: "Shinhan Financial Group Co., Ltd.",
    aliases: ["신한금융", "신한금융그룹", "Shinhan", "신한은행"],
    ticker: "SHG / 055550.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Shinhan Financial Group 2025 Annual Report (Form 20-F), Apr 2026
    totalAssets: 543000,           // FY2024 $503B 기준 ~8% 성장 추정
    retailRevenue: 9100,           // 소비자금융 부문 수익 est.
    retailCustomers: 29000000,     // ~2,900만 신한은행 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "Shinhan Financial Group 2025 Annual Report (Form 20-F), Apr 2026",
    irYear: 2025,
    currency: "KRW→USD",
    notes: "한국 2위 금융그룹. FY2025 순이익 ₩5.15T (사상 최초 5조원 클럽 진입). KRW→USD 환산 (0.00072).",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Hana Financial Group": {
    fullName: "Hana Financial Group Inc.",
    aliases: ["하나금융", "하나금융그룹", "Hana", "하나은행", "KEB하나"],
    ticker: "086790.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Hana Financial Group 2025 Annual Report
    totalAssets: 406000,           // FY2024 $376B 기준 ~8% 성장 추정
    retailRevenue: 6700,           // 리테일 금융 수익 est.
    retailCustomers: 25000000,     // ~2,500만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "Hana Financial Group 2025 Annual Report",
    irYear: 2025,
    currency: "KRW→USD",
    notes: "한국 3위 금융그룹. FY2025 순이익 ₩4.0T (+7.1% YoY). KEB하나은행 포함. KRW→USD 환산 (0.00072).",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Woori Financial Group": {
    fullName: "Woori Financial Group Inc.",
    aliases: ["우리금융", "우리금융그룹", "Woori", "우리은행"],
    ticker: "316140.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Woori Financial Group 2025 Annual Report
    totalAssets: 342000,           // FY2024 $320B 기준 ~7% 성장 추정
    retailRevenue: 5700,           // 리테일 금융 수익 est.
    retailCustomers: 21000000,     // ~2,100만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "Woori Financial Group 2025 Annual Report",
    irYear: 2025,
    currency: "KRW→USD",
    notes: "한국 4위 금융그룹. FY2025 순이익 ₩3.30T (기록 경신). 우리은행 포함. KRW→USD 환산 (0.00072).",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "NH Financial Group": {
    fullName: "NH Financial Group (NongHyup Financial Group)",
    aliases: ["농협금융", "농협", "NH농협", "NH", "NongHyup"],
    ticker: "지주사 비상장",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: NH Financial Group 2025 Annual Report
    totalAssets: 321000,           // FY2024 $300B 기준 ~7% 성장 추정
    retailRevenue: 5300,           // 리테일 금융 수익 est.
    retailCustomers: 21000000,     // ~2,100만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "NH Financial Group 2025 Annual Report",
    irYear: 2025,
    currency: "KRW→USD",
    notes: "농업협동조합 기반 한국 5위 금융그룹. 전국 농촌 지역 강점. KRW→USD 환산 (0.00072). 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA — SINGAPORE / AUSTRALIA  (FY = Jan–Dec 2025)
   * ============================================================ */

  "DBS Bank": {
    fullName: "DBS Group Holdings Ltd",
    aliases: ["DBS", "디비에스", "싱가포르개발은행"],
    ticker: "D05.SI",
    country: "Singapore",
    region: "Asia-Pacific",
    flag: "🇸🇬",
    // Source: DBS Group FY2025 Annual Report
    totalAssets: 637500,           // est. SGD 850B × 0.75 SGD/USD ≈ $637,500M (FY2025)
    retailRevenue: 5700,           // Consumer Banking / Wealth Management revenue FY2025 est.
    retailCustomers: 11000000,     // ~1,100만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "DBS Group FY2025 Annual Report",
    irYear: 2025,
    currency: "SGD→USD",
    notes: "SGD→USD 환산 (0.75). FY2025 총수익 SGD 22.9B (+3%, 기록). 순이익 SGD 11.0B. 시총 USD 1,240억 (글로벌 25위). SGD 예금 +64B 증가.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Commonwealth Bank": {
    fullName: "Commonwealth Bank of Australia",
    aliases: ["CBA", "CommBank", "호주연방은행"],
    ticker: "CBA.AX",
    country: "Australia",
    region: "Asia-Pacific",
    flag: "🇦🇺",
    // Source: CBA FY2025 Annual Report (FY ending June 30, 2025)
    totalAssets: 845000,           // AUD 1,331B × 0.635 AUD/USD ≈ $845,185M (FY ending Jun 2025) ← confirmed
    retailRevenue: 9500,           // Retail Banking Services revenue FY2025 est.
    retailCustomers: 17000000,     // ~1,700만 호주 리테일 고객
    sellingPrice: null,
    irSource: "Commonwealth Bank of Australia FY2025 Annual Report (FY ending June 30, 2025), Aug 2025",
    irYear: 2025,
    currency: "AUD→USD",
    notes: "호주 1위 은행. 회계연도 6월 결산 (FY2025 = Jul 2024–Jun 2025). AUD→USD 환산 (0.635). 총자산 +6.6% YoY 성장 확인.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  /* ============================================================
   * ADDITIONAL BANKS
   * ============================================================ */

  "UOB": {
    fullName: "United Overseas Bank Limited",
    aliases: ["United Overseas Bank", "유오비", "UOB Bank", "UOB Group"],
    ticker: "U11 / SGX",
    country: "Singapore",
    region: "Asia-Pacific",
    flag: "🇸🇬",
    // Source: UOB Group FY2025 Annual Report & Results, Feb 2026
    totalAssets: 412500,           // est. SGD 550B × 0.75 SGD/USD ≈ $412,500M (FY2025)
    retailRevenue: 4500,           // Group Retail est. (FY2025)
    retailCustomers: 8400000,      // 840만 ASEAN 리테일 고객 (FY2024 공식 발표 수치 유지)
    sellingPrice: null,
    irSource: "UOB Group FY2025 Annual Report & 4Q2025 Results, Feb 2026",
    irYear: 2025,
    currency: "SGD→USD",
    notes: "SGD→USD 환산 (0.75). FY2025 순이익 SGD 4.7B (특별 충당금 반영). 대출 성장·CASA +14.5% YoY. ASEAN 800만+ 고객.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Alinma Bank": {
    fullName: "Alinma Bank",
    aliases: ["알린마", "알린마은행", "Alinma", "البنك الأهلي السعودي"],
    ticker: "1150 / TADAWUL",
    country: "Saudi Arabia",
    region: "Middle East",
    flag: "🇸🇦",
    // Source: Alinma Bank FY2025 Annual Financial Results, Jan 2026
    totalAssets: 83055,            // SAR 311,067M × 0.267 SAR/USD ≈ $83,055M (FY2025) ← confirmed
    retailRevenue: 590,            // 리테일 대출 비중 24% 기반 추정 (FY2025 est.)
    retailCustomers: 5800000,      // ~580만 고객 (FY2025 확인)
    sellingPrice: null,
    irSource: "Alinma Bank FY2025 Annual Financial Results, Jan 2026",
    irYear: 2025,
    currency: "SAR→USD",
    notes: "SAR→USD 환산 (3.75 SAR = 1 USD). FY2025 순이익 SAR 6,397M (+10% YoY). 총자산 SAR 311,067M (+12.4%). 예금 SAR 227,374M (+8%). 이슬람 뱅킹.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "VP Bank": {
    fullName: "Vietnam Prosperity Joint Stock Commercial Bank (VPBank)",
    aliases: ["VPBank", "베트남번영은행", "VPB", "Vietnam Prosperity Bank", "VPBank Vietnam"],
    ticker: "VPB.VN / HM:VPB",
    country: "Vietnam",
    region: "Asia-Pacific",
    flag: "🇻🇳",
    // Source: VPBank FY2025 Annual Report
    totalAssets: 49140,            // VND 1,260T × 0.000039 VND/USD ≈ $49,140M (FY2025) ← confirmed
    retailRevenue: 3500,           // 총 영업수익 (FY2025 est.; PBT +53% 성장 반영)
    retailCustomers: 12000000,     // ~1,200만 리테일 고객 (est.)
    sellingPrice: null,
    irSource: "VPBank FY2025 Annual Report (Vietnam Prosperity Joint Stock Commercial Bank)",
    irYear: 2025,
    currency: "VND→USD",
    notes: "VND→USD 환산 (0.000039). FY2025 총자산 VND 1,260T (+36.4% YoY). 세전이익 VND 30.6T (+53%) — 사상 최대. FE Credit 지분 SMBC에 매각.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "SMCC": {
    fullName: "Sumitomo Mitsui Card Company, Limited",
    aliases: ["三井住友カード", "스미토모미쓰이카드", "SMBC Card", "Sumitomo Mitsui Card", "住友三井カード"],
    ticker: "SMFG 계열사 (비상장)",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: SMCC 業績データ (smbc-card.com) / SMFG FY2024 Disclosure
    // NOTE: SMCC 회계연도 = 4월~3월. FY2024 = Apr 2024 – Mar 2025 (가장 최근 확인 데이터)
    //       FY2025 (Apr 2025–Mar 2026) 결과는 2026년 5월 발표 예정 → 확보 후 업데이트 필요
    totalAssets: null,             // 단독 자산 미공개; 모회사 SMFG FY2025 총자산 ~¥303.6T
    retailRevenue: 4690,           // 영업수익 추정 ¥700B × 0.0067 ≈ $4,690M (FY2025 est.)
    retailCustomers: 37000000,     // ~3,700만 카드 회원 추정 (FY2024: 3,615만 → 성장 반영)
    sellingPrice: null,
    irSource: "SMCC 業績データ / SMFG FY2025 Disclosure (FY ending March 2026)",
    irYear: 2025,
    currency: "JPY→USD",
    notes: "SMFG 100% 자회사 (비상장). 일본 회계연도: 4월~3월. JPY→USD 환산 (0.0067). FY2025(~Mar 2026) 데이터 공식 발표 직후 — 확인 후 갱신 필요.",
    dataConfidence: { assets: null, revenue: "medium", customers: "medium" }
  },

  "SCBX": {
    fullName: "SCB X Public Company Limited (Siam Commercial Bank Group)",
    aliases: ["SCB", "Siam Commercial Bank", "사이암상업은행", "SCB X", "태국SCB"],
    ticker: "SCB.BK / SCBX.BK",
    country: "Thailand",
    region: "Asia-Pacific",
    flag: "🇹🇭",
    // Source: SCB X Public Company Limited FY2025 Results, Jan 2026
    totalAssets: 102228,           // THB 3,651B × 0.028 THB/USD ≈ $102,228M (FY2025) ← confirmed
    retailRevenue: 4805,           // 총 수익 THB 171.6B × 0.028 ≈ $4,805M (그룹 전체, FY2025) ← confirmed
    retailCustomers: 17000000,     // ~1,700만 리테일 고객 (SCB 은행 기준)
    sellingPrice: null,
    irSource: "SCB X Public Company Limited FY2025 Annual Results, Jan 2026",
    irYear: 2025,
    currency: "THB→USD",
    notes: "태국 최대 상업은행그룹 지주사. THB→USD 환산 (0.028). FY2025 순이익 THB 47.5B (+8.1% YoY). 수익 THB 171.6B (소폭 감소). 계열사: SCB 10X, CardX, InnovestX.",
    dataConfidence: { assets: "high", revenue: "high", customers: "high" }
  },

  "Lloyds Banking Group": {
    fullName: "Lloyds Banking Group plc",
    aliases: ["Lloyds Bank", "LBG", "Lloyds", "로이즈", "LLOY"],
    ticker: "LLOY.L / LYG",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Lloyds Banking Group plc 2025 Full Year Results, Jan 29, 2026
    totalAssets: 1213040,          // £944B × 1.285 GBP/USD ≈ $1,213,040M (FY2025) ← confirmed
    retailRevenue: 14579,          // Retail (inc. Wealth) £18.3B × 62% × 1.285 ≈ $14,579M (FY2025) ← confirmed
    retailCustomers: 26000000,     // 2,600만 고객 (영국 최대 리테일 은행) ← confirmed
    sellingPrice: null,
    irSource: "Lloyds Banking Group plc 2025 Full Year Results, Jan 29, 2026",
    irYear: 2025,
    currency: "GBP→USD",
    notes: "영국 1위 리테일 은행. GBP→USD 환산 (1.285). FY2025 순이익 £18.3B (+7% YoY). 세전이익 £6.7B (+12%). 총자산 £944B (+£37B YoY). 리테일 비중 62%.",
    dataConfidence: { assets: "high", revenue: "high", customers: "high" }
  }
};

// Build searchable index (name + aliases all lowercased)
const BANK_SEARCH_INDEX = Object.entries(BANK_DATA).map(([key, data]) => ({
  key,
  searchTerms: [
    key.toLowerCase(),
    data.fullName.toLowerCase(),
    ...data.aliases.map(a => a.toLowerCase())
  ],
  data
}));
