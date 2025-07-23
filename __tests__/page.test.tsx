import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import { useSession } from 'next-auth/react'

jest.mock('next-auth/react')
const mockUseSession = useSession as jest.MockedFunction<typeof useSession>

const authenticated = {
    data: {
        user: {
            name: 'Test User',
            email: 'test@example.com',
            image: 'https://example.com/image.png'
        },
        expires: '2025-01-01'
    },
    status: 'authenticated'
}

const unauthenticated = {
    data: null,
    status: 'unauthenticated'
}

describe('Home', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('Basic rendering', () => {
        it('renders the main heading', () => {
            mockUseSession.mockReturnValue(unauthenticated as any)
            render(<Home />)

            const heading = screen.getByRole('heading', {
                name: /AlgoForge AI/i,
            })

            expect(heading).toBeInTheDocument()
        })

        it('renders the "Start Creating" button', () => {
            mockUseSession.mockReturnValue(unauthenticated as any)
            render(<Home />)

            const startButton = screen.getByRole('button', {
                name: /Start Creating/i,
            })

            expect(startButton).toBeInTheDocument()
        })
    })

    describe('When user is not authenticated', () => {
        beforeEach(() => {
            mockUseSession.mockReturnValue(unauthenticated as any)
        })

        it('shows the sign in button', () => {
            render(<Home />)

            const signInButton = screen.getByRole('button', {
                name: /Sign in with Google/i,
            })

            expect(signInButton).toBeInTheDocument()
        })

        it('does not show the sign out button', () => {
            render(<Home />)

            const signOutButton = screen.queryByRole('button', {
                name: /Sign out/i,
            })

            expect(signOutButton).not.toBeInTheDocument()
        })
    })

    describe('When user is authenticated', () => {
        beforeEach(() => {
            mockUseSession.mockReturnValue(authenticated as any)
        })

        it('shows the sign out button', () => {
            render(<Home />)

            const signOutButton = screen.getByRole('button', {
                name: /Sign out/i,
            })

            expect(signOutButton).toBeInTheDocument()
        })

        it('does not show the sign in button', () => {
            render(<Home />)

            const signInButton = screen.queryByRole('button', {
                name: /Sign in with Google/i,
            })

            expect(signInButton).not.toBeInTheDocument()
        })
    })
})