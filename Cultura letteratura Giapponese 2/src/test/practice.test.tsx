import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { PracticePage } from '../pages/PracticePage'
import { StudyProvider } from '../state/StudyContext'

describe('palestra zero attrito', () => {
  it('offre undici formati e feedback immediato senza scrittura', async () => {
    render(<MemoryRouter><StudyProvider><PracticePage /></StudyProvider></MemoryRouter>)
    expect(screen.getByRole('navigation', { name: 'Modalità esercizi' }).querySelectorAll('button')).toHaveLength(11)
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quali blocchi vuoi allenare?' })).toBeInTheDocument()
    expect(screen.getByText(/domande disponibili/)).toBeInTheDocument()
  })

  it('fa costruire una catena causale con i petali senza digitare', async () => {
    render(<MemoryRouter><StudyProvider><PracticePage /></StudyProvider></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /Petali logici/ }))
    await userEvent.click(screen.getByRole('button', { name: 'Evento traumatico' }))
    expect(screen.getByText('Bene. Ora cerca il passaggio 2.')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('apre un lightning round da dieci domande', async () => {
    render(<MemoryRouter><StudyProvider><PracticePage /></StudyProvider></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /Lightning/ }))
    await userEvent.click(screen.getByRole('button', { name: 'Avvia il round →' }))
    expect(screen.getByText('1 / 10')).toBeInTheDocument()
  })

  it('completa il matching anche con l’alternativa da tastiera o touch', async () => {
    render(<MemoryRouter><StudyProvider><PracticePage /></StudyProvider></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /Matching/ }))
    await userEvent.click(screen.getByRole('button', { name: 'ninjō' }))
    expect(screen.getByRole('button', { name: 'ninjō' })).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(screen.getByRole('button', { name: 'Passioni e motivazioni umane' }))
    expect(screen.getByText('Connessione corretta: ninjō.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ninjō' })).toBeDisabled()
  })

  it('permette di allenare un solo blocco scelto', async () => {
    render(<MemoryRouter><StudyProvider><PracticePage /></StudyProvider></MemoryRouter>)
    const block = screen.getByText('Romanticismo e naturalismo').closest('article')!
    await userEvent.click(within(block).getByRole('button', { name: 'Solo questo' }))
    expect(screen.getByText('1 blocchi · 15 domande disponibili')).toBeInTheDocument()
    expect(screen.getByText('15 domande dai blocchi scelti')).toBeInTheDocument()
  })
})
