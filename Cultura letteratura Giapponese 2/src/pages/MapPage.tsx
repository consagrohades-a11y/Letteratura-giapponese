import { useState } from 'react'
import { Link } from 'react-router-dom'
import { knowledgeEdges, knowledgeNodes } from '../data/library'
import type { KnowledgeNode } from '../types/library'
import { DiagramBuilder } from '../components/DiagramBuilder'

const colors:Record<KnowledgeNode['category'],string>={contesto:'#E34234',lingua:'#7C3AED',teoria:'#DB2777',autore:'#6D28D9',opera:'#EC4899'}
export function MapPage(){
  const [selected,setSelected]=useState<KnowledgeNode|null>(knowledgeNodes[0] ?? null)
  const [category,setCategory]=useState<'all'|KnowledgeNode['category']>('all')
  const visible=knowledgeNodes.filter((node)=>category==='all'||node.category===category)
  const visibleIds=new Set(visible.map((node)=>node.id))
  return <div className="page narrow-page map-page"><header className="page-heading"><span className="eyebrow">Knowledge Map</span><h1>Vedi i ponti, non soltanto i nodi</h1><p>Ogni linea ha un verbo: il collegamento deve poter essere spiegato, non soltanto ricordato.</p></header><div className="map-filters">{(['all','contesto','lingua','teoria','autore','opera'] as const).map((item)=><button className={category===item?'active':''} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div><div className="knowledge-map"><svg viewBox="0 0 100 85" preserveAspectRatio="none" aria-hidden="true">{knowledgeEdges.filter((edge)=>visibleIds.has(edge.from)&&visibleIds.has(edge.to)).map((edge)=>{const from=knowledgeNodes.find((node)=>node.id===edge.from)!;const to=knowledgeNodes.find((node)=>node.id===edge.to)!;return <g key={`${edge.from}-${edge.to}`}><line x1={from.x} y1={from.y} x2={to.x} y2={to.y}/><text x={(from.x+to.x)/2} y={(from.y+to.y)/2-1}>{edge.label}</text></g>})}</svg>{visible.map((node)=><button key={node.id} className={`${node.category} ${selected?.id===node.id?'selected':''}`} style={{left:`${node.x}%`,top:`${node.y}%`,'--node-color':colors[node.category]} as React.CSSProperties} onClick={()=>setSelected(node)}><span>{node.category}</span><strong>{node.label}</strong></button>)}</div>{selected&&<aside className="map-insight"><span style={{background:colors[selected.category]}}>{selected.category}</span><div><h2>{selected.label}</h2><p>{selected.detail}</p>{selected.lessonId&&<Link to={`/lezione/${selected.lessonId}`}>Studia il collegamento →</Link>}</div></aside>}<div className="tree-schema"><span className="eyebrow">Schema ad albero</span><h2>Come nasce il romanzo moderno</h2><div><strong>Modernizzazione Meiji</strong><span><b>Stato e scuola</b><em>kokugo · canone nazionale</em></span><span><b>Traduzione</b><em>lessico · modelli · sintassi</em></span><span><b>Soggetto moderno</b><em>ninjō · interiorità · burocrazia</em></span></div></div><DiagramBuilder/></div>
}
