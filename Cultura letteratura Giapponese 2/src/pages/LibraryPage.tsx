import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { libraryEntries } from '../data/library'
import type { LibraryEntry, LibraryKind } from '../types/library'
import { ComparisonTable } from '../components/ComparisonTable'

const tabs: { value: 'all' | LibraryKind; label: string }[] = [
  { value: 'all', label: 'Tutto' },
  { value: 'author', label: 'Autori' },
  { value: 'work', label: 'Opere' },
  { value: 'movement', label: 'Movimenti' },
  { value: 'theory', label: 'Teorie' },
]
const labels: Record<LibraryKind, string> = {
  author: 'autore',
  work: 'opera',
  movement: 'movimento',
  theory: 'teoria',
}

export function LibraryPage() {
  const [tab, setTab] = useState<'all' | LibraryKind>('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<LibraryEntry | null>(null)
  const [view, setView] = useState<'cards' | 'table'>('cards')
  const filtered = useMemo(
    () =>
      libraryEntries.filter(
        (entry) =>
          (tab === 'all' || entry.kind === tab) &&
          `${entry.name} ${entry.oneLine} ${entry.themes.join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [tab, query],
  )
  return (
    <div className="page narrow-page atlas-page">
      <header className="page-heading">
        <span className="eyebrow">Atlante collegato</span>
        <h1>Persone, opere e idee nello stesso sistema</h1>
        <p>
          Non memorizzare liste separate: apri una cella e segui il collegamento verso contesto,
          tecnica, errore comune e lezione.
        </p>
        <div className="atlas-jumps">
          <Link to="/timeline">Timeline sincronizzata →</Link>
          <Link to="/mappa">Knowledge Map →</Link>
        </div>
      </header>
      <div className="atlas-controls">
        <div className="search-bar">
          <span>⌕</span>
            <input
              aria-label="Cerca nell’Atlante"
              value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cerca autore, opera, tema…"
          />
        </div>
        <div className="view-switch">
          <button className={view === 'cards' ? 'active' : ''} onClick={() => setView('cards')}>
            Schede
          </button>
          <button className={view === 'table' ? 'active' : ''} onClick={() => setView('table')}>
            Tabella
          </button>
        </div>
      </div>
      <div className="filter-row atlas-tabs">
        {tabs.map((item) => (
          <button
            className={tab === item.value ? 'active' : ''}
            key={item.value}
            onClick={() => setTab(item.value)}
          >
            {item.label}{' '}
            <span>
              {item.value === 'all'
                ? libraryEntries.length
                : libraryEntries.filter((entry) => entry.kind === item.value).length}
            </span>
          </button>
        ))}
      </div>
      {view === 'cards' ? (
        <div className="atlas-grid">
          {filtered.map((entry) => (
            <button
              onClick={() => setSelected(entry)}
              key={entry.id}
              className={`atlas-card ${entry.kind}`}
            >
              <span>
                {labels[entry.kind]} · {entry.period}
              </span>
              <h2>{entry.name}</h2>
              {entry.japanese && <em>{entry.japanese}</em>}
              <p>{entry.oneLine}</p>
              <div>
                {entry.themes.slice(0, 3).map((theme) => (
                  <small key={theme}>{theme}</small>
                ))}
              </div>
              <b>Esplora →</b>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div
            className="atlas-table-wrap"
            tabIndex={0}
            aria-label="Tabella dell'atlante, scorribile orizzontalmente"
          >
            <table className="atlas-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Periodo</th>
                  <th>Contributo</th>
                  <th>Temi</th>
                  <th>Lezione</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry) => (
                  <tr key={entry.id}>
                    <td>
                      <button onClick={() => setSelected(entry)}>{entry.name}</button>
                    </td>
                    <td>{entry.period}</td>
                    <td>
                      <button
                        className="clamped-cell"
                        title={entry.oneLine}
                        aria-label={`${entry.oneLine}. Apri la scheda completa`}
                        onClick={() => setSelected(entry)}
                      >
                        {entry.oneLine}
                      </button>
                    </td>
                    <td>
                      <div className="theme-badges">
                        {entry.themes.map((theme) => (
                          <button onClick={() => setQuery(theme)} key={theme}>
                            {theme}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td>
                      <Link to={`/lezione/${entry.lessonId}`}>Apri →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mobile-atlas-grid">
            {filtered.map((entry) => (
              <button onClick={() => setSelected(entry)} key={entry.id}>
                <span>
                  {labels[entry.kind]} · {entry.period}
                </span>
                <strong>{entry.name}</strong>
                <p>{entry.oneLine}</p>
                <div>
                  {entry.themes.slice(0, 3).map((theme) => (
                    <small key={theme}>{theme}</small>
                  ))}
                </div>
                <b>Apri scheda →</b>
              </button>
            ))}
          </div>
        </>
      )}
      <ComparisonTable ids={['tsubouchi', 'futabatei']} onSelect={setSelected} />
      {selected && (
        <div
          className="deep-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Scheda ${selected.name}`}
          onClick={() => setSelected(null)}
        >
          <article className="entry-panel" onClick={(event) => event.stopPropagation()}>
            <button
              className="panel-close"
              onClick={() => setSelected(null)}
              aria-label="Chiudi scheda"
            >
              ×
            </button>
            <span className="eyebrow">
              {labels[selected.kind]} · {selected.period}
            </span>
            <h1>{selected.name}</h1>
            {selected.japanese && <em className="entry-japanese">{selected.japanese}</em>}
            <p className="entry-lead">{selected.oneLine}</p>
            <section>
              <h3>Contesto</h3>
              <p>{selected.context}</p>
            </section>
            <section>
              <h3>Contributo</h3>
              <p>{selected.contribution}</p>
            </section>
            <div className="entry-columns">
              <section>
                <h3>Temi</h3>
                {selected.themes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </section>
              <section>
                <h3>Tecniche</h3>
                {selected.techniques.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </section>
            </div>
            <div className="mistake">
              <strong>Errore da evitare</strong>
              <p>{selected.commonMistake}</p>
            </div>
            <blockquote>{selected.oralHook}</blockquote>
            <div className="entry-links">
              <Link className="primary-button" to={`/lezione/${selected.lessonId}`}>
                Studia nella lezione →
              </Link>
              {selected.connections.map((id) => {
                const target = libraryEntries.find((entry) => entry.id === id)
                return target ? (
                  <button key={id} onClick={() => setSelected(target)}>
                    {target.name}
                  </button>
                ) : null
              })}
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
