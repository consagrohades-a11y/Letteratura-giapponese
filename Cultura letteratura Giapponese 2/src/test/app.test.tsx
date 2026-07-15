import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { StudyProvider } from '../state/StudyContext'

describe('Kokoro Study', () => {
  it('offre subito un prossimo passo studiabile', () => {
    render(<MemoryRouter><StudyProvider><App /></StudyProvider></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /costruiamo una risposta/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /continua/i })).toHaveAttribute('href', '/lezione/letteratura-mimesis')
  })

  it('permette di tornare a Oggi dalla pagina Percorso', () => {
    render(<MemoryRouter initialEntries={['/percorso']}><StudyProvider><App /></StudyProvider></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Torna alla pagina Oggi' })).toHaveAttribute('href', '/')
  })
})
