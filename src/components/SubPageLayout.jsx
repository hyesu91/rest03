import { NavLink } from 'react-router-dom'
import Placeholder from './Placeholder'

// ============================================================
// 서브페이지 공통 레이아웃
//  - 상단 sticky 탭 네비 (대카테고리 제목 + 빵부스러기 + 탭 메뉴)
//  - 페이지헤드 이미지(플레이스홀더) + 선택적 타이틀 오버레이
//  - 본문(children)
//
//  hero (선택): 소스의 .page-head-title-wrap 처럼 헤드 이미지 위에
//    좌(섹션 대표문) / 우(소분류 제목·슬로건·설명) 오버레이를 노출
//    { left: { tit, desc }, right: { tit, slogan, desc } }
// ============================================================
export default function SubPageLayout({ sectionTitle, tabs, headLabel, hero, children }) {
  return (
    <div>
      {/* sticky 탭 네비 */}
      <div className="sticky top-20 z-30 bg-white shadow-sm">
        <div className="mx-auto max-w-container px-4 pt-12 md:px-10 lg:px-20">
          <div className="flex flex-col-reverse justify-between md:flex-row">
            <h2 className="mb-6 text-4xl font-bold leading-none text-stone-500 md:mb-12 md:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mb-4 text-sm font-medium text-zinc-500 md:mb-0">
              홈<span className="ml-3 border-l border-zinc-300 pl-3">{sectionTitle}</span>
            </p>
          </div>

          <ul className="flex w-full justify-around overflow-x-auto font-bold">
            {tabs.map((t) => (
              <li key={t.to} className="shrink-0">
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    [
                      'block whitespace-nowrap border-b-2 px-4 py-5 transition md:px-10 md:py-7',
                      isActive
                        ? 'border-brand text-brand'
                        : 'border-transparent text-neutral-700 hover:text-brand',
                    ].join(' ')
                  }
                >
                  {t.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 페이지헤드 이미지 + 오버레이 */}
      <div className="relative">
        <Placeholder label={`PAGE HEAD — ${headLabel}`} ratio="32/9" dark />
        {hero && (
          <div className="absolute inset-0 flex items-center bg-black/40">
            <div className="mx-auto grid w-full max-w-container gap-8 px-4 text-white md:grid-cols-2 md:px-10 lg:px-20">
              {/* 좌: 섹션 대표문 */}
              <div>
                {hero.left?.tit && (
                  <p className="mb-3 text-2xl font-bold md:text-3xl">{hero.left.tit}</p>
                )}
                {hero.left?.desc && (
                  <p className="text-sm leading-7 text-white/80 md:text-base">{hero.left.desc}</p>
                )}
              </div>
              {/* 우: 소분류 제목·슬로건·설명 */}
              <div className="md:border-l md:border-white/30 md:pl-10">
                {hero.right?.tit && (
                  <p className="mb-3 text-3xl font-bold md:text-4xl">{hero.right.tit}</p>
                )}
                {hero.right?.slogan && (
                  <p className="mb-3 text-lg font-semibold text-white/90">{hero.right.slogan}</p>
                )}
                {hero.right?.desc && (
                  <p className="hidden text-sm leading-7 text-white/80 md:block">
                    {hero.right.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 본문 */}
      <div className="border-b border-neutral-200 py-16 md:py-24">{children}</div>
    </div>
  )
}
