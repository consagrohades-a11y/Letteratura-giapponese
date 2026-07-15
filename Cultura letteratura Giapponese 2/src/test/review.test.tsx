import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ReviewPage } from '../pages/ReviewPage'
import { StudyProvider } from '../state/StudyContext'

describe('review engine adattivo', () => {
  it('offre cinque modalità e una coverage a nove abilità', async () => {
    render(<MemoryRouter><StudyProvider><ReviewPage /></StudyProvider></MemoryRouter>)
    expect(screen.getByRole('navigation', { name: 'Modalità ripasso' }).querySelectorAll('button')).toHaveLength(5)
    await userEvent.click(screen.getByRole('button', { name: /Copertura/ }))
    expect(screen.getByText('definire')).toBeInTheDocument()
    expect(screen.getByText('orale')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('offre un singolo prossimo passo nella modalità non so nulla', async () => {
    render(<MemoryRouter><StudyProvider><ReviewPage /></StudyProvider></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /Non so nulla/ }))
    expect(screen.getByRole('link', { name: /Primo passo/ })).toHaveAttribute('href', '/lezione/meiji-stato')
  })
})
