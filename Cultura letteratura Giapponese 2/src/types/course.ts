export type Priority = 1 | 2 | 3 | 4 | 5
export type Depth = 'essential' | 'good' | 'excellence'
export type SectionKind = 'explanation' | 'schema' | 'comparison' | 'timeline' | 'cause-effect' | 'aha'

export interface LessonSection {
  id: string
  title: string
  eyebrow: string
  kind: SectionKind
  essential: string[]
  good: string[]
  excellence: string[]
  visual?: { label: string; detail: string }[]
  termIds: string[]
}

export interface Lesson {
  id: string
  macroUnitId: string
  title: string
  subtitle: string
  estimatedMinutes: number
  priority: Priority
  objectives: string[]
  sections: LessonSection[]
  quizIds: string[]
  oralQuestionIds: string[]
  sourcePages: number[]
}

export interface MacroUnit {
  id: string
  number: number
  title: string
  shortTitle: string
  description: string
  estimatedMinutes: number
  lessonIds: string[]
  available: boolean
}

export interface GlossaryTerm {
  id: string
  label: string
  reading?: string
  translation?: string
  category: 'teoria' | 'storia' | 'lingua' | 'genere' | 'autore' | 'opera' | 'movimento'
  shortDefinition: string
  fullExplanation: string
  commonMistake: string
  connections: string[]
  sourcePages: number[]
}

export interface QuizQuestion {
  id: string
  lessonId: string
  prompt: string
  type: 'choice' | 'true-false' | 'intruder' | 'chain'
  options: string[]
  answer: number
  explanation: string
  distinction: string
  termId?: string
}

export interface OralQuestion {
  id: string
  lessonId: string
  question: string
  followUps: string[]
  structure: string[]
  keywords: string[]
  modelAnswer: string
}

export interface ProgressRecord {
  completedSections: string[]
  completedLessons: string[]
  quizAttempts: Record<string, { correct: boolean; confidence: number; attempts: number; errorType?: 'non-conosce' | 'confonde' | 'dettaglio' | 'causa' | 'collegamento' | 'instabile' }>
  oralReady: string[]
  favorites: string[]
  lastLessonId?: string
  totalMinutes: number
}

export interface Settings {
  theme: 'light' | 'dark'
  depth: Depth
  focusMode: boolean
  motion: 'full' | 'reduced' | 'off'
  sidebarCollapsed: boolean
  examDate?: string
}
