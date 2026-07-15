export function ProgressBar({
  value,
  label,
  compact = false,
}: {
  value: number
  label: string
  compact?: boolean
}) {
  const safe = Math.max(0, Math.min(100, value))
  return (
    <div
      className={`progress-wrap ${compact ? 'compact' : ''}`}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safe}
    >
      <div className="progress-label">
        <span>{label}</span>
        <strong>{safe}%</strong>
      </div>
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${safe}%` }} />
      </div>
    </div>
  )
}
