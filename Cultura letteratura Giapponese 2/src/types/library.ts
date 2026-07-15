export type LibraryKind = 'author' | 'work' | 'movement' | 'theory'

export interface LibraryEntry {
  id: string
  kind: LibraryKind
  name: string
  japanese?: string
  dates?: string
  period: string
  oneLine: string
  context: string
  contribution: string
  themes: string[]
  techniques: string[]
  connections: string[]
  commonMistake: string
  oralHook: string
  lessonId: string
}

export interface TimelineEvent {
  year: number
  endYear?: number
  lane: 'storia' | 'lingua' | 'letteratura' | 'teoria'
  title: string
  detail: string
  entryId?: string
}

export interface KnowledgeNode {
  id: string
  label: string
  category: 'contesto' | 'lingua' | 'teoria' | 'autore' | 'opera'
  x: number
  y: number
  detail: string
  lessonId?: string
}

export interface KnowledgeEdge { from: string; to: string; label: string }
