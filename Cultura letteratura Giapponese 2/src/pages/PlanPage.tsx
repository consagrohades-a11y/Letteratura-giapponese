import { Link } from 'react-router-dom'
import { lessons } from '../data/course'

export function PlanPage() {
  const dayOne = lessons.slice(0,4), dayTwo = lessons.slice(4)
  return <div className="page narrow-page"><header className="page-heading"><span className="eyebrow">Piano intensivo</span><h1>48 ore, senza perdere profondità</h1><p>Il ritmo comprime i tempi morti, non il programma: sessioni brevi, checkpoint e recupero attivo.</p></header><div className="plan-days">{[[1,dayOne,'Fondamenta e trasformazione'],[2,dayTwo,'Lingua, sguardo e romanzo']] .map(([day,items,title]) => <section key={String(day)}><div className="day-head"><span>Giorno {String(day).padStart(2,'0')}</span><div><h2>{String(title)}</h2><p>{(items as typeof lessons).reduce((sum,item) => sum+item.estimatedMinutes,0)} minuti · {(items as typeof lessons).length} sessioni</p></div></div><div className="day-line">{(items as typeof lessons).map((lesson,i) => <Link to={`/lezione/${lesson.id}`} key={lesson.id}><span>{i+1}</span><div><strong>{lesson.title}</strong><small>{lesson.objectives[0]}</small></div><b>{lesson.estimatedMinutes}′</b></Link>)}</div></section>)}</div><aside className="emergency-box"><span>⚡</span><div><strong>Ripasso d’emergenza</strong><p>Passa direttamente a quiz, distinzioni e domande orali dei blocchi studiati.</p></div><Link to="/orale">Avvia →</Link></aside></div>
}
