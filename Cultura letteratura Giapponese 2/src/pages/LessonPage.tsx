import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { lessonById, lessons } from '../data/course'
import { useStudy } from '../state/StudyContext'
import { ProgressBar } from '../components/ProgressBar'
import { StudyTerm } from '../components/StudyTerm'
import { QuizEngine } from '../components/QuizEngine'
import { OralSimulator } from '../components/OralSimulator'
import { DecorativeCloud, DecorativeSparkle } from '../components/Decorations'
import { learningSupports } from '../data/learningSupports'

const depthLabels = { essential: 'Essenziale', good: 'Buona risposta', excellence: 'Eccellenza' } as const

export function LessonPage() {
  const { lessonId } = useParams()
  const lesson = lessonById(lessonId ?? '')
  const navigate = useNavigate()
  const { settings, setDepth, setFocusMode, progress, markSection } = useStudy()
  const [sectionIndex, setSectionIndex] = useState(0)
  const [alternative, setAlternative] = useState<'none'|'simple'|'example'|'analogy'|'map'>('none')
  const [showQuiz, setShowQuiz] = useState(false)
  const [flowMode, setFlowMode] = useState(false)
  const [flowSeconds, setFlowSeconds] = useState(120)
  const [recoveryOpen, setRecoveryOpen] = useState(false)
  const section = lesson?.sections[sectionIndex]
  const nextLesson = useMemo(() => { const index = lessons.findIndex((item) => item.id === lesson?.id); return lessons[index+1] },[lesson?.id])
  useEffect(() => {
    if (!flowMode || showQuiz || !lesson || !section) return
    const timer = window.setInterval(() => setFlowSeconds((seconds) => {
      if (seconds > 1) return seconds - 1
      markSection(section.id, lesson.id)
      if (sectionIndex < lesson.sections.length - 1) setSectionIndex((value) => value + 1)
      else setShowQuiz(true)
      return 120
    }), 1000)
    return () => window.clearInterval(timer)
  }, [flowMode, lesson, markSection, section, sectionIndex, showQuiz])
  if (!lesson || !section) return <div className="page empty-state"><h1>Lezione non trovata</h1><Link to="/percorso">Torna al percorso</Link></div>
  const support = learningSupports[section.id]!
  const done = progress.completedSections.includes(section.id)
  const lessonPercent = Math.round((progress.completedSections.filter((id) => lesson.sections.some((s) => s.id === id)).length / lesson.sections.length) * 100)
  const paragraphs = [...section.essential, ...(settings.depth !== 'essential' ? section.good : []), ...(settings.depth === 'excellence' ? section.excellence : [])]
  const advance = () => { markSection(section.id, lesson.id); if (sectionIndex < lesson.sections.length - 1) { setSectionIndex((value) => value + 1); setAlternative('none'); setRecoveryOpen(false); setShowQuiz(false); window.scrollTo({ top: 0, behavior: 'smooth' }) } else setShowQuiz(true) }
  const jump = (index: number) => { if (index > sectionIndex) markSection(section.id, lesson.id); setSectionIndex(index); setAlternative('none'); setRecoveryOpen(false); setShowQuiz(false); setFlowSeconds(120) }
  return <div className="lesson-page"><aside className="lesson-map"><Link className="back-link" to="/percorso">← Percorso</Link><span className="eyebrow">Lezione · {lesson.estimatedMinutes} min</span><h2>{lesson.title}</h2><ProgressBar compact label="Lezione" value={lessonPercent}/><nav aria-label="Mappa della lezione">{lesson.sections.map((item,i) => <button className={`${i === sectionIndex ? 'active' : ''} ${progress.completedSections.includes(item.id) ? 'done' : ''}`} onClick={() => jump(i)} key={item.id}><span>{progress.completedSections.includes(item.id) ? '✓' : i+1}</span><small>{item.title}</small></button>)}<button className={showQuiz ? 'active' : ''} onClick={() => setShowQuiz(true)}><span>◆</span><small>Boss check</small></button></nav></aside>
  <div className="lesson-stage"><div className="lesson-toolbar"><div className="depth-switch" aria-label="Livello di profondità">{(Object.keys(depthLabels) as (keyof typeof depthLabels)[]).map((depth) => <button className={settings.depth === depth ? 'active' : ''} onClick={() => setDepth(depth)} key={depth}>{depthLabels[depth]}</button>)}</div><div className="toolbar-actions"><button className={`flow-toggle ${flowMode ? 'active' : ''}`} onClick={() => setFlowMode((value) => !value)}>{flowMode ? `Flow · ${Math.floor(flowSeconds/60)}:${String(flowSeconds%60).padStart(2,'0')}` : 'Flow mode'}</button><button className="focus-toggle" onClick={() => setFocusMode(!settings.focusMode)}>{settings.focusMode ? 'Esci da focus' : 'Focus mode'}</button></div></div>
  {!showQuiz ? <article className="lesson-content"><header className="content-head"><div><span className="eyebrow">{section.eyebrow}</span><h1>{section.title}</h1></div><span className={`kind-badge ${section.kind}`}>{section.kind.replace('-',' → ')}</span></header><div className="momentum"><span>{sectionIndex+1} micro-obiettivi attivi</span><b>{lesson.sections.length-sectionIndex-1} concetti al Boss Check</b><div><i style={{ width: `${((sectionIndex+1)/lesson.sections.length)*100}%` }}/></div></div>
  <div className="reading-block">{paragraphs.map((paragraph,i) => <p key={`${section.id}-${i}`}>{paragraph}</p>)}</div>
  {!!section.termIds.length && <div className="term-row"><span>Parole da saper maneggiare</span>{section.termIds.map((id) => <StudyTerm key={id} id={id}/>)}</div>}
  {!!section.visual?.length && alternative !== 'map' && <div className={`lesson-visual ${section.kind}`}><div className="visual-line"/>{section.visual.map((item,i) => <div key={item.label} className="visual-node"><span>{String(i+1).padStart(2,'0')}</span><strong>{item.label}</strong><small>{item.detail}</small></div>)}</div>}
  <div className="attention-switch"><div><DecorativeSparkle/><span><strong>Cambiamo stimolo?</strong><small>Il contenuto resta: cambia il modo in cui lo guardi.</small></span></div><button type="button" aria-expanded={alternative==='map'} aria-controls="attention-alternative" onClick={() => setAlternative(alternative==='map'?'none':'map')}>Mi sto annoiando</button><button type="button" aria-expanded={alternative==='simple'} aria-controls="attention-alternative" onClick={() => setAlternative(alternative==='simple'?'none':'simple')}>Non ho capito</button></div>
  {alternative !== 'none'&&<div id="attention-alternative" aria-live="polite" className="support-zone"><div className="support-tabs" role="group" aria-label="Scegli il tipo di aiuto"><button className={alternative==='simple'?'active':''} onClick={()=>setAlternative('simple')}>Più semplice</button><button className={alternative==='example'?'active':''} onClick={()=>setAlternative('example')}>Esempio</button><button className={alternative==='analogy'?'active':''} onClick={()=>setAlternative('analogy')}>Analogia</button><button className={alternative==='map'?'active':''} onClick={()=>setAlternative('map')}>Schema</button></div>{alternative === 'simple' && <div className="alternative cloud-note inline-alternative"><DecorativeCloud/><div><strong>In parole super chiare</strong><p>{support.simple}</p><small>Formula orale: {support.oralFormula}</small></div></div>}{alternative === 'example'&&<div className="alternative support-card example-support inline-alternative"><span>◎</span><div><strong>Vediamolo in azione</strong><p>{support.example}</p></div></div>}{alternative === 'analogy'&&<div className="alternative support-card analogy-support inline-alternative"><span>◇</span><div><strong>Un’immagine per capirlo</strong><p>{support.analogy}</p></div></div>}{alternative === 'map' && <div className="alternative map-note inline-alternative"><strong>Le relazioni, non il riassunto</strong><div>{section.visual?.map((item,i) => <span key={item.label}><b>{item.label}</b><small>{item.detail}</small>{i < (section.visual?.length ?? 0)-1 && <em>→</em>}</span>)}</div><small className="format-feedback">Lo schema mostra il passaggio logico; non ripete il paragrafo.</small></div>}</div>}
  <div className={`micro-check ${recoveryOpen?'needs-help':''}`}><span>Prima di passare oltre</span><p>Riesci a dire in una frase qual è il problema centrale di questa schermata?</p><div><button type="button" onClick={() => { markSection(section.id,lesson.id); setRecoveryOpen(false) }} className={done ? 'selected' : ''}>{done ? '✓ Capito' : 'Sì, l’ho afferrato'}</button><button type="button" aria-expanded={recoveryOpen} onClick={() => setRecoveryOpen((value)=>!value)}>Non ancora</button></div>{recoveryOpen&&<aside className="recovery-panel" aria-live="polite"><header><DecorativeCloud/><div><small>Ripartiamo senza parole difficili</small><strong>Il punto centrale è questo:</strong></div></header><p>{support.simple}</p>{!!section.visual?.length&&<section><b>Schema lampo: guarda il rapporto</b><div className="recovery-chain">{section.visual.map((item,i)=><span key={item.label}><strong>{item.label}</strong><small>{item.detail}</small>{i<section.visual!.length-1&&<em>→</em>}</span>)}</div></section>}<section className="recovery-example"><b>Esempio concreto</b><p>{support.example}</p></section><section className="recovery-resources"><b>Prova un’altra via</b><div><button type="button" onClick={()=>setAlternative('analogy')}>Apri l’analogia ↑</button><button type="button" onClick={()=>setAlternative('map')}>Apri lo schema grande ↑</button>{section.termIds.map((id)=><StudyTerm key={id} id={id}/>)}</div></section><footer>Formula pronta per l’orale: <strong>{support.oralFormula}</strong></footer></aside>}</div>
  <div className="lesson-footer"><div><small>Prossimo</small><strong>{sectionIndex < lesson.sections.length-1 ? lesson.sections[sectionIndex+1]?.title : 'Boss check e orale'}</strong></div><button className="primary-button" onClick={advance}>{sectionIndex < lesson.sections.length-1 ? 'Continua →' : 'Vai al Boss Check →'}</button></div></article> : <div className="boss-stage"><header><span className="eyebrow">Checkpoint finale</span><h1>Fai emergere la struttura</h1><p>Niente scrittura: scegli, ricevi feedback, correggi subito.</p></header><QuizEngine ids={lesson.quizIds} boss onComplete={() => { lesson.sections.forEach((item) => markSection(item.id,lesson.id)); if (nextLesson) navigate(`/lezione/${nextLesson.id}`) }}/><OralSimulator ids={lesson.oralQuestionIds} compact/></div>}</div></div>
}
