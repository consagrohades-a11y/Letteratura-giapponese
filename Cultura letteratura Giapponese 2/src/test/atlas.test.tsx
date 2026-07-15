import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { LibraryPage } from '../pages/LibraryPage'
import { DiagramBuilder } from '../components/DiagramBuilder'

describe('atlante interattivo', () => {
  it('apre una scheda autore completa', async () => {
    render(<MemoryRouter><LibraryPage /></MemoryRouter>)
    const tsubouchiButtons = screen.getAllByRole('button', { name: /Tsubouchi Shōyō/ })
    expect(tsubouchiButtons).toHaveLength(2)
    await userEvent.click(tsubouchiButtons[0]!)
    expect(screen.getByRole('dialog', { name: 'Scheda Tsubouchi Shōyō' })).toBeInTheDocument()
    expect(screen.getByText('Errore da evitare')).toBeInTheDocument()
  })

  it('permette di riordinare il diagramma senza trascinamento', async () => {
    render(<DiagramBuilder />)
    const before = screen.getAllByText(/Kokugo e scuola|Pressione esterna|Centralizzazione|Crisi del bakufu|Restaurazione Meiji/).map((node) => node.textContent)
    await userEvent.click(screen.getByRole('button', { name: 'Sposta Kokugo e scuola avanti' }))
    const after = screen.getAllByText(/Kokugo e scuola|Pressione esterna|Centralizzazione|Crisi del bakufu|Restaurazione Meiji/).map((node) => node.textContent)
    expect(after).not.toEqual(before)
    await userEvent.click(screen.getByRole('button', { name: 'Sposta Kokugo e scuola indietro' }))
    expect(screen.getAllByText(/Kokugo e scuola|Pressione esterna|Centralizzazione|Crisi del bakufu|Restaurazione Meiji/).map((node) => node.textContent)).toEqual(before)
  })
})
