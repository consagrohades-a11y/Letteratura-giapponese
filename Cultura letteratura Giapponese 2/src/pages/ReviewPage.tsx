import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { glossary, quizzes } from '../data/course'
import { useStudy } from '../state/StudyContext'

type ReviewMode='adaptive'|'emergency'|'errors'|'zero'|'coverage'
const modeLabels:{id:ReviewMode;label:string;detail:string}[]=[
  {id:'adaptive',label:'Adattivo',detail:'Parte dai segnali deboli'}, {id:'emergency',label:'Emergenza',detail:'Solo nodi 5 stelle'},
  {id:'errors',label:'Solo errori',detail:'Niente già stabile'}, {id:'zero',label:'Non so nulla',detail:'Una mappa, un passo'},
  {id:'coverage',label:'Copertura',detail:'9 abilità per concetto'},
]
const quizTerms:Record<string,string>={'q-literarieta':'letteratura','q-mimesis':'mimesis','q-sublime':'sublime','q-canone':'canone','q-eco':'ermeneutica','q-perry':'bakufu','q-meiji':'meiji','q-kokugo':'kokugo','q-genbun':'genbun-itchi','q-orientalismo':'orientalismo','q-shoyo':'ninjo','q-ukigumo':'ukigumo','q-bunzo':'futabatei'}
const alternatives:Record<string,string>={
  'q-literarieta':'Pensa a una cornice museale: non crea il quadro, ma cambia come viene guardato. Il testo offre forme; istituzioni e lettori costruiscono la cornice storica.',
  'q-mimesis':'Una mappa non è il territorio, ma seleziona relazioni che permettono di orientarsi. La mimesis fa lo stesso con l’azione umana.',
  'q-canone':'Il canone è una playlist tramandata: la qualità conta, ma contano anche chi può proporre brani, quali canali li ripetono e chi resta fuori.',
  'q-genbun':'Il genbun itchi non registra una voce già pronta: è come il “parlato naturale” di un film, scritto e provato per sembrare immediato.',
  'q-orientalismo':'Non è solo una foto distorta dell’Oriente: è l’intero archivio che decide in anticipo quali foto sembrano plausibili e chi ha autorità per commentarle.',
  'q-shoyo':'Shōyō cambia la domanda da “quale morale deve vincere?” a “perché questa persona desidera, esita e si contraddice?”.',
  'q-ukigumo':'Bunzō è una bussola che conserva il nord morale ma non riesce a trasformarlo in percorso: la sua integrità senza azione diventa paralisi.',
}
const skills=['definire','contesto','causa','distinguere','applicare','esempio','collegare','orale','errori']

export function ReviewPage(){
  const[mode,setMode]=useState<ReviewMode>('adaptive'); const[open,setOpen]=useState<string|null>(null)
  const {progress,toggleFavorite}=useStudy()
  const attempts=progress.quizAttempts
  const weak=useMemo(()=>quizzes.filter((quiz)=>{const item=attempts[quiz.id];return item&&!item.correct||item?.confidence===1}),[attempts])
  const priority=glossary.filter((term)=>['letteratura','mimesis','canone','meiji','kokugo','genbun-itchi','orientalismo','ninjo','ukigumo','futabatei'].includes(term.id))
  const classification=(quizId:string)=>attempts[quizId]?.errorType?.replace('-',' ')??'da diagnosticare'
  const adaptive=weak.length?weak:quizzes.slice(0,4)
  return <div className="page narrow-page review-page"><header className="page-heading"><span className="eyebrow">Review engine</span><h1>Non ripetere di più.<br/>Ripeti meglio.</h1><p>Correttezza, sicurezza e recidiva producono percorsi diversi. “Non ricordo” aggiunge al ripasso senza penalità.</p></header><nav className="review-modes" aria-label="Modalità ripasso">{modeLabels.map((item)=><button className={mode===item.id?'active':''} onClick={()=>setMode(item.id)} key={item.id}><strong>{item.label}</strong><small>{item.detail}</small></button>)}</nav>
  {mode==='adaptive'&&<section className="adaptive-stack"><div className="review-summary"><span>Segnali raccolti</span><strong>{Object.keys(attempts).length}</strong><small>{weak.length} nodi da stabilizzare</small></div>{adaptive.map((quiz)=>{const attempt=attempts[quiz.id];const term=glossary.find((item)=>item.id===quizTerms[quiz.id]);const repeated=(attempt?.attempts??0)>=3;return <article key={quiz.id}><header><span>{classification(quiz.id)}</span><small>{attempt?.attempts??0} tentativi · sicurezza {attempt?.confidence??'—'}/3</small></header><h2>{term?.label??quiz.prompt}</h2><p>{repeated?(alternatives[quiz.id]??quiz.explanation):quiz.explanation}</p>{repeated&&<div className="perspective-shift">↻ Cambio prospettiva attivo: esempio/analogia al posto della definizione.</div>}<div><button onClick={()=>term&&toggleFavorite(term.id)}>{term&&progress.favorites.includes(term.id)?'♥ Nel ripasso':'Non ricordo'}</button><button onClick={()=>setOpen(open===quiz.id?null:quiz.id)}>Mostra distinzione</button></div>{open===quiz.id&&<aside>{quiz.distinction}</aside>}</article>})}</section>}
  {mode==='emergency'&&<section className="emergency-review"><header><span>90 minuti essenziali</span><h2>I dieci nodi che tengono insieme i blocchi</h2></header><div>{priority.map((term,index)=><button onClick={()=>setOpen(open===term.id?null:term.id)} key={term.id}><span>{index+1}</span><strong>{term.label}</strong><small>{open===term.id?term.fullExplanation:term.shortDefinition}</small></button>)}</div><Link className="primary-button" to="/palestra">Chiudi con Lightning →</Link></section>}
  {mode==='errors'&&<section className="errors-only">{weak.length?weak.map((quiz)=><article key={quiz.id}><span>{classification(quiz.id)}</span><h2>{quiz.prompt}</h2><p>{alternatives[quiz.id]??quiz.explanation}</p></article>):<div className="empty-review"><strong>Nessun errore registrato.</strong><p>Fai un Lightning Round: torneranno qui soltanto i nodi davvero instabili.</p><Link to="/palestra">Vai alla palestra →</Link></div>}</section>}
  {mode==='zero'&&<section className="zero-mode"><span className="eyebrow">Un solo prossimo passo</span><h2>Capisci questa catena prima di tutto</h2><div className="zero-chain"><span>Modernizzazione</span><b>→</b><span>Lingua nazionale</span><b>→</b><span>Nuova interiorità</span><b>→</b><span>Romanzo moderno</span></div><p>Lo Stato Meiji costruisce istituzioni e uno standard linguistico; gli scrittori trasformano quel nuovo medium in una voce capace di mostrare il soggetto moderno.</p><Link className="primary-button" to="/lezione/meiji-stato">Primo passo · 4 minuti →</Link></section>}
  {mode==='coverage'&&<CoverageMatrix attempts={attempts}/>}</div>
}

function CoverageMatrix({attempts}:{attempts:ReturnType<typeof useStudy>['progress']['quizAttempts']}){const terms=glossary.filter((term)=>Object.values(quizTerms).includes(term.id));return <section className="coverage-matrix"><div className="coverage-row head"><b>Concetto</b>{skills.map((skill)=><span key={skill}>{skill}</span>)}</div>{terms.map((term)=>{const quizId=Object.entries(quizTerms).find(([,id])=>id===term.id)?.[0];const attempt=quizId?attempts[quizId]:undefined;const level=attempt?.correct?(attempt.confidence===3?3:2):attempt?1:0;return <div className="coverage-row" key={term.id}><b>{term.label}</b>{skills.map((skill,index)=><span className={`level-${Math.max(0,level-(index>5?1:0))}`} title={`${term.label}: ${skill}`} key={skill}>{level>index/4?'●':'○'}</span>)}</div>})}<footer><span>○ non verificato</span><span>● visto / capito / stabile</span></footer></section>}
