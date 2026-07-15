import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { OralSimulator } from '../components/OralSimulator'
import { StudyProvider } from '../state/StudyContext'

describe('supporti della simulazione orale', () => {
  it('spiega le parole fucsia al tap e rende esplorabile la scaletta', async () => {
    render(<StudyProvider><OralSimulator ids={['o-letteratura']} /></StudyProvider>)

    const keyword = screen.getByRole('button', { name: 'letterarietà' })
    await userEvent.click(keyword)
    expect(keyword).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/riconosciuto e letto come letteratura/)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: /Proprietà testuali/ }))
    expect(screen.getByText('Ora costruisci il passaggio 2')).toBeInTheDocument()
    expect(screen.getByText(/Definisci il concetto/)).toBeInTheDocument()
  })
})
