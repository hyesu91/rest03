// ============================================================
// 사이트 전역 데이터 — 회사 정보 / 네비게이션 / 사업 / 프로젝트
// 템플릿 사용 시 이 파일만 수정하면 대부분의 내용이 반영됩니다.
// (진흥기업 chinhung.co.kr 의 실제 페이지 구성을 참고하여 작성)
// ============================================================

export const company = {
  name: 'CHINHUNG',
  nameKo: '진흥기업',
  fullName: 'CHINHUNG INTERNATIONAL INC.',
  copyright: '© 2026 CHINHUNG INTERNATIONAL INC. All rights reserved.',
  // 푸터 상단 소개문 (소스 footer .chinhung 영역)
  intro: [
    '진흥기업은 단순한 건설을 넘어 사람이 머무는 공간과 그 공간을 둘러싼 환경까지 함께 설계합니다.',
    '우리는 삶의 질을 높이는 구조를 고민하며 도시와 자연이 균형을 이루는 지속 가능한 기반을 만들어갑니다. 기술과 책임, 그리고 배려를 더해 조화로운 미래를 완성합니다.',
  ],
  offices: [
    {
      label: '서울지사',
      address: '서울특별시 용산구 후암로 27 (후암동)',
      tel: '02-772-1200',
      fax: '02-754-2972',
    },
    {
      label: '본사',
      address: '인천광역시 연수구 컨벤시아대로 69 807호',
      tel: '032-432-0658',
      fax: '032-432-0659',
    },
  ],
  // 패밀리사이트 (소스 footer select)
  familySites: [
    { name: '효성그룹', url: 'https://www.hyosung.com' },
    { name: '효성중공업', url: 'https://www.hyosungheavyindustries.com' },
    { name: '효성굿스프링스', url: 'https://www.hsgoodsprings.com' },
    { name: '효성티엔씨', url: 'https://www.hyosungtnc.com' },
    { name: '효성화학', url: 'https://www.hyosungchemical.com' },
    { name: '효성티엔에스', url: 'https://korea.hyosunginnovue.com' },
    { name: '효성 ITX', url: 'https://www.hyosungitx.com' },
  ],
  footerLinks: [
    { label: '제보센터', to: '/report' },
    { label: '법적고지', to: '/legal' },
    { label: '개인정보처리방침', to: '/privacy', strong: true },
  ],
}

// 메인 히어로 고정 배너 (소스 .fiexd-banner)
export const fixedBanners = [
  { label: '진흥기업 전자조달 시스템', url: 'https://b2b.chinhung.co.kr/', tone: 'brand' },
  { label: '해링턴 플레이스 홈페이지', url: 'https://harrington.chinhung.co.kr/', tone: 'stone' },
]

// 상단 GNB — 대메뉴 + 하위메뉴 (소스 nav 기준)
export const nav = [
  {
    label: '회사소개',
    to: '/about',
    children: [
      { label: 'CEO 인사말', to: '/about/greetings' },
      { label: '비전/가치', to: '/about/vision' },
      { label: '연혁', to: '/about/history' },
      { label: '브랜드소개', to: '/about/brand' },
    ],
  },
  {
    label: '사업소개',
    to: '/business/housing',
    children: [
      { label: '주택사업', to: '/business/housing' },
      { label: '건축사업', to: '/business/building' },
      { label: '토목사업', to: '/business/civil' },
      { label: '플랜트사업', to: '/business/plant' },
      { label: '해외사업', to: '/business/global' },
    ],
  },
  {
    label: '지속가능경영',
    to: '/sustainability/ethical',
    children: [
      { label: '윤리경영', to: '/sustainability/ethical' },
      { label: '안전경영', to: '/sustainability/safety' },
      { label: '품질경영', to: '/sustainability/quality' },
      { label: '사회공헌', to: '/sustainability/csr' },
    ],
  },
  {
    label: '투자정보',
    to: '/investment',
    children: [
      { label: '기업지배구조', to: '/investment' },
      { label: '재무정보', to: '/investment' },
      { label: '공시', to: '/investment' },
      { label: '공고', to: '/investment' },
      { label: 'IR 자료실', to: '/investment' },
    ],
  },
  {
    label: '고객센터',
    to: '/support',
    children: [
      { label: '공지사항', to: '/support' },
      { label: '협력업체 등록안내', to: 'https://b2b.chinhung.co.kr/', external: true },
      {
        label: '고객문의',
        to: 'https://harrington.chinhung.co.kr/customer/information.jsp',
        external: true,
      },
    ],
  },
  {
    label: '인재채용',
    to: '/recruit',
    children: [
      {
        label: '인재채용',
        to: 'https://hyosung.recruiter.co.kr/appsite/company/index',
        external: true,
      },
    ],
  },
]

// 메인 히어로 슬라이드 (소스 .kv-swiper)
export const heroSlides = [
  { label: 'HERO 01', copy: 'Always by your side' },
  { label: 'HERO 02', copy: 'Enable Today,\nEmpower Tomorrow' },
]

// 메인 founding 섹션 카피 (소스 .founding)
export const founding = {
  text: '진흥기업은 1959년 창립 이래 대한민국 건설 산업의 역사와 함께해 왔습니다. 반세기 건설역사의 축적된 기술력으로 더 나은 미래를 만듭니다.',
  links: [
    { label: 'CEO 인사말', to: '/about/greetings' },
    { label: '비전/가치', to: '/about/vision' },
    { label: '연혁', to: '/about/history' },
    { label: '브랜드소개', to: '/about/brand' },
  ],
}

// 메인 — Our Business 카드 (소스 .business-swiper)
export const businessCards = [
  {
    key: 'housing',
    title: '주택 사업',
    desc: '고객의 라이프스타일을 반영한 프리미엄 주거 공간으로 주거 문화를 선도합니다.',
    to: '/business/housing',
  },
  {
    key: 'building',
    title: '건축사업',
    desc: '첨단 기술과 예술적 감각이 조화된 건축물로 도시의 스카이라인을 바꿉니다.',
    to: '/business/building',
  },
  {
    key: 'civil',
    title: '토목사업',
    desc: '국가 인프라 구축의 핵심 역할을 수행하며 안전하고 편리한 생활 기반을 조성합니다.',
    to: '/business/civil',
  },
  {
    key: 'plant',
    title: '플랜트사업',
    desc: '고도의 기술력이 요구되는 산업 기반 시설을 성공적으로 수행합니다.',
    to: '/business/plant',
  },
  {
    key: 'global',
    title: '해외사업',
    desc: '축적된 기술력과 노하우를 바탕으로 글로벌 시장에 진출하여 역량을 입증합니다.',
    to: '/business/global',
  },
]

// 사업소개 페이지 메타 (탭 / 카테고리)
export const businessPages = {
  housing: {
    title: '주택사업',
    headLabel: 'Housing',
    categories: ['아파트', '주상복합', '오피스텔', '도시정비'],
  },
  building: {
    title: '건축사업',
    headLabel: 'Building',
    categories: ['업무시설', '상업시설', '교육/문화', '의료시설'],
  },
  civil: {
    title: '토목사업',
    headLabel: 'Civil',
    categories: ['도로/포장', '지하철/철도', '교량/터널/기타', '부지조성', '보안시설'],
  },
  plant: {
    title: '플랜트사업',
    headLabel: 'Plant',
    categories: ['발전', '환경', '산업설비'],
  },
  global: {
    title: '해외사업',
    headLabel: 'Global',
    categories: ['아시아', '중동', '기타'],
  },
}

// 토목사업 — 도로/포장 카테고리 실적 (소스 데이터 반영, 이미지는 플레이스홀더)
export const civilProjects = [
  { title: '경부선 화성동탄 방음시설 설치공사', period: '2018.06 ~ 2019.11' },
  { title: '보령-부여 도로건설공사', period: '2016.07 ~ 2023.12' },
  { title: '분당~수서간 도시고속도로 소음저감시설 설치공사', period: '2015.07 ~ 2023.11' },
  { title: '진접-내촌 도로건설공사 2공구', period: '2014.01 ~ 2020.12' },
  { title: '명지지구진입도로 개설공사', period: '2013.07 ~ 2016.09' },
  { title: '장지삼거리 입체화시설 건설공사', period: '2012.01 ~ 2016.12' },
  { title: '충남도청신도시개발사업 2구역 지하차도 건설공사', period: '2010.07 ~ 2012.09' },
  { title: '고속도로 제65호선 주문진 ~ 속초간 4공구', period: '2009.01 ~ 2016.12' },
]

// 메인 More to Discover 공지
export const notices = [
  { id: 9, title: '진흥기업 홈페이지 리뉴얼 오픈 안내', date: '2026.05.27', isNew: true },
  { id: 8, title: '2026년 상반기 신입/경력사원 채용 공고', date: '2026.05.20' },
  { id: 7, title: '진흥기업, ISO 9001 품질경영시스템 인증 갱신', date: '2026.05.05' },
  { id: 6, title: '해링턴 플레이스 신규 분양 일정 안내', date: '2026.04.18' },
]

// 메인 Investor Relation 배너 (소스 .relation)
export const investorRelation = {
  en: 'Investor Relation',
  title: '투자정보',
  desc: '투명한 경영과 지속적인 혁신을 기반으로 기업의 경쟁력을 강화하고, 안정적인 성장 구조를 구축합니다.',
  to: '/investment',
}
