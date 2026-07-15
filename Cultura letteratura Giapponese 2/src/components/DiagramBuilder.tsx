import { useState } from 'react'

const correct = ['Pressione esterna','Crisi del bakufu','Restaurazione Meiji','Centralizzazione','Kokugo e scuola']

export function DiagramBuilder() {
  const [items,setItems] = useState(['Kokugo e scuola','Pressione esterna','Centralizzazione','Crisi del bakufu','Restaurazione Meiji'])
  const [dragged,setDragged] = useState<number|null>(null)
  const [checked,setChecked] = useState(false)
  const move = (index:number,direction:-1|1) => { const next=index+direction; if(next<0||next>=items.length)return; setItems((current)=>{const copy=[...current]; [copy[index],copy[next]]=[copy[next]!,copy[index]!]; return copy}); setChecked(false) }
  const drop = (target:number) => { if(dragged===null||dragged===target)return; setItems((current)=>{const copy=[...current];const [item]=copy.splice(dragged,1);copy.splice(target,0,item!);return copy});setDragged(null);setChecked(false) }
  const solved = items.every((item,index)=>item===correct[index])
  return <section className="builder"><div><span className="eyebrow">Schema da costruire</span><h2>Dalla pressione alla lingua nazionale</h2><p>Trascina o usa le frecce. L’ordine deve trasformare eventi in una catena causale, non solo cronologica.</p></div><div className="builder-items">{items.map((item,index)=><div draggable onDragStart={()=>setDragged(index)} onDragOver={(event)=>event.preventDefault()} onDrop={()=>drop(index)} key={item} className={checked ? item===correct[index] ? 'correct':'wrong':''}><span>{index+1}</span><strong>{item}</strong><button aria-label={`Sposta ${item} indietro`} onClick={()=>move(index,-1)}>←</button><button aria-label={`Sposta ${item} avanti`} onClick={()=>move(index,1)}>→</button></div>)}</div><div className={`builder-feedback ${checked ? 'show':''}`}>{checked && <p>{solved ? 'Perfetto: la lingua entra alla fine come tecnologia della centralizzazione.' : 'Non ancora: parti dalla vulnerabilità geopolitica e chiedi quale crisi produce.'}</p>}<button className="primary-button" onClick={()=>setChecked(true)}>Verifica la catena</button></div></section>
}
