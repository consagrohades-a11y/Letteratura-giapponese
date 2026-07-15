import { useState } from 'react'
import { libraryEntries } from '../data/library'
import type { LibraryEntry } from '../types/library'

export function ComparisonTable({ ids, onSelect }: { ids: string[]; onSelect: (entry: LibraryEntry) => void }) {
  const entries = ids.map((id) => libraryEntries.find((entry) => entry.id === id)).filter((entry): entry is LibraryEntry => Boolean(entry))
  const [row, setRow] = useState<'themes'|'techniques'|'contribution'>('themes')
  return <section className="comparison"><div className="comparison-head"><div><span className="eyebrow">Confronto interattivo</span><h2>La differenza che conta</h2></div><div className="segmented">{([['themes','Temi'],['techniques','Tecniche'],['contribution','Contributo']] as const).map(([value,label]) => <button key={value} className={row === value ? 'active' : ''} onClick={() => setRow(value)}>{label}</button>)}</div></div><div className="comparison-grid">{entries.map((entry) => <button onClick={() => onSelect(entry)} key={entry.id}><span>{entry.dates ?? entry.period}</span><h3>{entry.name}</h3>{row === 'contribution' ? <p>{entry.contribution}</p> : <div>{entry[row].map((item) => <em key={item}>{item}</em>)}</div>}<small>Apri scheda →</small></button>)}</div></section>
}
