import { useMemo, useState } from 'react'
import { glossary } from '../data/course'
import { useStudy } from '../state/StudyContext'

export function GlossaryPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('tutte')
  const [open, setOpen] = useState<string | null>(null)
  const { progress, toggleFavorite } = useStudy()
  const categories = ['tutte', ...new Set(glossary.map((term) => term.category))]
  const filtered = useMemo(
    () =>
      glossary.filter(
        (term) =>
          (category === 'tutte' || term.category === category) &&
          `${term.label} ${term.shortDefinition}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  )
  return (
    <div className="page narrow-page">
      <header className="page-heading">
        <span className="eyebrow">Glossario dinamico</span>
        <h1>Le parole sono strumenti, non etichette</h1>
        <p>
          Tocca una scheda: definizione, distinzione ed errore tipico restano nello stesso gesto.
        </p>
      </header>
      <div className="search-bar">
        <span>⌕</span>
        <input
          aria-label="Cerca nel glossario"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca termine, autore, teoria…"
        />
      </div>
      <div className="filter-row">
        {categories.map((item) => (
          <button
            className={category === item ? 'active' : ''}
            onClick={() => setCategory(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="glossary-grid">
        {filtered.map((term) => (
          <article className={open === term.id ? 'open' : ''} key={term.id}>
            <button
              className="glossary-main"
              onClick={() => setOpen(open === term.id ? null : term.id)}
            >
              <span>
                <small>{term.category}</small>
                <strong>{term.label}</strong>
                {term.reading && <em>{term.reading}</em>}
              </span>
              <b>{open === term.id ? '−' : '+'}</b>
            </button>
            <p>{term.shortDefinition}</p>
            {open === term.id && (
              <div className="glossary-detail">
                <p>{term.fullExplanation}</p>
                <div>
                  <b>Errore comune</b>
                  <span>{term.commonMistake}</span>
                </div>
                <button onClick={() => toggleFavorite(term.id)}>
                  {progress.favorites.includes(term.id)
                    ? '♥ Nei preferiti'
                    : '♡ Aggiungi al ripasso'}
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
