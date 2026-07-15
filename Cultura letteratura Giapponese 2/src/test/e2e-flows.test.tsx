import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '../App'
import { StudyProvider } from '../state/StudyContext'

function renderApp(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <StudyProvider>
        <App />
      </StudyProvider>
    </MemoryRouter>,
  )
}

describe('flussi principali end-to-end locali', () => {
  beforeEach(() => localStorage.clear())

  it('porta da una difficoltà alla spiegazione alternativa e al termine', async () => {
    renderApp('/lezione/pink-noir-iyamisu')
    await userEvent.click(screen.getByRole('button', { name: 'Non ancora' }))
    expect(screen.getByText('Ripartiamo senza parole difficili')).toBeInTheDocument()
    expect(screen.getByText('Esempio concreto')).toBeInTheDocument()
    const recovery = screen.getByText('Ripartiamo senza parole difficili').closest('aside')!
    await userEvent.click(within(recovery).getByRole('button', { name: 'Apri l’analogia ↑' }))
    expect(screen.getByText('Un’immagine per capirlo')).toBeInTheDocument()
    await userEvent.click(within(recovery).getByRole('button', { name: 'Pink noir' }))
    expect(within(recovery).getByRole('tooltip')).toHaveTextContent('Noir scritto da donne')
  })

  it('entra ed esce dal Focus mode senza intrappolare la navigazione', async () => {
    renderApp('/lezione/pink-noir-iyamisu')
    expect(screen.getByRole('navigation', { name: 'Navigazione principale' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Focus mode' }))
    expect(screen.queryByRole('navigation', { name: 'Navigazione principale' })).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Esci da focus' }))
    expect(screen.getByRole('navigation', { name: 'Navigazione principale' })).toBeInTheDocument()
  })

  it('cerca nell’Atlante con un campo nominato e apre una scheda', async () => {
    renderApp('/atlante')
    const search = screen.getByRole('textbox', { name: 'Cerca nell’Atlante' })
    await userEvent.type(search, 'Kirino Natsuo')
    await userEvent.click(screen.getByRole('button', { name: /Kirino Natsuo/ }))
    expect(screen.getByRole('dialog', { name: 'Scheda Kirino Natsuo' })).toBeInTheDocument()
    expect(screen.getByText('Errore da evitare')).toBeInTheDocument()
  })

  it('espone il progresso complessivo con semantica accessibile', () => {
    renderApp('/percorso')
    expect(screen.getByRole('progressbar', { name: 'Avanzamento dell’intero programma' })).toHaveAttribute('aria-valuemax', '100')
    expect(screen.getByText('12 blocchi disponibili')).toBeInTheDocument()
  })
})
