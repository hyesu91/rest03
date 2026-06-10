import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import {
  heroSlides,
  fixedBanners,
  founding,
  businessCards,
  notices,
  investorRelation,
} from '../data/site'

// ------------------------------------------------------------
// 히어로 — KV 슬라이더(자동전환·좌우·인디케이터) + 고정 배너 + 카드 그리드
// (소스 .main-intro / .kv-swiper / .card-wrap)
// ------------------------------------------------------------
function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const go = (dir) => setIdx((i) => (i + dir + heroSlides.length) % heroSlides.length)

  return (
    <section className="bg-neutral-900">
      <div className="mx-auto flex max-w-container flex-col gap-4 px-4 py-4 lg:flex-row lg:px-10 lg:py-6">
        {/* KV 슬라이더 */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl md:h-[560px] lg:h-[640px] lg:flex-[2]">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={[
                'absolute inset-0 transition-opacity duration-1000',
                i === idx ? 'opacity-100' : 'pointer-events-none opacity-0',
              ].join(' ')}
            >
              <Placeholder label={s.label} ratio="auto" className="h-full" dark />
              <div className="absolute inset-0 flex items-end">
                <p className="whitespace-pre-line p-8 text-4xl font-medium leading-tight text-white drop-shadow md:p-12 md:text-6xl lg:text-7xl">
                  {s.copy}
                </p>
              </div>
            </div>
          ))}

          {/* 좌우 네비 */}
          <button
            type="button"
            aria-label="이전 슬라이드"
            onClick={() => go(-1)}
            className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white/20"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 슬라이드"
            onClick={() => go(1)}
            className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white/20"
          >
            ›
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`슬라이드 ${i + 1}`}
                onClick={() => setIdx(i)}
                className={[
                  'h-1.5 rounded-full transition-all',
                  i === idx ? 'w-8 bg-white' : 'w-2 bg-white/50',
                ].join(' ')}
              />
            ))}
          </div>

          {/* 고정 배너 */}
          <div className="absolute bottom-6 right-6 z-10 hidden flex-col gap-2 md:flex">
            {fixedBanners.map((b) => (
              <a
                key={b.label}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-125',
                  b.tone === 'brand' ? 'bg-brand' : 'bg-stone-600',
                ].join(' ')}
              >
                {b.label} <span>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* 카드 그리드 (소스 .card-wrap — maincard01~04) */}
        <div className="hidden grid-cols-2 gap-4 lg:grid lg:flex-1">
          {['MAIN CARD 01', 'MAIN CARD 02', 'MAIN CARD 03', 'MAIN CARD 04'].map((c, i) => (
            <div
              key={c}
              className={[
                'overflow-hidden rounded-2xl',
                i % 2 === 0 ? 'mt-0' : 'mt-8',
              ].join(' ')}
            >
              <Placeholder label={c} ratio="3/4" dark />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------
// founding — 창립 카피 + 회사소개 바로가기 (소스 .founding)
// ------------------------------------------------------------
function Founding() {
  return (
    <section className="py-24 text-center md:py-32">
      <p className="mx-auto mb-12 max-w-3xl px-6 text-2xl font-bold leading-snug text-neutral-800 md:text-3xl">
        {founding.text}
      </p>
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        {founding.links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="btn-pill">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

// ------------------------------------------------------------
// Our Business — 가로 스크롤 카드 (소스 .business-swiper)
// ------------------------------------------------------------
function OurBusiness() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-container px-4 md:px-10 lg:px-40">
        <h2 className="mb-12 text-4xl font-bold leading-tight text-brand md:text-6xl">
          Our Business
          <br />
          Shaping the Future
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 pb-4 md:px-10 lg:px-40">
        {businessCards.map((b) => (
          <Link
            key={b.key}
            to={b.to}
            className="group relative h-[366px] w-64 shrink-0 overflow-hidden rounded-xl"
          >
            <Placeholder label={b.title} ratio="auto" className="h-full" dark />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <p className="mb-4 text-2xl font-bold">{b.title}</p>
              <p className="text-sm leading-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {b.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ------------------------------------------------------------
// Sustainability 배너 (소스 .sustainable)
// ------------------------------------------------------------
function SustainabilityBand() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden md:h-[600px]">
      <Placeholder label="SUSTAINABILITY BG" ratio="auto" className="h-full" dark />
      <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 md:px-10 lg:px-40">
        <p className="mb-4 text-sm font-semibold tracking-widest text-white/80">
          SUSTAINABLE FOUNDATIONS
        </p>
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          지속가능경영
        </h2>
        <p className="mb-8 max-w-2xl leading-8 text-white/85 md:text-lg">
          우리는 환경과 사회를 고려한 책임 있는 건설을 실천합니다. 장기적 관점의 친환경 기술과
          효율적 자원 관리로 미래 세대가 살아갈 기반을 만듭니다.
        </p>
        <div>
          <Link
            to="/sustainability/ethical"
            className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3.5 font-bold text-brand transition hover:bg-white"
          >
            전체보기 <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------
// More to Discover — 공지 목록 (소스 .discover)
// ------------------------------------------------------------
function MoreToDiscover() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto flex max-w-container flex-col px-4 md:px-10 lg:px-40">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b-2 border-neutral-400 pb-10 md:flex-row md:items-center">
          <p className="text-4xl font-bold text-brand md:text-6xl">More to Discover</p>
          <Link to="/support" className="btn-pill">
            전체보기
          </Link>
        </div>

        <ul className="flex flex-col divide-y divide-neutral-200">
          {notices.map((n) => (
            <li key={n.id}>
              <Link
                to="/support"
                className="flex flex-col justify-between gap-1 py-5 transition hover:text-brand md:flex-row md:items-center"
              >
                <span className="flex items-center gap-3 text-lg font-semibold md:text-xl">
                  {n.isNew && (
                    <span className="rounded bg-brand px-2 py-0.5 text-xs font-bold text-white">
                      NEW
                    </span>
                  )}
                  {n.title}
                </span>
                <span className="text-sm text-neutral-500 md:text-base">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ------------------------------------------------------------
// Investor Relation 배너 (소스 .relation)
// ------------------------------------------------------------
function InvestorRelation() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
      <Placeholder label="INVESTOR RELATION BG" ratio="auto" className="h-full" dark />
      <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 md:px-10 lg:px-40">
        <p className="mb-4 text-sm font-semibold tracking-widest text-white/80">
          {investorRelation.en}
        </p>
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          {investorRelation.title}
        </h2>
        <p className="mb-8 max-w-2xl leading-8 text-white/85 md:text-lg">
          {investorRelation.desc}
        </p>
        <div>
          <Link
            to={investorRelation.to}
            className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3.5 font-bold text-brand transition hover:bg-white"
          >
            전체보기 <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Founding />
      <OurBusiness />
      <SustainabilityBand />
      <MoreToDiscover />
      <InvestorRelation />
    </>
  )
}
