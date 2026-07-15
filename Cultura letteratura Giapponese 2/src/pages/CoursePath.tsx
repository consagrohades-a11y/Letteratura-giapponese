import { Link } from 'react-router-dom'
import { lessons, macroUnits } from '../data/course'
import { useStudy } from '../state/StudyContext'
import { ProgressBar } from '../components/ProgressBar'

export function CoursePath() {
  const { progress } = useStudy()
  const activeLessons = lessons.filter((lesson) => !progress.completedLessons.includes(lesson.id))
  const next = (activeLessons[0] ?? lessons[0])!
  const totalMinutes = activeLessons.reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0)
  return (
    <div className="page narrow-page">
      <Link className="page-back-link" to="/" aria-label="Torna alla pagina Oggi">
        ← Torna a Oggi
      </Link>
      <header className="page-heading path-heading">
        <span className="eyebrow">Percorso completo</span>
        <h1>Dal concetto alla risposta orale</h1>
        <p>Un obiettivo alla volta, con tutto il programma intatto.</p>
      </header>
      <section className="path-mission" aria-label="Missione attuale">
        <div>
          <span>Missione attuale · {next.estimatedMinutes} min</span>
          <h2>{next.objectives[0] ?? next.title}</h2>
          <p>Prossimo checkpoint: spiegazione → schema → verifica rapida.</p>
        </div>
        <Link className="primary-button" to={`/lezione/${next.id}`}>
          Inizia adesso →
        </Link>
        <div className="path-stats">
          <span>
            <b>{lessons.length - progress.completedLessons.length}</b> lezioni attive
          </span>
          <span>
            <b>{totalMinutes}</b> minuti rimasti
          </span>
          <span>
            <b>{next.sections.length}</b> micro-attività
          </span>
          <span>
            <b>PDF {next.sourcePages.join('–')}</b> fonte
          </span>
        </div>
        <ProgressBar
          label="Avanzamento dell’intero programma"
          value={Math.round((progress.completedLessons.length / lessons.length) * 100)}
        />
      </section>
      <div className="course-path">
        {macroUnits.map((unit) => {
          const unitLessons = lessons.filter((lesson) => lesson.macroUnitId === unit.id)
          const completed = unitLessons.filter((lesson) =>
            progress.completedLessons.includes(lesson.id),
          ).length
          const remaining = unitLessons
            .filter((lesson) => !progress.completedLessons.includes(lesson.id))
            .reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0)
          const concepts = unitLessons.reduce((sum, lesson) => sum + lesson.sections.length, 0)
          const quizzes = unitLessons.reduce((sum, lesson) => sum + lesson.quizIds.length, 0)
          const unitNext =
            unitLessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) ??
            unitLessons[0]
          return (
            <section
              id={unit.id}
              key={unit.id}
              className={`unit-row ${!unit.available ? 'locked' : ''}`}
            >
              <div className="unit-index">{String(unit.number).padStart(2, '0')}</div>
              <div className="unit-content">
                <div className="unit-title">
                  <div>
                    <span>
                      {unit.available
                        ? `${remaining} min rimasti · difficoltà ${unit.number === 1 ? 'fondamentale' : unit.number === 2 ? 'media' : 'avanzata'}`
                        : 'In preparazione'}
                    </span>
                    <h2>{unit.title}</h2>
                  </div>
                  {unit.available && (
                    <span>
                      {completed}/{unitLessons.length}
                    </span>
                  )}
                </div>
                <p>{unit.description}</p>
                {unit.available && (
                  <>
                    <div className="unit-facts">
                      <span>{unitLessons.length} lezioni</span>
                      <span>{concepts} concetti</span>
                      <span>{quizzes} quiz</span>
                      <span>Boss + orale</span>
                    </div>
                    <p className="unit-outcome">
                      <b>Saprai spiegare:</b>{' '}
                      {unitLessons
                        .map((lesson) => String(lesson.objectives[0] ?? lesson.title).toLowerCase())
                        .join('; ')}
                      .
                    </p>
                    <ProgressBar
                      compact
                      label="Completamento unità"
                      value={
                        unitLessons.length ? Math.round((completed / unitLessons.length) * 100) : 0
                      }
                    />
                    <div className="lesson-links">
                      {unitLessons.map((lesson) => (
                        <Link key={lesson.id} to={`/lezione/${lesson.id}`}>
                          <span>
                            {progress.completedLessons.includes(lesson.id)
                              ? '✓'
                              : lesson.id === unitNext?.id
                                ? '★'
                                : '→'}
                          </span>
                          <span>
                            <strong>{lesson.title}</strong>
                            <small>
                              {lesson.objectives[0] ?? lesson.title} · {lesson.sections.length}{' '}
                              attività
                            </small>
                          </span>
                          <b>{lesson.estimatedMinutes}′</b>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
