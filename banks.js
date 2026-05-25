/**
 * Bank Intelligence Data
 * Source: FY2024 Annual Reports (IR) from each bank
 * All monetary values in USD Millions
 * Non-USD values converted using 2024 annual average exchange rates:
 *   EUR/USD = 1.08 | GBP/USD = 1.28 | JPY/USD = 0.0066 | KRW/USD = 0.00073
 *
 * dataConfidence: "high" = directly from IR report, "medium" = estimated/converted, "low" = proxy metric
 */
const BANK_DATA = {

  /* ============================================================
   * NORTH AMERICA
   * ============================================================ */

  "JPMorgan Chase": {
    fullName: "JPMorgan Chase & Co.",
    aliases: ["JPM", "JP Morgan", "JP Morgan Chase", "제이피모건"],
    ticker: "JPM",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: JPMorgan Chase 2024 Annual Report (10-K)
    totalAssets: 4000000,          // $4.0T total assets (Dec 31, 2024)
    retailRevenue: 71510,          // Consumer & Community Banking (CCB) net revenue FY2024
    retailCustomers: 80000000,     // ~80M consumer customers; 57M active mobile users reported
    sellingPrice: null,
    irSource: "JPMorgan Chase 2024 Annual Report (10-K), filed Feb 2025",
    irYear: 2024,
    currency: "USD",
    notes: "CCB (Consumer & Community Banking) 부문 매출 기준. 57M 이상 활성 모바일 고객 공식 발표.",
    dataConfidence: { assets: "high", revenue: "high", customers: "medium" }
  },

  "Bank of America": {
    fullName: "Bank of America Corporation",
    aliases: ["BofA", "BoA", "BAC", "뱅크오브아메리카"],
    ticker: "BAC",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Bank of America 2024 Annual Report
    totalAssets: 3261519,          // $3.26T total assets (Dec 31, 2024)
    retailRevenue: 41000,          // Consumer Banking revenue FY2024
    retailCustomers: 70000000,     // 70M+ consumer & small business clients; 37.6M consumer checking accounts
    sellingPrice: null,
    irSource: "Bank of America 2024 Annual Report, filed Jan 2025",
    irYear: 2024,
    currency: "USD",
    notes: "Consumer Banking 부문 매출 기준. 37.6M 소비자 체킹 계좌, 92% 주거래 계좌.",
    dataConfidence: { assets: "high", revenue: "high", customers: "medium" }
  },

  "Wells Fargo": {
    fullName: "Wells Fargo & Company",
    aliases: ["WFC", "웰스파고"],
    ticker: "WFC",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Wells Fargo 2024 Annual Report (10-K)
    totalAssets: 1922125,          // $1.92T total assets (Dec 31, 2024)
    retailRevenue: 32600,          // Consumer Banking & Lending segment revenue FY2024
    retailCustomers: 70000000,     // ~70M retail customers (est.); mobile active +1.5M in 2024
    sellingPrice: null,
    irSource: "Wells Fargo 2024 Annual Report (10-K), Jan 2025",
    irYear: 2024,
    currency: "USD",
    notes: "Consumer Banking & Lending 부문 전체 매출 기준 ($32.6B). 소비자 고객 수는 추정치.",
    dataConfidence: { assets: "high", revenue: "high", customers: "medium" }
  },

  "Citigroup": {
    fullName: "Citigroup Inc.",
    aliases: ["Citi", "C", "Citibank", "시티그룹", "씨티은행"],
    ticker: "C",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Citigroup 2024 Annual Report (10-K)
    totalAssets: 2431000,          // ~$2.43T total assets (Dec 31, 2024)
    retailRevenue: 20800,          // US Personal Banking (USPB) revenue FY2024 (annualized Q1: $5.2B × 4)
    retailCustomers: null,         // Not specifically disclosed by segment
    sellingPrice: null,
    irSource: "Citigroup 2024 Annual Report (10-K) / SEC 10-Q filings",
    irYear: 2024,
    currency: "USD",
    notes: "US Personal Banking(USPB) 부문 매출 추정 ($20.8B). 리테일 고객수는 세그먼트별 미공개.",
    dataConfidence: { assets: "high", revenue: "medium", customers: null }
  },

  "Goldman Sachs": {
    fullName: "The Goldman Sachs Group, Inc.",
    aliases: ["GS", "골드만삭스"],
    ticker: "GS",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Goldman Sachs 2024 Annual Report
    totalAssets: 1728000,          // $1.728T total assets FY2024
    retailRevenue: 16140,          // Asset & Wealth Management net revenues FY2024 ($16.14B)
    retailCustomers: null,         // Primarily institutional; no public retail customer count
    sellingPrice: null,
    irSource: "Goldman Sachs 2024 Annual Report, filed Jan 2025",
    irYear: 2024,
    currency: "USD",
    notes: "Asset & Wealth Management 부문 매출 기준. 주로 기관 투자자 대상 은행으로 리테일 고객수 미공개.",
    dataConfidence: { assets: "high", revenue: "high", customers: null }
  },

  "Morgan Stanley": {
    fullName: "Morgan Stanley",
    aliases: ["MS", "모건스탠리"],
    ticker: "MS",
    country: "USA",
    region: "North America",
    flag: "🇺🇸",
    // Source: Morgan Stanley 2024 Annual Report
    totalAssets: 1260000,          // ~$1.26T total assets FY2024
    retailRevenue: 28420,          // Wealth Management net revenues FY2024
    retailCustomers: 8000000,      // ~8M retail clients via E*TRADE platform
    sellingPrice: null,
    irSource: "Morgan Stanley 2024 Annual Report (10-K), Jan 2025",
    irYear: 2024,
    currency: "USD",
    notes: "Wealth Management 부문 매출 기준 ($28.42B, FY2024 기록). E*TRADE 포함 약 800만 리테일 고객.",
    dataConfidence: { assets: "medium", revenue: "high", customers: "medium" }
  },

  /* ============================================================
   * EUROPE
   * ============================================================ */

  "HSBC": {
    fullName: "HSBC Holdings plc",
    aliases: ["HSBA", "Hong Kong Shanghai Banking Corporation", "에이치에스비씨"],
    ticker: "HSBA / HSBC",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: HSBC 2024 Annual Report (Feb 2025)
    totalAssets: 2975003,          // $2.975T total assets (Dec 31, 2024) — reported in USD
    retailRevenue: 27300,          // Wealth & Personal Banking (WPB) revenue FY2024
    retailCustomers: 40000000,     // ~40M WPB customers globally (est.); 800K new-to-bank in HK alone
    sellingPrice: null,
    irSource: "HSBC Holdings plc Annual Report 2024, Feb 2025",
    irYear: 2024,
    currency: "USD",
    notes: "WPB(Wealth & Personal Banking) 부문 매출 $27.3B (FY2024). 홍콩에서만 신규 고객 80만명. 글로벌 리테일 고객수 추정치.",
    dataConfidence: { assets: "high", revenue: "high", customers: "medium" }
  },

  "Barclays": {
    fullName: "Barclays PLC",
    aliases: ["BARC", "BCS", "바클레이스"],
    ticker: "BARC / BCS",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Barclays PLC Annual Report 2024
    totalAssets: 1943299,          // £1,518,202M × 1.28 GBP/USD ≈ $1,943,298M
    retailRevenue: 34278,          // Total income £26.8B × 1.28 (total group; retail segment data estimated)
    retailCustomers: 20000000,     // 20M+ retail customers (UK & international, inc. Tesco Bank acquisition)
    sellingPrice: null,
    irSource: "Barclays PLC Annual Report 2024, filed Mar 2025",
    irYear: 2024,
    currency: "GBP→USD",
    notes: "GBP→USD 환산 (1.28). 총 그룹 매출 기준 (리테일 부문 세부 분리 어려움). Tesco Bank 인수(2024년 11월) 포함.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "BNP Paribas": {
    fullName: "BNP Paribas S.A.",
    aliases: ["BNP", "BNP Paribas", "비엔피파리바"],
    ticker: "BNP",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    // Source: BNP Paribas FY2024 Results (Feb 2025)
    totalAssets: 2921302,          // €2,704,910M × 1.08 EUR/USD ≈ $2,921,303M
    retailRevenue: 28891,          // CPBS (Commercial, Personal Banking & Services) €26,751M × 1.08 ≈ $28,891M
    retailCustomers: 30000000,     // ~30M individual retail banking clients globally (est.)
    sellingPrice: null,
    irSource: "BNP Paribas FY2024 Results Press Release, Feb 4, 2025",
    irYear: 2024,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.08). CPBS 부문(Commercial, Personal Banking & Services) 매출 €26,751M 기준. 63개국 영업.",
    dataConfidence: { assets: "high", revenue: "high", customers: "medium" }
  },

  "Deutsche Bank": {
    fullName: "Deutsche Bank AG",
    aliases: ["DB", "도이치뱅크"],
    ticker: "DBK / DB",
    country: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    // Source: Deutsche Bank 2024 Annual Report (Jan 2025)
    totalAssets: 1512000,          // ~€1,400,000M × 1.08 EUR/USD ≈ $1,512,000M (Q3 2024 data)
    retailRevenue: 10152,          // Private Bank net revenues €9,400M × 1.08 ≈ $10,152M
    retailCustomers: 20000000,     // ~20M Private Bank customers globally (est.)
    sellingPrice: null,
    irSource: "Deutsche Bank 2024 Full Year Results, Jan 30, 2025",
    irYear: 2024,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.08). Private Bank 부문 순수익 €9.4B (FY2024). AuM 기록: €633B. Personal Banking 매출 €5.3B 포함.",
    dataConfidence: { assets: "medium", revenue: "high", customers: "medium" }
  },

  "Santander": {
    fullName: "Banco Santander, S.A.",
    aliases: ["SAN", "산탄데르"],
    ticker: "SAN",
    country: "Spain",
    region: "Europe",
    flag: "🇪🇸",
    // Source: Banco Santander 2024 Annual Report (Feb 2025)
    totalAssets: 1984047,          // €1,837,081M × 1.08 EUR/USD ≈ $1,984,047M
    retailRevenue: null,           // Retail-specific revenue not separately disclosed; total group profit €12,574M
    retailCustomers: 173000000,    // 173M total customers globally (FY2024 record)
    sellingPrice: null,
    irSource: "Banco Santander 2024 Annual Report, Feb 2025",
    irYear: 2024,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.08). FY2024 총 고객 수 1억 7,300만명 (전년 대비 800만명 증가). 리테일 부문 매출 세부 미공개.",
    dataConfidence: { assets: "high", revenue: null, customers: "high" }
  },

  "ING Group": {
    fullName: "ING Groep N.V.",
    aliases: ["ING", "아이엔지"],
    ticker: "INGA",
    country: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    // Source: ING Group 2024 Annual Report
    totalAssets: 1027260,          // €951,167M × 1.08 EUR/USD ≈ $1,027,260M (approx 2024)
    retailRevenue: 10368,          // Retail Banking total income €9,600M × 1.08 ≈ $10,368M (est.)
    retailCustomers: 39000000,     // 39M retail customers (2024 reported)
    sellingPrice: null,
    irSource: "ING Group Annual Report 2024",
    irYear: 2024,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.08). 리테일 고객 3,900만명 공식 발표. 리테일 매출은 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "high" }
  },

  "UBS": {
    fullName: "UBS Group AG",
    aliases: ["UBSG", "유비에스"],
    ticker: "UBSG / UBS",
    country: "Switzerland",
    region: "Europe",
    flag: "🇨🇭",
    // Source: UBS Group 2024 Annual Report (inc. Credit Suisse integration)
    totalAssets: 1730000,          // ~$1.73T total assets (2024, inc. Credit Suisse)
    retailRevenue: 8100,           // Personal & Corporate Banking revenue ~$8.1B (est.)
    retailCustomers: 5000000,      // ~5M Swiss retail & corporate clients (est.)
    sellingPrice: null,
    irSource: "UBS Group AG Annual Report 2024",
    irYear: 2024,
    currency: "USD",
    notes: "Credit Suisse 통합 후 자산 기준. Personal & Corporate Banking 부문 추정 매출. 스위스 내 리테일 중심.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Standard Chartered": {
    fullName: "Standard Chartered PLC",
    aliases: ["StanChart", "STAN", "스탠다드차타드"],
    ticker: "STAN",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Standard Chartered 2024 Annual Report
    totalAssets: 826000,           // ~$826B total assets (2024 est.)
    retailRevenue: 5100,           // Consumer, Private & Business Banking revenue ~$5.1B (est.)
    retailCustomers: 15000000,     // ~15M retail customers (est., primarily Asia/Africa/Middle East)
    sellingPrice: null,
    irSource: "Standard Chartered PLC Annual Report 2024",
    irYear: 2024,
    currency: "USD",
    notes: "Consumer, Private & Business Banking 부문 추정 매출. 주요 시장: 아시아·아프리카·중동.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Société Générale": {
    fullName: "Société Générale S.A.",
    aliases: ["SocGen", "GLE", "소시에테제네랄"],
    ticker: "GLE",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    // Source: Société Générale 2024 Annual Report
    totalAssets: 1554120,          // €1,439,000M × 1.08 ≈ $1,554,120M (2024 est.)
    retailRevenue: 8964,           // French retail banking NBI €8,300M × 1.08 ≈ $8,964M (est.)
    retailCustomers: 25000000,     // ~25M retail customers in France & abroad (est.)
    sellingPrice: null,
    irSource: "Société Générale Annual Report 2024",
    irYear: 2024,
    currency: "EUR→USD",
    notes: "EUR→USD 환산 (1.08). 프랑스 리테일 뱅킹 부문 매출 추정치. 전체 그룹 포함 약 2,500만 고객.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA - JAPAN
   * ============================================================ */

  "MUFG": {
    fullName: "Mitsubishi UFJ Financial Group, Inc.",
    aliases: ["Mitsubishi UFJ", "미쓰비시UFJ", "무UFG"],
    ticker: "MUFG / 8306",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: MUFG 2024 Annual Report / Form 20-F
    totalAssets: 2785552,          // ~$2.79T total assets (2024 reported in USD)
    retailRevenue: 9240,           // Retail & Commercial Banking Japan est. ~¥1.4T × 0.0066 ≈ $9,240M
    retailCustomers: 40000000,     // ~40M retail customers in Japan (est.)
    sellingPrice: null,
    irSource: "MUFG Annual Report 2024 (Form 20-F)",
    irYear: 2024,
    currency: "JPY→USD",
    notes: "세계 최대 일본계 은행. JPY→USD 환산 (0.0066). 리테일 매출 및 고객수는 추정치.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "SMFG": {
    fullName: "Sumitomo Mitsui Financial Group, Inc.",
    aliases: ["Sumitomo Mitsui", "스미토모미쓰이", "SMBC"],
    ticker: "SMFG / 8316",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: SMFG 2024 Annual Report
    totalAssets: 1980000,          // ~¥300T × 0.0066 ≈ $1,980,000M (est.)
    retailRevenue: 6600,           // Retail Business Unit est. ~¥1T × 0.0066 ≈ $6,600M
    retailCustomers: 30000000,     // ~30M retail customers in Japan (est.)
    sellingPrice: null,
    irSource: "SMFG Annual Report 2024",
    irYear: 2024,
    currency: "JPY→USD",
    notes: "JPY→USD 환산 (0.0066). 스미토모 미쓰이 은행(SMBC) 포함. 매출 및 고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA - CHINA
   * ============================================================ */

  "ICBC": {
    fullName: "Industrial and Commercial Bank of China",
    aliases: ["중국공상은행", "공상은행"],
    ticker: "1398.HK / 601398.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: ICBC 2024 Annual Results Announcement
    totalAssets: 7303000,          // $7.303T — world's largest bank by assets (FY2024)
    retailRevenue: 35000,          // Personal banking/retail revenue est. ~RMB 255B × 0.137 ≈ $34,935M
    retailCustomers: 700000000,    // 700M+ personal banking customers (est.; largest retail bank)
    sellingPrice: null,
    irSource: "ICBC 2024 Annual Results Announcement, Mar 2025",
    irYear: 2024,
    currency: "CNY→USD",
    notes: "자산 기준 세계 최대 은행. 리테일 매출·고객수 추정치 (CNY→USD 0.137). 개인 예금 FY2024 +11.9% 증가.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "China Construction Bank": {
    fullName: "China Construction Bank Corporation",
    aliases: ["CCB", "중국건설은행", "건설은행"],
    ticker: "939.HK / 601939.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: CCB 2024 Annual Report
    totalAssets: 5400000,          // ~$5.4T total assets (2024 est.)
    retailRevenue: 28000,          // Personal banking revenue est.
    retailCustomers: 500000000,    // ~500M personal banking customers (est.)
    sellingPrice: null,
    irSource: "China Construction Bank 2024 Annual Report",
    irYear: 2024,
    currency: "CNY→USD",
    notes: "중국 2위 은행. 리테일 매출·고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Bank of China": {
    fullName: "Bank of China Limited",
    aliases: ["BOC", "중국은행"],
    ticker: "3988.HK / 601988.SH",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    // Source: Bank of China 2024 Annual Report
    totalAssets: 4200000,          // ~$4.2T total assets (2024 est.)
    retailRevenue: 20000,          // Personal banking revenue est.
    retailCustomers: 400000000,    // ~400M customers (est.)
    sellingPrice: null,
    irSource: "Bank of China 2024 Annual Report",
    irYear: 2024,
    currency: "CNY→USD",
    notes: "중국 3위 은행. 매출 및 고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA - KOREA
   * ============================================================ */

  "KB Financial Group": {
    fullName: "KB Financial Group Inc.",
    aliases: ["KB금융", "KB금융그룹", "KB", "국민은행", "KB Kookmin"],
    ticker: "KB / 105560.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: KB Financial Group 2024 Annual Report (Form 20-F, Apr 2025)
    totalAssets: 512799,           // $512.8B total assets (FY2024)
    retailRevenue: 8790,           // Consumer banking revenue est. from $23.77B total × ~37%
    retailCustomers: 32000000,     // ~32M KB Kookmin Bank retail customers (est.)
    sellingPrice: null,
    irSource: "KB Financial Group 2024 Annual Report (Form 20-F), Apr 25, 2025",
    irYear: 2024,
    currency: "USD",
    notes: "한국 1위 금융그룹. KB국민은행 포함 11개 계열사. 리테일 매출 및 고객수 추정치.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "Shinhan Financial Group": {
    fullName: "Shinhan Financial Group Co., Ltd.",
    aliases: ["신한금융", "신한금융그룹", "Shinhan", "신한은행"],
    ticker: "SHG / 055550.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Shinhan Financial Group 2024 Annual Report
    totalAssets: 503000,           // ~$503B total assets (FY2024)
    retailRevenue: 8617,           // Consumer banking revenue est. from $23.82B total × ~36%
    retailCustomers: 28000000,     // ~28M Shinhan Bank retail customers (est.)
    sellingPrice: null,
    irSource: "Shinhan Financial Group 2024 Annual Report",
    irYear: 2024,
    currency: "USD",
    notes: "한국 2위 금융그룹. 신한은행 포함 주요 계열사. 리테일 매출 및 고객수 추정치.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "Hana Financial Group": {
    fullName: "Hana Financial Group Inc.",
    aliases: ["하나금융", "하나금융그룹", "Hana", "하나은행", "KEB하나"],
    ticker: "086790.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Hana Financial Group 2024 Annual Report
    totalAssets: 376000,           // ~$376B total assets (2024 est. in USD)
    retailRevenue: 6200,           // Retail banking revenue est.
    retailCustomers: 24000000,     // ~24M retail customers (est.)
    sellingPrice: null,
    irSource: "Hana Financial Group 2024 Annual Report",
    irYear: 2024,
    currency: "KRW→USD",
    notes: "한국 3위 금융그룹. KEB하나은행 포함. KRW→USD 환산. 리테일 매출 및 고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Woori Financial Group": {
    fullName: "Woori Financial Group Inc.",
    aliases: ["우리금융", "우리금융그룹", "Woori", "우리은행"],
    ticker: "316140.KS",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: Woori Financial Group 2024 Annual Report
    totalAssets: 320000,           // ~$320B total assets (2024 est. in USD)
    retailRevenue: 5400,           // Retail banking revenue est.
    retailCustomers: 20000000,     // ~20M retail customers (est.)
    sellingPrice: null,
    irSource: "Woori Financial Group 2024 Annual Report",
    irYear: 2024,
    currency: "KRW→USD",
    notes: "한국 4위 금융그룹. 우리은행 포함. KRW→USD 환산. 리테일 매출 및 고객수 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "NH Financial Group": {
    fullName: "NH Financial Group (NongHyup Financial Group)",
    aliases: ["농협금융", "농협", "NH농협", "NH", "NongHyup"],
    ticker: "지주사 비상장",
    country: "South Korea",
    region: "Asia-Pacific",
    flag: "🇰🇷",
    // Source: NH Financial Group 2024 Annual Report
    totalAssets: 300000,           // ~$300B total assets (2024 est.)
    retailRevenue: 5000,           // Retail banking revenue est.
    retailCustomers: 20000000,     // ~20M retail customers (est.)
    sellingPrice: null,
    irSource: "NH Financial Group 2024 Annual Report",
    irYear: 2024,
    currency: "KRW→USD",
    notes: "농업협동조합 기반 한국 5위 금융그룹. 전국 농촌 지역 강점. KRW→USD 환산. 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  /* ============================================================
   * ASIA - SINGAPORE / AUSTRALIA
   * ============================================================ */

  "DBS Bank": {
    fullName: "DBS Group Holdings Ltd",
    aliases: ["DBS", "디비에스", "싱가포르개발은행"],
    ticker: "D05.SI",
    country: "Singapore",
    region: "Asia-Pacific",
    flag: "🇸🇬",
    // Source: DBS Group 2024 Annual Report
    totalAssets: 541000,           // ~SGD 726B × 0.745 ≈ $541B (2024 est.)
    retailRevenue: 5200,           // Consumer Banking / Wealth Management revenue est.
    retailCustomers: 10000000,     // ~10M retail customers (est.)
    sellingPrice: null,
    irSource: "DBS Group 2024 Annual Report",
    irYear: 2024,
    currency: "SGD→USD",
    notes: "동남아시아 최대 은행. SGD→USD 환산 (0.745). Consumer Banking & Wealth 부문 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "medium" }
  },

  "Commonwealth Bank": {
    fullName: "Commonwealth Bank of Australia",
    aliases: ["CBA", "CommBank", "호주연방은행"],
    ticker: "CBA.AX",
    country: "Australia",
    region: "Asia-Pacific",
    flag: "🇦🇺",
    // Source: CBA FY2024 Annual Report (Jun 2024)
    totalAssets: 1248000,          // ~AUD 1,248B (reported); USD ≈ $833B (0.668 AUD/USD)
    retailRevenue: 8900,           // Retail Banking Services revenue est. ~AUD 13.3B × 0.668
    retailCustomers: 16000000,     // ~16M Australian retail customers
    sellingPrice: null,
    irSource: "Commonwealth Bank of Australia FY2024 Annual Report (FY ending Jun 2024)",
    irYear: 2024,
    currency: "AUD→USD",
    notes: "호주 1위 은행. AUD→USD 환산 (0.668). FY는 6월 결산. 리테일 매출 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "high" }
  },

  /* ============================================================
   * ADDITIONAL RESEARCHED BANKS
   * ============================================================ */

  "UOB": {
    fullName: "United Overseas Bank Limited",
    aliases: ["United Overseas Bank", "유오비", "UOB Bank", "UOB Group"],
    ticker: "U11 / SGX",
    country: "Singapore",
    region: "Asia-Pacific",
    flag: "🇸🇬",
    // Source: UOB Group FY2024 Annual Report & 4Q2024 Results (Feb 2025)
    totalAssets: 397309,           // SGD ~533.3B × 0.745 SGD/USD ≈ $397,309M (FY2024 est.)
    retailRevenue: 4247,           // Group Retail est. ~40% of total income SGD 14.3B × 0.745 ≈ $4,247M
    retailCustomers: 8400000,      // 8.4M retail customers in ASEAN (FY2024 공식 발표)
    sellingPrice: null,
    irSource: "UOB Group FY2024 Annual Report & 4Q2024 Results, Feb 2025",
    irYear: 2024,
    currency: "SGD→USD",
    notes: "동남아 주요 은행. SGD→USD 환산 (0.745). FY2024 기록 순이익 SGD 6.0B (+6%). 신규 고객 85만명 (절반 디지털 채널). 리테일 매출은 그룹 내 추정치.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "high" }
  },

  "Alinma Bank": {
    fullName: "Alinma Bank",
    aliases: ["알린마", "알린마은행", "Alinma", "البنك الأهلي السعودي"],
    ticker: "1150 / TADAWUL",
    country: "Saudi Arabia",
    region: "Middle East",
    flag: "🇸🇦",
    // Source: Alinma Bank 2024 Annual Financial Results (Jan 2025)
    totalAssets: 73913,            // SAR 276,827M × 0.267 SAR/USD ≈ $73,913M (FY2024)
    retailRevenue: 554,            // 리테일 대출 비중 24% × 융자수익 SAR 8,649M × 0.267 ≈ $554M (est.)
    retailCustomers: 4670000,      // ~467만 고객 (FY2024); 2025년 3월 기준 580만명
    sellingPrice: null,
    irSource: "Alinma Bank 2024 Annual Financial Results, Jan 2025 / Q4 2024 Earnings",
    irYear: 2024,
    currency: "SAR→USD",
    notes: "사우디아라비아 이슬람 은행. SAR→USD 환산 (3.75 SAR = 1 USD). FY2024 순이익 SAR 5,832M (+20.5%). 고객예금 SAR 210,545M (+12.1%). 2025 사우디 최우수 리테일은행(Global Economics 선정).",
    dataConfidence: { assets: "high", revenue: "medium", customers: "high" }
  },

  "VP Bank AG": {
    fullName: "VP Bank AG",
    aliases: ["VP Bank", "Verwaltungs- und Privat-Bank", "리히텐슈타인VP은행"],
    ticker: "VPBN.SW",
    country: "Liechtenstein",
    region: "Europe",
    flag: "🇱🇮",
    // Source: VP Bank AG Annual Report 2024
    totalAssets: 11872,            // CHF 10.6B × 1.12 CHF/USD ≈ $11,872M (FY2024)
    retailRevenue: 370,            // 영업수익 CHF 330.5M × 1.12 ≈ $370M (FY2024; -9.3% YoY)
    retailCustomers: null,         // 프라이빗 뱅킹 중심; 고객 자산 CHF 56.4B
    sellingPrice: null,
    irSource: "VP Bank AG Annual Report 2024, Mar 2025",
    irYear: 2024,
    currency: "CHF→USD",
    notes: "리히텐슈타인 사립 프라이빗 뱅크. CHF→USD 환산 (1.12). 운용자산 CHF 56.4B. FY2024 그룹 순이익 CHF 18.5M. 직원 945명. 고객예금 CHF 8.9B, 대출 CHF 5.9B.",
    dataConfidence: { assets: "high", revenue: "high", customers: null }
  },

  "VPBank Vietnam": {
    fullName: "Vietnam Prosperity Joint Stock Commercial Bank (VPBank)",
    aliases: ["VPBank", "베트남번영은행", "VPB", "Vietnam Prosperity Bank", "VP Bank Vietnam"],
    ticker: "VPB.VN / HM:VPB",
    country: "Vietnam",
    region: "Asia-Pacific",
    flag: "🇻🇳",
    // Source: VPBank Annual Report 2024
    totalAssets: 36307,            // VND 923.85T × 0.0000393 VND/USD ≈ $36,307M (FY2024)
    retailRevenue: 2700,           // 총 영업수익 추정 ~$2.7B (리테일 중심 포트폴리오)
    retailCustomers: 10000000,     // ~1,000만 리테일 고객 (est.; FE Credit 제외)
    sellingPrice: null,
    irSource: "VPBank Annual Report 2024 (Vietnam Prosperity Joint Stock Commercial Bank)",
    irYear: 2024,
    currency: "VND→USD",
    notes: "베트남 주요 상업은행. VND→USD 환산 (0.0000393). FY2024 자산 VND 923.85T (+13.0%). 4Q24 세전이익 VND 6.1T (+85% YoY). 소비자금융 FE Credit 지분은 SMBC에 매각.",
    dataConfidence: { assets: "high", revenue: "medium", customers: "medium" }
  },

  "SMCC": {
    fullName: "Sumitomo Mitsui Card Company, Limited",
    aliases: ["三井住友カード", "스미토모미쓰이카드", "SMBC Card", "Sumitomo Mitsui Card", "住友三井カード"],
    ticker: "SMFG 계열사 (비상장)",
    country: "Japan",
    region: "Asia-Pacific",
    flag: "🇯🇵",
    // Source: Sumitomo Mitsui Card 業績データ (smbc-card.com) / SMFG FY2024 Disclosure
    totalAssets: null,             // 단독 자산 미공개; 모회사 SMFG 총자산 ¥292.2T (FY2024)
    retailRevenue: 4476,           // 営業収益 ¥678.05B × 0.0066 ≈ $4,476M (FY ended Mar 2025)
    retailCustomers: 36150000,     // 3,615만 카드 회원 (SMBC Finance Service 포함, 2024년 3월 기준)
    sellingPrice: null,
    irSource: "Sumitomo Mitsui Card 業績データ (smbc-card.com) / SMFG FY2024 Annual Disclosure",
    irYear: 2024,
    currency: "JPY→USD",
    notes: "SMFG(三井住友フィナンシャルグループ) 100% 자회사. JPY→USD 환산 (0.0066). 회원수 3,615만명. 영업수익 ¥678B (FY ended Mar 2025). SMFG 그룹 신용카드 사업 핵심.",
    dataConfidence: { assets: null, revenue: "high", customers: "high" }
  },

  "SCBX": {
    fullName: "SCB X Public Company Limited (Siam Commercial Bank Group)",
    aliases: ["SCB", "Siam Commercial Bank", "사이암상업은행", "SCB X", "태국SCB"],
    ticker: "SCB.BK / SCBX.BK",
    country: "Thailand",
    region: "Asia-Pacific",
    flag: "🇹🇭",
    // Source: SCB X Public Company Limited 4Q2024 Results (Jan 2025)
    totalAssets: 94149,            // THB ~3,487B × 0.027 THB/USD ≈ $94,149M (FY2024 est.)
    retailRevenue: 4655,           // 총 수익 THB 172.4B × 0.027 ≈ $4,655M (그룹 전체, FY2024)
    retailCustomers: 17000000,     // ~1,700만 리테일 고객 (SCB 은행 기준)
    sellingPrice: null,
    irSource: "SCB X Public Company Limited 4Q2024 Results & Annual Report 2024, Jan 2025",
    irYear: 2024,
    currency: "THB→USD",
    notes: "태국 최대 상업은행그룹 지주사. THB→USD 환산 (0.027). FY2024 순이익 THB 43,943M (+1.0%). NII THB 129,424M (+3.8%). 계열사: SCB 10X, CardX, InnovestX 등.",
    dataConfidence: { assets: "medium", revenue: "medium", customers: "high" }
  },

  "Lloyds Banking Group": {
    fullName: "Lloyds Banking Group plc",
    aliases: ["Lloyds Bank", "LBG", "Lloyds", "로이즈", "LLOY"],
    ticker: "LLOY.L / LYG",
    country: "UK",
    region: "Europe",
    flag: "🇬🇧",
    // Source: Lloyds Banking Group plc Annual Report 2024 (Feb 2025)
    totalAssets: 782353,           // £611,213M × 1.28 GBP/USD ≈ $782,353M (FY2024)
    retailRevenue: 13952,          // Retail (inc. Wealth) £10.9B × 1.28 ≈ $13,952M (FY2024, 총수익의 62%)
    retailCustomers: 26000000,     // 2,600만 고객 (영국 최대 리테일 은행)
    sellingPrice: null,
    irSource: "Lloyds Banking Group plc Annual Report 2024, Feb 20, 2025",
    irYear: 2024,
    currency: "GBP→USD",
    notes: "영국 1위 리테일 은행. GBP→USD 환산 (1.28). FY2024 총수익 £17.1B (-7% YoY). 리테일 부문(Retail inc. Wealth) 비중 62%. 고객예금 £482B+. 세후이익 £4.5B. Tesco Bank 인수 효과 포함.",
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
