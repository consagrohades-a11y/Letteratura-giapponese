import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { LessonPage } from '../pages/LessonPage'
import { StudyProvider } from '../state/StudyContext'

function renderLesson() {
  return render(<MemoryRouter initialEntries={['/lezione/letteratura-mimesis']}><StudyProvider><Routes><Route path="/lezione/:lessonId" element={<LessonPage/>}/></Routes></StudyProvider></MemoryRouter>)
}

describe('recupero attentivo nella lezione', () => {
  it('mostra spiegazione, schema e risorse quando la risposta è Non ancora', async () => {
    renderLesson()
    const button = screen.getByRole('button', { name: 'Non ancora' })
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Il punto centrale è questo:')).toBeInTheDocument()
    expect(screen.getByText('Schema lampo: guarda il rapporto')).toBeInTheDocument()
    expect(screen.getByText('Prova un’altra via')).toBeInTheDocument()
    expect(screen.getByText('Esempio concreto')).toBeInTheDocument()
  })

  it('cambia formato nello stesso punto con Mi sto annoiando', async () => {
    renderLesson()
    const button = screen.getByRole('button', { name: 'Mi sto annoiando' })
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Le relazioni, non il riassunto')).toBeInTheDocument()
    expect(screen.getByText('Lo schema mostra il passaggio logico; non ripete il paragrafo.')).toBeInTheDocument()
  })
})
