type DecorationProps = { className?: string }

export function DecorativeCloud({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 120 56" aria-hidden="true"><path d="M24 46h72c13 0 20-7 20-17S108 12 97 12c-5 0-9 2-12 5C80 7 71 2 60 2 43 2 31 13 29 27c-2-1-5-2-8-2C11 25 4 31 4 36s7 10 20 10Z" fill="currentColor" /></svg>
}
export function DecorativeHeart({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 48 48" aria-hidden="true"><path d="M24 42S5 31 5 17C5 7 17 4 24 13 31 4 43 7 43 17c0 14-19 25-19 25Z" fill="currentColor" /></svg>
}
export function DecorativeSparkle({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 48 48" aria-hidden="true"><path d="M24 2c2 13 8 20 22 22-14 2-20 9-22 22C22 33 16 26 2 24 16 22 22 15 24 2Z" fill="currentColor" /></svg>
}
export function DecorativeFlower({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true"><g fill="currentColor"><ellipse cx="32" cy="14" rx="10" ry="13"/><ellipse cx="50" cy="30" rx="10" ry="13" transform="rotate(72 50 30)"/><ellipse cx="43" cy="51" rx="10" ry="13" transform="rotate(144 43 51)"/><ellipse cx="21" cy="51" rx="10" ry="13" transform="rotate(216 21 51)"/><ellipse cx="14" cy="30" rx="10" ry="13" transform="rotate(288 14 30)"/></g><circle cx="32" cy="33" r="8" fill="var(--surface)"/></svg>
}
export function DecorativeRibbon({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 96 40" aria-hidden="true"><path d="M5 6h86L79 20l12 14H5l12-14L5 6Z" fill="currentColor"/><path d="M17 6h62v28H17z" fill="currentColor" opacity=".75"/></svg>
}
export function BookIcon({ className = '' }: DecorationProps) {
  return <svg className={className} viewBox="0 0 48 48" aria-hidden="true"><path d="M6 8c9-2 15 0 18 4 3-4 9-6 18-4v31c-9-2-15 0-18 4-3-4-9-6-18-4V8Z" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M24 12v31" stroke="currentColor" strokeWidth="3"/></svg>
}
