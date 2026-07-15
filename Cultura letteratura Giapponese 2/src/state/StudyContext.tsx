import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Depth, ProgressRecord, Settings } from '../types/course'
import { lessons } from '../data/course'

const STORAGE_KEY = 'kokoro-study-v1'
const defaultProgress: ProgressRecord = { completedSections: [], completedLessons: [], quizAttempts: {}, oralReady: [], favorites: [], totalMinutes: 0 }
const defaultSettings: Settings = { theme: 'dark', depth: 'good', focusMode: false, motion: 'full', sidebarCollapsed: false }

type StoredState = { progress: ProgressRecord; settings: Settings }
type StudyContextValue = StoredState & {
  markSection: (id: string, lessonId: string) => void
  recordQuiz: (id: string, correct: boolean, confidence: number) => void
  markOralReady: (id: string) => void
  toggleFavorite: (id: string) => void
  setDepth: (depth: Depth) => void
  setTheme: (theme: Settings['theme']) => void
  setFocusMode: (active: boolean) => void
  setMotion: (motion: Settings['motion']) => void
  setSidebarCollapsed: (active: boolean) => void
  setExamDate: (date: string) => void
  reset: () => void
  importState: (state: StoredState) => void
  courseCompletion: number
  mastery: number
}

const StudyContext = createContext<StudyContextValue | null>(null)

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as StoredState
      return { progress: { ...defaultProgress, ...parsed.progress }, settings: { ...defaultSettings, ...parsed.settings } }
    }
  } catch { /* a malformed backup must never block study */ }
  return { progress: defaultProgress, settings: defaultSettings }
}

export function StudyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(loadState)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    document.documentElement.dataset.theme = state.settings.theme
    document.documentElement.dataset.motion = state.settings.motion
  }, [state])

  const value = useMemo<StudyContextValue>(() => {
    const totalSections = lessons.reduce((sum, lesson) => sum + lesson.sections.length, 0)
    const correct = Object.values(state.progress.quizAttempts).filter((attempt) => attempt.correct).length
    const attempted = Object.keys(state.progress.quizAttempts).length
    return {
      ...state,
      markSection: (id, lessonId) => setState((current) => {
        const completedSections = current.progress.completedSections.includes(id) ? current.progress.completedSections : [...current.progress.completedSections, id]
        const lesson = lessons.find((item) => item.id === lessonId)
        const lessonDone = lesson?.sections.every((item) => completedSections.includes(item.id)) ?? false
        const completedLessons = lessonDone && !current.progress.completedLessons.includes(lessonId) ? [...current.progress.completedLessons, lessonId] : current.progress.completedLessons
        return { ...current, progress: { ...current.progress, completedSections, completedLessons, lastLessonId: lessonId } }
      }),
      recordQuiz: (id, isCorrect, confidence) => setState((current) => {
        const attempts = (current.progress.quizAttempts[id]?.attempts ?? 0) + 1
        const errorType = isCorrect ? (confidence === 1 ? 'instabile' : undefined) : attempts >= 3 ? 'confonde' : id.includes('meiji') || id.includes('perry') ? 'causa' : id.includes('ukigumo') || id.includes('shoyo') ? 'collegamento' : attempts === 1 ? 'non-conosce' : 'dettaglio'
        return { ...current, progress: { ...current.progress, quizAttempts: { ...current.progress.quizAttempts, [id]: { correct: isCorrect, confidence, attempts, errorType } } } }
      }),
      markOralReady: (id) => setState((current) => ({ ...current, progress: { ...current.progress, oralReady: current.progress.oralReady.includes(id) ? current.progress.oralReady : [...current.progress.oralReady, id] } })),
      toggleFavorite: (id) => setState((current) => ({ ...current, progress: { ...current.progress, favorites: current.progress.favorites.includes(id) ? current.progress.favorites.filter((item) => item !== id) : [...current.progress.favorites, id] } })),
      setDepth: (depth) => setState((current) => ({ ...current, settings: { ...current.settings, depth } })),
      setTheme: (theme) => setState((current) => ({ ...current, settings: { ...current.settings, theme } })),
      setFocusMode: (focusMode) => setState((current) => ({ ...current, settings: { ...current.settings, focusMode } })),
      setMotion: (motion) => setState((current) => ({ ...current, settings: { ...current.settings, motion } })),
      setSidebarCollapsed: (sidebarCollapsed) => setState((current) => ({ ...current, settings: { ...current.settings, sidebarCollapsed } })),
      setExamDate: (examDate) => setState((current) => ({ ...current, settings: { ...current.settings, examDate } })),
      reset: () => setState({ progress: defaultProgress, settings: { ...defaultSettings, theme: state.settings.theme } }),
      importState: (next) => setState(next),
      courseCompletion: Math.round((state.progress.completedSections.length / Math.max(totalSections, 1)) * 25),
      mastery: attempted ? Math.round((correct / attempted) * 100) : 0,
    }
  }, [state])
  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>
}

// Context and its hook intentionally share a module to keep persistence atomic.
// eslint-disable-next-line react-refresh/only-export-components
export function useStudy() {
  const context = useContext(StudyContext)
  if (!context) throw new Error('useStudy deve essere usato dentro StudyProvider')
  return context
}
