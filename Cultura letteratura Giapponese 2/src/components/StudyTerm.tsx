import { useId, useState, type ReactNode } from 'react'
import { termById } from '../data/course'
import { useStudy } from '../state/StudyContext'

export function StudyTerm({ id, children }: { id: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false)
  const instanceId = useId().replaceAll(':', '')
  const term = termById(id)
  const { progress, toggleFavorite } = useStudy()
  if (!term) return <>{children ?? id}</>
  const tooltipId = `term-${id}-${instanceId}-tooltip`
  const favorite = progress.favorites.includes(term.id)
  return (
    <span className="term-wrap">
      <button
        className="study-term"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={tooltipId}
      >
        {children ?? term.label}
      </button>
      <span id={tooltipId} className={`term-popover ${open ? 'open' : ''}`} role="tooltip" aria-hidden={!open}>
        <span className="term-head">
          <span>
            <small>{term.category}</small>
            <strong>{term.label}</strong>
            {term.reading && <em>{term.reading}</em>}
          </span>
          <button
            onClick={() => toggleFavorite(term.id)}
            aria-label={`${favorite ? 'Rimuovi' : 'Aggiungi'} ${term.label} ${favorite ? 'dai' : 'ai'} preferiti`}
          >
            {favorite ? '♥' : '♡'}
          </button>
        </span>
        <span>{term.shortDefinition}</span>
        <details>
          <summary>Approfondisci</summary>
          <p>{term.fullExplanation}</p>
          <p>
            <b>Errore comune:</b> {term.commonMistake}
          </p>
        </details>
      </span>
    </span>
  )
}
