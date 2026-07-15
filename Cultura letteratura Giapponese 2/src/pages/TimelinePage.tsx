import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { libraryEntries, timelineEvents } from '../data/library'
import type { TimelineEvent } from '../types/library'

const lanes: TimelineEvent['lane'][]=['storia','lingua','letteratura','teoria']
export function TimelinePage(){
  const [active,setActive]=useState<TimelineEvent['lane'][]>(lanes)
  const [selected,setSelected]=useState<TimelineEvent|null>(null)
  const events=useMemo(()=>timelineEvents.filter((event)=>active.includes(event.lane)).sort((a,b)=>a.year-b.year),[active])
  const toggle=(lane:TimelineEvent['lane'])=>setActive((current)=>current.includes(lane)?current.filter((item)=>item!==lane):[...current,lane])
  return <div className="page narrow-page timeline-page"><header className="page-heading"><span className="eyebrow">Timeline sincronizzata</span><h1>La storia non è lo sfondo:<br/>entra nella forma</h1><p>Filtra le corsie e osserva quando Stato, lingua e romanzo diventano problemi reciproci.</p></header><div className="timeline-filters">{lanes.map((lane)=><button className={active.includes(lane)?`active ${lane}`:''} onClick={()=>toggle(lane)} key={lane}><span/> {lane}</button>)}</div><div className="timeline-axis">{events.map((event,index)=><button key={`${event.year}-${event.title}`} className={`timeline-event ${event.lane} ${selected===event?'selected':''}`} onClick={()=>setSelected(event)}><span className="event-year">{event.year}{event.endYear?`–${event.endYear}`:''}</span><i/><div><small>{event.lane}</small><strong>{event.title}</strong><p>{event.detail}</p></div>{index<events.length-1&&<em/>}</button>)}</div>{selected&&<aside className={`timeline-insight ${selected.lane}`}><span>{selected.year}</span><div><strong>Perché conta</strong><h2>{selected.title}</h2><p>{selected.detail}</p>{selected.entryId&&<>{libraryEntries.find((entry)=>entry.id===selected.entryId)&&<small>Collegato a {libraryEntries.find((entry)=>entry.id===selected.entryId)?.name}</small>}<Link to="/atlante">Apri nell’atlante →</Link></>}</div></aside>}</div>
}
