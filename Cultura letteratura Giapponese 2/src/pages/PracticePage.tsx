import { useState } from 'react'
import { lessons, macroUnits, quizzes } from '../data/course'
import { QuizEngine } from '../components/QuizEngine'

type Mode =
  | 'rapid'
  | 'matching'
  | 'memory'
  | 'timeline'
  | 'compare'
  | 'flashcards'
  | 'table'
  | 'lightning'
  | 'petals'
  | 'constellation'
  | 'duel'
const modes: { id: Mode; label: string; icon: string; time: string }[] = [
  { id: 'rapid', label: 'Scatti rapidi', icon: '⚡', time: '3 min' },
  { id: 'matching', label: 'Matching', icon: '↔', time: '4 min' },
  { id: 'memory', label: 'Memory', icon: '◇', time: '3 min' },
  { id: 'timeline', label: 'Timeline game', icon: '◷', time: '4 min' },
  { id: 'compare', label: 'Confronto', icon: '⇄', time: '3 min' },
  { id: 'flashcards', label: 'Flashcard', icon: '▣', time: '4 min' },
  { id: 'table', label: 'Tabella viva', icon: '▦', time: '4 min' },
  { id: 'lightning', label: 'Lightning', icon: '✦', time: '5 min' },
  { id: 'petals', label: 'Petali logici', icon: '❀', time: '3 min' },
  { id: 'constellation', label: 'Costellazioni', icon: '✦', time: '3 min' },
  { id: 'duel', label: 'Duello lampo', icon: '⇆', time: '3 min' },
]

function RapidGame({ quizIds }: { quizIds: string[] }) {
  return (
    <section className="game-card">
      <GameHead title="Scatti rapidi" subtitle={`${quizIds.length} domande dai blocchi scelti`} />
      <QuizEngine key={quizIds.join('|')} ids={quizIds} />
    </section>
  )
}

const pairs = [
  ['ninjō', 'Passioni e motivazioni umane'],
  ['kokugo', 'Lingua nazionale istituzionalizzata'],
  ['mimesis', 'Rappresentazione che costruisce'],
  ['campo', 'Spazio di lotte per il valore'],
]
function MatchingGame() {
  const [left, setLeft] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [message, setMessage] = useState(
    'Trascina un termine sulla spiegazione oppure seleziona i due pulsanti.',
  )
  const choose = (id: string) => {
    if (!left) {
      setMessage('Prima scegli un termine nella colonna di sinistra.')
      return
    }
    if (left === id) {
      setDone((current) => (current.includes(id) ? current : [...current, id]))
      setMessage(`Connessione corretta: ${id}.`)
    } else setMessage(`Non ancora: ${left} non corrisponde a questa spiegazione.`)
    setLeft(null)
  }
  return (
    <section className="game-card">
      <GameHead
        title="Matching teoria → applicazione"
        subtitle={`${done.length}/${pairs.length} connessioni`}
      />
      <p id="matching-instructions" className="game-instruction">
        Trascina un termine sulla spiegazione. Su touch o tastiera: tocca prima il termine, poi la
        spiegazione.
      </p>
      <div className="matching-board" aria-describedby="matching-instructions">
        <div aria-label="Termini">
          {pairs.map(([id]) => (
            <button
              type="button"
              draggable={!done.includes(id!)}
              disabled={done.includes(id!)}
              aria-pressed={left === id}
              className={left === id ? 'active' : ''}
              onDragStart={() => {
                setLeft(id!)
                setMessage(`Hai preso ${id}. Rilascialo sulla spiegazione corretta.`)
              }}
              onDragEnd={() => setLeft(null)}
              onClick={() => {
                setLeft(id!)
                setMessage(`Hai selezionato ${id}. Ora scegli la spiegazione.`)
              }}
              key={id}
            >
              {id}
            </button>
          ))}
        </div>
        <div aria-label="Spiegazioni">
          {[...pairs].reverse().map(([id, detail]) => (
            <button
              type="button"
              disabled={done.includes(id!)}
              className={left ? 'drop-ready' : ''}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault()
                choose(id!)
              }}
              onClick={() => choose(id!)}
              key={id}
            >
              {detail}
            </button>
          ))}
        </div>
      </div>
      <div className="game-feedback matching-feedback" aria-live="polite">
        <p>
          {done.length === pairs.length
            ? 'Schema ricomposto: ora prova a spiegare ogni freccia ad alta voce.'
            : message}
        </p>
      </div>
    </section>
  )
}

const memoryPairs = [
  ['Shōyō', 'Shōsetsu shinzui'],
  ['Futabatei', 'Ukigumo'],
  ['Said', 'Orientalismo'],
  ['Bourdieu', 'Campo letterario'],
]
function MemoryGame() {
  const cards = memoryPairs.flatMap(([a, b], pair) => [
    { key: `${pair}a`, pair, label: a },
    { key: `${pair}b`, pair, label: b },
  ])
  const [open, setOpen] = useState<string[]>([])
  const [solved, setSolved] = useState<number[]>([])
  const pick = (key: string, pair: number) => {
    if (open.includes(key) || solved.includes(pair)) return
    if (open.length === 2) setOpen([key])
    else if (open.length === 1) {
      const first = cards.find((card) => card.key === open[0])
      setOpen([...open, key])
      if (first?.pair === pair) setSolved((current) => [...current, pair])
    } else setOpen([key])
  }
  return (
    <section className="game-card">
      <GameHead
        title="Memory autore ↔ idea"
        subtitle={`${solved.length}/${memoryPairs.length} coppie`}
      />
      <div className="memory-grid">
        {cards.map((card) => (
          <button
            className={open.includes(card.key) || solved.includes(card.pair) ? 'open' : ''}
            onClick={() => pick(card.key, card.pair)}
            key={card.key}
          >
            <span>✦</span>
            <strong>{card.label}</strong>
          </button>
        ))}
      </div>
    </section>
  )
}

const timelineCorrect = [
  'Perry',
  'Trattati ineguali',
  'Restaurazione Meiji',
  'Shōsetsu shinzui',
  'Ukigumo',
]
function TimelineGame() {
  const [items, setItems] = useState([
    'Ukigumo',
    'Perry',
    'Restaurazione Meiji',
    'Trattati ineguali',
    'Shōsetsu shinzui',
  ])
  const [checked, setChecked] = useState(false)
  const move = (i: number, d: -1 | 1) => {
    const n = i + d
    if (n < 0 || n >= items.length) return
    setItems((current) => {
      const copy = [...current]
      ;[copy[i], copy[n]] = [copy[n]!, copy[i]!]
      return copy
    })
    setChecked(false)
  }
  const solved = items.every((item, i) => item === timelineCorrect[i])
  return (
    <section className="game-card">
      <GameHead title="Timeline game" subtitle="1853 → 1889" />
      <div className="timeline-sort">
        {items.map((item, i) => (
          <div
            className={checked ? (item === timelineCorrect[i] ? 'correct' : 'wrong') : ''}
            key={item}
          >
            <span>{i + 1}</span>
            <strong>{item}</strong>
            <button onClick={() => move(i, -1)}>↑</button>
            <button onClick={() => move(i, 1)}>↓</button>
          </div>
        ))}
      </div>
      <button className="primary-button" onClick={() => setChecked(true)}>
        Controlla l’ordine
      </button>
      {checked && (
        <p className="inline-result">
          {solved
            ? 'Sequenza perfetta: ora collegala causalmente.'
            : 'Usa 1853 come ancora iniziale e 1885 come ancora letteraria.'}
        </p>
      )}
    </section>
  )
}

function CompareGame() {
  const [choice, setChoice] = useState<string | null>(null)
  const rows = [
    ['Problema', 'Formula che cosa rappresentare', 'Mostra come rappresentarlo'],
    ['Centro', 'Ninjō e carattere', 'Coscienza esitante di Bunzō'],
    ['Risultato', 'Programma teorico', 'Esperimento narrativo'],
  ]
  return (
    <section className="game-card">
      <GameHead title="Confronto rapido" subtitle="Shōyō ⇄ Futabatei" />
      <div className="compare-mini">
        <div />
        <strong>Shōyō</strong>
        <strong>Futabatei</strong>
        {rows.flatMap((row) => (
          <>
            <b key={`${row[0]}h`}>{row[0]}</b>
            <button key={`${row[0]}a`} onClick={() => setChoice(row[1]!)}>
              {row[1]}
            </button>
            <button key={`${row[0]}b`} onClick={() => setChoice(row[2]!)}>
              {row[2]}
            </button>
          </>
        ))}
      </div>
      {choice && (
        <div className="game-feedback">
          <p>{choice}</p>
          <small>Prova a completare: “La differenza fondamentale è che…”</small>
        </div>
      )}
    </section>
  )
}

const flashcards = [
  [
    'Genbun itchi',
    'Processo sperimentale che costruisce nuovi effetti di oralità; non semplice copia del parlato.',
  ],
  ['Canone', 'Memoria selettiva stabilizzata da valore, istituzioni e ripetizione.'],
  [
    'Auto-orientalismo',
    'Negoziazione interna di categorie orientaliste dentro rapporti asimmetrici.',
  ],
  ['Ninjō', 'Passioni umane complesse che Shōyō pone al centro del romanzo.'],
]
function Flashcards() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = flashcards[index]!
  return (
    <section className="game-card">
      <GameHead title="Flashcard attive" subtitle={`${index + 1}/${flashcards.length}`} />
      <button
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <span>{flipped ? 'Spiegazione' : 'Termine'}</span>
        <strong>{flipped ? card[1] : card[0]}</strong>
        <small>Tocca per girare</small>
      </button>
      <div className="flash-actions">
        <button
          onClick={() => {
            setIndex((index + 1) % flashcards.length)
            setFlipped(false)
          }}
        >
          Non ricordo
        </button>
        <button
          onClick={() => {
            setIndex((index + 1) % flashcards.length)
            setFlipped(false)
          }}
        >
          Ricordo e collego →
        </button>
      </div>
    </section>
  )
}

const tableRows = [
  ['Shōyō', 'Shōsetsu shinzui', 'ninjō'],
  ['Futabatei', 'Ukigumo', 'interiorità'],
  ['Said', 'Orientalism', 'discorso e potere'],
]
function TableGame() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const options = ['ninjō', 'interiorità', 'discorso e potere']
  return (
    <section className="game-card">
      <GameHead title="Tabella da completare" subtitle={`${Object.keys(answers).length}/3 celle`} />
      <div className="fill-table">
        <div>
          <b>Autore</b>
          <b>Opera/teoria</b>
          <b>Nodo</b>
        </div>
        {tableRows.map((row, i) => (
          <div key={row[0]}>
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <button
              className={answers[i] === row[2] ? 'correct' : answers[i] ? 'wrong' : ''}
              onClick={() =>
                setAnswers((current) => ({
                  ...current,
                  [i]: options[(options.indexOf(current[i] ?? '') + 1) % options.length]!,
                }))
              }
            >
              {answers[i] ?? 'Scegli…'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function Lightning({ quizIds }: { quizIds: string[] }) {
  const [size, setSize] = useState(10)
  const [started, setStarted] = useState(false)
  const ids = Array.from({ length: size }, (_, i) => quizIds[i % quizIds.length]!)
  return (
    <section className="game-card lightning-card">
      <GameHead
        title="Lightning Round"
        subtitle={`${quizIds.length} domande selezionate · niente scrittura`}
      />
      {!started ? (
        <>
          <h2>Quanti lampi vuoi?</h2>
          <div className="lightning-sizes">
            {[10, 20, 30].map((value) => (
              <button
                className={size === value ? 'active' : ''}
                onClick={() => setSize(value)}
                key={value}
              >
                <strong>{value}</strong>
                <small>domande</small>
              </button>
            ))}
          </div>
          <button className="primary-button" onClick={() => setStarted(true)}>
            Avvia il round →
          </button>
        </>
      ) : (
        <QuizEngine key={ids.join('|')} ids={ids} boss onComplete={() => setStarted(false)} />
      )}
      <details>
        <summary>Boss dei blocchi selezionati</summary>
        <QuizEngine key={quizIds.join('|')} ids={quizIds} boss />
      </details>
    </section>
  )
}

const petalRounds = [
  {
    title: 'Dalla ferita alla memoria',
    items: ['Evento traumatico', 'Memoria frammentata', 'Forma testimoniale', 'Memoria collettiva'],
    hint: 'La testimonianza non salta direttamente alla memoria pubblica: prima deve dare forma a un ricordo spezzato.',
  },
  {
    title: 'Il metodo del detective',
    items: ['Delitto', 'Raccolta degli indizi', 'Deduzione', 'Soluzione'],
    hint: 'Prima si osserva, poi si interpreta: la deduzione viene dopo gli indizi.',
  },
  {
    title: 'La svolta di Sōseki',
    items: [
      'Esperienza londinese',
      'Tempesta del dubbio',
      'Ricerca di una via propria',
      'Individualismo',
    ],
    hint: 'La crisi londinese apre una ricerca; l’individualismo è l’esito teorico, non il punto di partenza.',
  },
]
function PetalGame() {
  const [round, setRound] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [message, setMessage] = useState('Tocca il primo passaggio della catena.')
  const current = petalRounds[round]!
  const choices = [current.items[2]!, current.items[0]!, current.items[3]!, current.items[1]!]
  const choose = (item: string) => {
    if (selected.includes(item)) return
    const expected = current.items[selected.length]
    if (item === expected) {
      const next = [...selected, item]
      setSelected(next)
      setMessage(
        next.length === current.items.length
          ? 'Catena completa: hai ricostruito il nesso, non solo l’ordine.'
          : `Bene. Ora cerca il passaggio ${next.length + 1}.`,
      )
    } else setMessage(current.hint)
  }
  const next = () => {
    setRound((round + 1) % petalRounds.length)
    setSelected([])
    setMessage('Tocca il primo passaggio della catena.')
  }
  return (
    <section className="game-card petal-game">
      <GameHead
        title="Petali logici"
        subtitle={`${round + 1}/${petalRounds.length} catene causali`}
      />
      <h2>{current.title}</h2>
      <div className="petal-path" aria-label="Catena costruita">
        {current.items.map((_, index) => (
          <span className={selected[index] ? 'filled' : ''} key={index}>
            {selected[index] ?? index + 1}
          </span>
        ))}
      </div>
      <div className="petal-board">
        {choices.map((item) => (
          <button
            className={selected.includes(item) ? 'picked' : ''}
            disabled={selected.includes(item)}
            onClick={() => choose(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="game-feedback petal-feedback" aria-live="polite">
        <span>✿</span>
        <p>{message}</p>
        {selected.length === current.items.length && <button onClick={next}>Altra catena →</button>}
      </div>
    </section>
  )
}

const constellationRounds = [
  {
    center: 'Genbaku bungaku',
    links: ['hibakusha', 'tempo discontinuo', 'memoria collettiva'],
    intruder: 'ninjō',
    explain:
      'La letteratura della bomba atomica unisce testimone, frattura del tempo e costruzione della memoria; ninjō appartiene al programma romanzesco di Shōyō.',
  },
  {
    center: 'Shinkankakuha',
    links: ['kankaku', 'montaggio', 'Bungei jidai'],
    intruder: 'junshi',
    explain:
      'Sensazione, montaggio e rivista Bungei jidai definiscono la Nuova Sensibilità; junshi è il suicidio al seguito del proprio signore.',
  },
  {
    center: 'Tanizaki',
    links: ['ombra', 'non detto', 'artificio'],
    intruder: 'heimen byōsha',
    explain:
      'In Tanizaki ombra, reticenza e artificio formano un’estetica; heimen byōsha è la descrizione piana legata al naturalismo.',
  },
]
function ConstellationGame() {
  const [round, setRound] = useState(0)
  const [marks, setMarks] = useState<Record<string, 'right' | 'wrong'>>({})
  const current = constellationRounds[round]!
  const choices = [current.links[1]!, current.intruder, current.links[0]!, current.links[2]!]
  const choose = (item: string) =>
    setMarks((old) => ({ ...old, [item]: current.links.includes(item) ? 'right' : 'wrong' }))
  const solved = current.links.every((item) => marks[item] === 'right')
  const next = () => {
    setRound((round + 1) % constellationRounds.length)
    setMarks({})
  }
  return (
    <section className="game-card constellation-game">
      <GameHead
        title="Costellazioni"
        subtitle={`${round + 1}/${constellationRounds.length} reti concettuali`}
      />
      <p className="game-instruction">
        Trova i tre concetti davvero collegati al centro. C’è una stella intrusa.
      </p>
      <div className="constellation-board">
        <div className="constellation-center">
          <span>✦</span>
          <strong>{current.center}</strong>
        </div>
        {choices.map((item) => (
          <button className={marks[item] ?? ''} onClick={() => choose(item)} key={item}>
            <span>✧</span>
            {item}
          </button>
        ))}
      </div>
      {(marks[current.intruder] || solved) && (
        <div className="game-feedback" aria-live="polite">
          <p>{current.explain}</p>
          {solved && <button onClick={next}>Nuova costellazione →</button>}
        </div>
      )}
    </section>
  )
}

const duelQuestions = [
  {
    statement: 'Il narratore conserva esitazioni, lacune e ritorni del ricordo.',
    left: 'Testimonianza',
    right: 'Cronaca lineare',
    answer: 'Testimonianza',
    why: 'La memoria traumatica viene rappresentata nella sua discontinuità, non ripulita in una sequenza neutra.',
  },
  {
    statement: 'Il testo dispone indizi verificabili e conduce a una soluzione razionale.',
    left: 'Honkaku',
    right: 'Henkaku',
    answer: 'Honkaku',
    why: 'L’honkaku valorizza il fair play deduttivo; l’henkaku devia verso anomalia, psicologia e perturbante.',
  },
  {
    statement: 'Difendere la propria autonomia riconoscendo anche quella altrui.',
    left: 'Individualismo',
    right: 'Egoismo',
    answer: 'Individualismo',
    why: 'Per Sōseki l’individualismo maturo richiede responsabilità; l’egoismo usa la libertà ignorando gli altri.',
  },
  {
    statement: 'Il bombardamento è raccontato da una posizione esterna e successiva.',
    left: 'Macerie',
    right: 'Distanza',
    answer: 'Distanza',
    why: 'La distanza indica uno sguardo posteriore o esterno; le macerie rendono invece l’esperienza immediata del disastro.',
  },
]
function DuelGame() {
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const current = duelQuestions[index]!
  const answer = (value: string) => {
    if (choice) return
    setChoice(value)
    if (value === current.answer) setScore((score) => score + 1)
  }
  const next = () => {
    setIndex((index + 1) % duelQuestions.length)
    setChoice(null)
  }
  return (
    <section className="game-card duel-game">
      <GameHead
        title="Duello lampo"
        subtitle={`${index + 1}/${duelQuestions.length} · ${score} punti`}
      />
      <div className="duel-ribbon">
        <span>✦</span>
        <p>{current.statement}</p>
        <span>✦</span>
      </div>
      <div className="duel-choices">
        <button
          className={choice ? (current.left === current.answer ? 'correct' : 'wrong') : ''}
          onClick={() => answer(current.left)}
        >
          {current.left}
        </button>
        <b>oppure</b>
        <button
          className={choice ? (current.right === current.answer ? 'correct' : 'wrong') : ''}
          onClick={() => answer(current.right)}
        >
          {current.right}
        </button>
      </div>
      {choice && (
        <div className="game-feedback" aria-live="polite">
          <p>
            <strong>
              {choice === current.answer
                ? 'Esatto.'
                : 'Quasi: la risposta è ' + current.answer + '.'}
            </strong>{' '}
            {current.why}
          </p>
          <button onClick={next}>Prossimo duello →</button>
        </div>
      )}
    </section>
  )
}

function GameHead({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="game-head">
      <span className="eyebrow">{subtitle}</span>
      <h2>{title}</h2>
    </header>
  )
}

export function PracticePage() {
  const availableUnits = macroUnits.filter((unit) => unit.available)
  const [mode, setMode] = useState<Mode>('rapid')
  const [selectedUnits, setSelectedUnits] = useState<string[]>(
    availableUnits.map((unit) => unit.id),
  )
  const lessonIds = new Set(
    lessons
      .filter((lesson) => selectedUnits.includes(lesson.macroUnitId))
      .map((lesson) => lesson.id),
  )
  const selectedQuizIds = quizzes
    .filter((quiz) => lessonIds.has(quiz.lessonId))
    .map((quiz) => quiz.id)
  const toggleUnit = (id: string) =>
    setSelectedUnits((current) =>
      current.includes(id)
        ? current.length === 1
          ? current
          : current.filter((item) => item !== id)
        : [...current, id],
    )
  return (
    <div className="page narrow-page practice-page">
      <header className="page-heading">
        <span className="eyebrow">Palestra zero attrito</span>
        <h1>
          Ancora una.
          <br />
          Poi un’altra.
        </h1>
        <p>
          Undici formati brevi per trasformare riconoscimento in richiamo attivo senza richiedere
          scrittura.
        </p>
      </header>
      <section className="practice-scope" aria-labelledby="practice-scope-title">
        <header>
          <div>
            <span className="eyebrow">Decidi tu il campo</span>
            <h2 id="practice-scope-title">Quali blocchi vuoi allenare?</h2>
            <p>
              {selectedUnits.length} blocchi · {selectedQuizIds.length} domande disponibili
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedUnits(availableUnits.map((unit) => unit.id))}
          >
            Seleziona tutti
          </button>
        </header>
        <div className="scope-grid">
          {availableUnits.map((unit) => {
            const active = selectedUnits.includes(unit.id)
            const count = quizzes.filter((quiz) =>
              unit.lessonIds.some((lessonId) => quiz.lessonId === lessonId),
            ).length
            return (
              <article className={active ? 'active' : ''} key={unit.id}>
                <button type="button" aria-pressed={active} onClick={() => toggleUnit(unit.id)}>
                  <span>{active ? '✓' : unit.number}</span>
                  <strong>{unit.shortTitle}</strong>
                  <small>{count} domande</small>
                </button>
                <button
                  type="button"
                  className="only-unit"
                  onClick={() => setSelectedUnits([unit.id])}
                >
                  Solo questo
                </button>
              </article>
            )
          })}
        </div>
        <small className="scope-note">
          Il filtro guida Scatti rapidi, Lightning e Boss. Gli altri giochi allenano collegamenti
          trasversali fra più blocchi.
        </small>
      </section>
      <nav className="game-modes" aria-label="Modalità esercizi">
        {modes.map((item) => (
          <button
            className={mode === item.id ? 'active' : ''}
            onClick={() => setMode(item.id)}
            key={item.id}
          >
            <span>{item.icon}</span>
            <strong>{item.label}</strong>
            <small>{item.time}</small>
          </button>
        ))}
      </nav>
      {mode === 'rapid' && <RapidGame quizIds={selectedQuizIds} />}{' '}
      {mode === 'matching' && <MatchingGame />}
      {mode === 'memory' && <MemoryGame />}
      {mode === 'timeline' && <TimelineGame />}
      {mode === 'compare' && <CompareGame />}
      {mode === 'flashcards' && <Flashcards />}
      {mode === 'table' && <TableGame />}
      {mode === 'lightning' && <Lightning quizIds={selectedQuizIds} />}{' '}
      {mode === 'petals' && <PetalGame />}
      {mode === 'constellation' && <ConstellationGame />}
      {mode === 'duel' && <DuelGame />}
    </div>
  )
}
