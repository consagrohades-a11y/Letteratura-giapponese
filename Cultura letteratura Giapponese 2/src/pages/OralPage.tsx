import { oralQuestions } from '../data/course'
import { OralSimulator } from '../components/OralSimulator'

export function OralPage() { return <div className="page narrow-page"><header className="page-heading"><span className="eyebrow">Palestra orale</span><h1>Prima la struttura. Poi la voce.</h1><p>{oralQuestions.length} domande sui blocchi attivi, con impalcatura, incroci severi e risposta modello.</p></header><OralSimulator ids={oralQuestions.map((item) => item.id)}/></div> }
