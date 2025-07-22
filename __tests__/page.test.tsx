import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /AlgoForge AI/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it('renders the main "Start Creating" button', () => {
        render(<Home />)

        const startButton = screen.getByRole('button', {
            name: /Start Creating/i,
        })

        expect(startButton).toBeInTheDocument()
    })
})