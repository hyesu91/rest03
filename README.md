# rest03 — 건설사 회사 사이트 템플릿

[chinhung.co.kr](https://www.chinhung.co.kr/)(진흥기업) 의 디자인·구성을 참고하여 만든 **React 기반 건설사 회사 홈페이지 템플릿**입니다.
모든 이미지는 **플레이스홀더**로 표기되어 있어, 실제 이미지로 교체하기만 하면 바로 사용할 수 있습니다.

## 기술 스택

- **React 18** + **Vite 5**
- **React Router 6** (HashRouter — GitHub Pages 정적 호스팅 호환)
- **Tailwind CSS 3**
- 폰트: Pretendard (CDN)

## 구조

```
src/
├── main.jsx              # 진입점 (HashRouter)
├── App.jsx               # 라우팅
├── index.css             # Tailwind + 공통 스타일
├── data/
│   └── site.js           # ★ 회사정보·네비·사업·실적·배너 데이터 (여기만 수정하면 대부분 반영)
├── components/
│   ├── Header.jsx        # 상단 GNB (데스크탑 메가메뉴 / 모바일 패널, 외부링크 지원)
│   ├── Footer.jsx        # 푸터 (주소·Family site·정책링크)
│   ├── ScrollToTop.jsx   # 라우트 변경 시 스크롤 초기화
│   ├── ScrollToTopButton.jsx  # 우측하단 맨위로 버튼
│   ├── SubPageLayout.jsx # 서브페이지 공통 (sticky 탭 + 페이지헤드 오버레이)
│   └── Placeholder.jsx   # 이미지 플레이스홀더
└── pages/
    ├── Home.jsx          # 메인 (히어로 슬라이더+카드그리드 / Founding / Our Business / Sustainability / 공지 / IR)
    ├── Business.jsx      # 사업소개 (카테고리 탭 + 실적 그리드 + 페이지네이션)
    ├── Sustainability.jsx# 지속가능경영 (품질경영 선언·방침·인증)
    ├── About.jsx         # 회사소개 (CEO인사말·연혁 등)
    └── SimplePage.jsx    # 투자정보/고객센터/인재채용 등 단순 페이지
```

## 제공 소스 반영 내역

참고로 제공받은 진흥기업 페이지 소스(메인 / 지속가능경영-품질경영)를 다음과 같이 구분하여 반영했습니다.

- **메인** — KV 슬라이더 + 고정배너(전자조달·해링턴) + 카드 그리드, Founding(1959 창립) 카피, Our Business 카드, Sustainable Foundations 배너, More to Discover 공지, Investor Relation 배너
- **품질경영** — 페이지헤드 오버레이("품질 경쟁력 강화로 고객감동 실현"), 품질 경영 선언 / 품질경영방침 3카드 / 인증현황(ISO 9001·14001)
- **공통** — Header GNB(외부링크 포함) / Footer(주소·패밀리사이트·정책링크)

## 페이지 / 라우트

| 메뉴 | 경로 |
| --- | --- |
| 메인 | `/` |
| 회사소개 | `/about/greetings` `/about/vision` `/about/history` `/about/brand` |
| 사업소개 | `/business/housing` `…/building` `…/civil` `…/plant` `…/global` |
| 지속가능경영 | `/sustainability/ethical` `…/safety` `…/quality` `…/csr` |
| 투자정보·고객센터·인재채용 | `/investment` `/support` `/recruit` |

## 개발

```bash
npm install
npm run dev      # http://localhost:5173/rest03/
npm run build    # dist/
npm run preview
```

## 배포

`main` 브랜치 push 시 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 빌드 후
GitHub Pages 에 배포합니다. 배포 URL: `https://hyesu91.github.io/rest03/`

> 최초 1회 GitHub 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 전환해야 합니다.
> Vite `base` 가 `/rest03/` 로 설정되어 있습니다. 다른 경로/도메인에 배포하려면 `vite.config.js` 의 `base` 를 수정하세요.

## 커스터마이징

- **회사 정보 / 메뉴 / 실적 / 배너**: `src/data/site.js`
- **브랜드 컬러**: `tailwind.config.js` 의 `colors.brand` / `colors.accent`
- **이미지 교체**: `Placeholder` 컴포넌트를 실제 `<img>` 로 교체
