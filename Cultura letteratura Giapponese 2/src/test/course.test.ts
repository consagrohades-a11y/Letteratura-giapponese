import { describe, expect, it } from 'vitest'
import { glossary, lessons, macroUnits, oralQuestions, quizzes } from '../data/course'
import { knowledgeEdges, knowledgeNodes, libraryEntries, timelineEvents } from '../data/library'
import { learningSupports } from '../data/learningSupports'
import { oralKeywordHints } from '../data/oralSupports'

describe('vertical slice didattica', () => {
  it('rende studiabili i primi tre blocchi', () => {
    expect(macroUnits.slice(0, 3).every((unit) => unit.available)).toBe(true)
    expect(macroUnits.slice(0, 3).every((unit) => unit.lessonIds.length > 0)).toBe(true)
  })

  it('collega ogni lezione a quiz, orale e termini validi', () => {
    for (const lesson of lessons) {
      expect(lesson.sections.length).toBeGreaterThan(0)
      expect(lesson.quizIds.every((id) => quizzes.some((quiz) => quiz.id === id))).toBe(true)
      expect(lesson.oralQuestionIds.every((id) => oralQuestions.some((oral) => oral.id === id))).toBe(true)
      expect(lesson.sections.flatMap((section) => section.termIds).every((id) => glossary.some((term) => term.id === id))).toBe(true)
    }
  })

  it('mantiene blocchi di lettura brevi', () => {
    for (const paragraph of lessons.flatMap((lesson) => lesson.sections).flatMap((section) => [...section.essential, ...section.good, ...section.excellence])) {
      expect(paragraph.trim().split(/\s+/).length).toBeLessThanOrEqual(90)
    }
  })

  it('offre aiuti semantici distinti dal paragrafo principale', () => {
    for (const section of lessons.flatMap((lesson) => lesson.sections)) {
      const support = learningSupports[section.id]
      expect(support, `supporto mancante per ${section.id}`).toBeDefined()
      if (!support) throw new Error(`Supporto mancante per ${section.id}`)
      expect(support.simple).not.toBe(section.essential[0])
      expect(new Set([support.simple, support.example, support.analogy, support.oralFormula]).size).toBe(4)
      expect(support.example.trim().split(/\s+/).length).toBeGreaterThan(8)
      expect(support.analogy.trim().split(/\s+/).length).toBeGreaterThan(8)
    }
  })

  it('spiega ogni parola chiave della simulazione orale', () => {
    for (const keyword of oralQuestions.flatMap((question) => question.keywords)) {
      const hint = oralKeywordHints[keyword]
      expect(hint, `spiegazione mancante per ${keyword}`).toBeTruthy()
      if (!hint) throw new Error(`Spiegazione mancante per ${keyword}`)
      expect(hint.trim().split(/\s+/).length).toBeLessThanOrEqual(30)
    }
  })

  it('mantiene integro l’atlante collegato', () => {
    expect(new Set(libraryEntries.map((entry) => entry.id)).size).toBe(libraryEntries.length)
    expect(libraryEntries.every((entry) => lessons.some((lesson) => lesson.id === entry.lessonId))).toBe(true)
    expect(['author', 'work', 'movement', 'theory'].every((kind) => libraryEntries.some((entry) => entry.kind === kind))).toBe(true)
    expect(timelineEvents.length).toBeGreaterThanOrEqual(10)
  })

  it('usa solo nodi esistenti nella knowledge map', () => {
    const ids = new Set(knowledgeNodes.map((node) => node.id))
    expect(knowledgeEdges.every((edge) => ids.has(edge.from) && ids.has(edge.to))).toBe(true)
    expect(knowledgeEdges.every((edge) => edge.label.length > 0)).toBe(true)
  })
})
