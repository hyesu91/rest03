// ============================================================
// 이미지 플레이스홀더 — 실제 이미지 대신 라벨/비율을 표시
// 템플릿에서 이미지가 들어갈 자리를 명확히 구분하기 위한 컴포넌트
// 실제 운영 시 이 컴포넌트를 <img> 로 교체하면 됩니다.
// ============================================================
export default function Placeholder({
  label = 'IMAGE',
  ratio = '16/9',
  className = '',
  rounded = false,
  dark = false,
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={[
        'relative flex w-full items-center justify-center overflow-hidden',
        dark ? 'bg-neutral-800 text-neutral-400' : 'bg-neutral-200 text-neutral-500',
        rounded ? 'rounded-xl' : '',
        className,
      ].join(' ')}
    >
      {/* 사선 패턴 */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(0,0,0,0.05) 14px, rgba(0,0,0,0.05) 28px)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-1 px-2 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs font-semibold tracking-wide md:text-sm">{label}</span>
        <span className="text-[10px] opacity-70">{ratio}</span>
      </div>
    </div>
  )
}
