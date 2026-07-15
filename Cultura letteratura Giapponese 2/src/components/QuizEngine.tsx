import { useState } from 'react'
import { quizzes } from '../data/course'
import { useStudy } from '../state/StudyContext'

export function QuizEngine({ ids, boss = false, onComplete }: { ids: string[]; boss?: boolean; onComplete?: () => void }) {
  const questions = ids.map((id) => quizzes.find((q) => q.id === id)).filter(Boolean)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confidence, setConfidence] = useState(2)
  const [score, setScore] = useState(0)
  const { recordQuiz } = useStudy()
  const question = questions[index]
  if (!question) return null
  const isCorrect = selected === question.answer
  const choose = (option: number) => { if (selected !== null) return; setSelected(option); if (option === question.answer) setScore((value) => value + 1); recordQuiz(question.id, option === question.answer, confidence) }
  const next = () => { if (index === questions.length - 1) { onComplete?.(); setIndex(0); setSelected(null); setScore(0) } else { setIndex((value) => value + 1); setSelected(null) } }
  return <section className={`quiz-card ${boss ? 'boss' : ''}`} aria-live="polite"><div className="quiz-top"><span>{boss ? 'Boss check' : 'Check rapido'}</span><small>{index + 1} / {questions.length}</small></div>{boss && <div className="boss-meter"><span style={{ width: `${(index / questions.length) * 100}%` }}/></div>}<h3>{question.prompt}</h3><div className="confidence"><span>Quanto sei sicura?</span>{['Bassa','Media','Alta'].map((label,i) => <button key={label} className={confidence === i + 1 ? 'active' : ''} onClick={() => setConfidence(i+1)}>{label}</button>)}</div><div className="quiz-options">{question.options.map((option,i) => <button key={option} onClick={() => choose(i)} disabled={selected !== null} className={selected === null ? '' : i === question.answer ? 'correct' : i === selected ? 'wrong' : 'muted'}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{selected !== null && <div className={`feedback ${isCorrect ? 'success' : 'error'}`}><strong>{isCorrect ? 'Esatto — il nodo è questo.' : 'Quasi. Cambiamo angolazione.'}</strong><p>{question.explanation}</p><small>{question.distinction}</small><button className="primary-button" onClick={next}>{index === questions.length - 1 ? `Concludi · ${score + Number(isCorrect)}/${questions.length}` : 'Prossimo stimolo →'}</button></div>}</section>
}
