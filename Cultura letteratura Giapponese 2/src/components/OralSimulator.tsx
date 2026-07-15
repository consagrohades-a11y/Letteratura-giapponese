import { useEffect, useMemo, useState } from 'react'
import { oralQuestions } from '../data/course'
import { oralKeywordHints, oralStepGuides } from '../data/oralSupports'
import { useStudy } from '../state/StudyContext'
import { VoiceRecorder } from './VoiceRecorder'

export function OralSimulator({ ids, compact = false }: { ids: string[]; compact?: boolean }) {
  const items = useMemo(() => ids.map((id) => oralQuestions.find((q) => q.id === id)).filter(Boolean), [ids])
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState<'guided'|'real'|'strict'>('guided')
  const [revealed, setRevealed] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null)
  const { markOralReady, progress } = useStudy()
  const item = items[index]
  useEffect(() => { if (!running) return; const timer = window.setInterval(() => setSeconds((value) => value + 1),1000); return () => clearInterval(timer) },[running])
  if (!item) return null
  const next = () => { setIndex((value) => (value + 1) % items.length); setRevealed(false); setSeconds(0); setRunning(false); setActiveStep(0); setActiveKeyword(null) }
  return <section className={`oral-card ${compact ? 'compact' : ''}`}><div className="oral-header"><span>Simulazione orale</span><div className="segmented">{([['guided','Guidata'],['real','Reale'],['strict','Prof. severo']] as const).map(([value,label]) => <button className={mode === value ? 'active' : ''} onClick={() => setMode(value)} key={value}>{label}</button>)}</div></div><p className="oral-counter">Domanda {index+1} di {items.length} · <b>{String(Math.floor(seconds/60)).padStart(2,'0')}:{String(seconds%60).padStart(2,'0')}</b></p><h2>“{item.question}”</h2>{mode === 'guided' && <><div className="oral-scaffold-head"><span>✦ Il filo della risposta</span><small>Tocca un passaggio: ti dico che cosa farne, non solo come si chiama.</small></div><div className="answer-steps interactive">{item.structure.map((step,i) => <button type="button" className={activeStep === i ? 'active' : ''} aria-pressed={activeStep === i} onClick={() => setActiveStep(i)} onMouseEnter={() => setActiveStep(i)} onFocus={() => setActiveStep(i)} key={step}><b>{i+1}</b><span>{step}</span></button>)}</div><div className="oral-step-guide" aria-live="polite"><small>Ora costruisci il passaggio {activeStep + 1}</small><strong>{item.structure[activeStep]}</strong><p>{oralStepGuides[activeStep]}</p></div><div className="keywords" aria-label="Parole chiave spiegate">{item.keywords.map((word) => <span className="oral-keyword-wrap" key={word}><button type="button" className="oral-keyword" data-keyword={word} aria-expanded={activeKeyword === word} onClick={() => setActiveKeyword(activeKeyword === word ? null : word)}>{word}</button><span className={`oral-keyword-tip ${activeKeyword === word ? 'open' : ''}`} role="tooltip">{oralKeywordHints[word]}</span></span>)}</div></>}{mode === 'strict' && <div className="strict-box"><strong>Incrocio del professore</strong>{item.followUps.map((question) => <button key={question}>{question}</button>)}</div>}<div className="oral-actions"><button className="secondary-button" onClick={() => setRunning((value) => !value)}>{running ? 'Pausa' : seconds ? 'Riprendi' : 'Inizia timer'}</button><button className="primary-button" onClick={() => setRevealed((value) => !value)}>{revealed ? 'Nascondi modello' : 'Confronta col modello'}</button></div><VoiceRecorder/>{revealed && <div className="model-answer"><strong>Risposta modello</strong><p>{item.modelAnswer}</p><div><button onClick={() => markOralReady(item.id)}>{progress.oralReady.includes(item.id) ? '✓ So spiegarlo' : 'Segna: so spiegarlo'}</button><button onClick={next}>Altra domanda →</button></div></div>}</section>
}
