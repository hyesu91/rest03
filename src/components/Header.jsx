import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, company } from '../data/site'

// 하위메뉴 링크 — 내부 라우트는 <Link>, 외부 링크는 <a target="_blank">
function SubLink({ item, className, onClick }) {
  if (item.external) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    )
  }
  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}

// ============================================================
// 상단 GNB — 데스크탑: 가로 메뉴 + 호버 시 메가 서브메뉴
//            모바일: 햄버거 → 슬라이드 패널
// ============================================================
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-white" onMouseLeave={() => setHovered(null)}>
        <div className="mx-auto flex h-20 max-w-container items-center justify-between border-b border-neutral-200 px-4 md:px-10 lg:px-20">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-brand">
            {company.name}
          </Link>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden items-stretch lg:flex">
            {nav.map((item) => (
              <li
                key={item.label}
                className="group flex items-center"
                onMouseEnter={() => setHovered(item.label)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'px-7 py-7 text-lg font-semibold transition-colors',
                      isActive ? 'text-brand' : 'text-neutral-800 hover:text-brand',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* 햄버거 (모바일) */}
          <button
            type="button"
            aria-label="메뉴 열기"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-0.5 w-6 bg-neutral-800" />
            <span className="h-0.5 w-6 bg-neutral-800" />
            <span className="h-0.5 w-6 bg-neutral-800" />
          </button>
        </div>

        {/* 데스크탑 메가 서브메뉴 */}
        <div
          className={[
            'hidden overflow-hidden border-b border-neutral-200 bg-white transition-all duration-200 lg:block',
            hovered ? 'max-h-60 opacity-100' : 'max-h-0 border-b-0 opacity-0',
          ].join(' ')}
        >
          <div className="mx-auto flex max-w-container justify-end px-20">
            {nav.map((item) => (
              <ul
                key={item.label}
                className="flex w-44 flex-col gap-3 py-7"
                onMouseEnter={() => setHovered(item.label)}
              >
                {hovered === item.label &&
                  item.children.map((c) => (
                    <li key={c.label + c.to}>
                      <SubLink
                        item={c}
                        className="block text-center text-base text-neutral-600 transition hover:font-semibold hover:text-brand"
                      />
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>

      {/* 모바일 패널 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-extrabold text-brand">{company.name}</span>
              <button
                type="button"
                aria-label="메뉴 닫기"
                className="text-2xl text-neutral-500"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.label} className="border-b border-neutral-100 pb-2">
                  <Link
                    to={item.to}
                    className="block py-2 text-lg font-bold text-neutral-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <ul className="flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.label + c.to}>
                        <SubLink
                          item={c}
                          className="block py-1.5 pl-3 text-sm text-neutral-500"
                          onClick={() => setMobileOpen(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
