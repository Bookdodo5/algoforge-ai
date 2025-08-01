import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Session } from 'next-auth'

// We need to import the component we want to test.
// Since AuthButton is not exported as default, we need to get it from the module.
// This is a bit of a workaround for testing a non-exported component.
const AuthButton = require('../src/app/page').__get__('AuthButton')

const authenticated: Session = {
    user: {
        id: '123',
        name: 'Test User',
        email: 'test@example.com',
        image: 'https://example.com/image.png'
    },
    expires: '2025-01-01'
}

const unauthenticated: Session | null = null

describe('AuthButton', () => {
    describe('When user is not authenticated', () => {
        it('shows the sign in button', () => {
            render(<AuthButton session={unauthenticated} />)

            const signInButton = screen.getByRole('button', {
                name: /Sign in with Google/i,
            })

            expect(signInButton).toBeInTheDocument()
        })

        it('does not show the sign out button', () => {
            render(<AuthButton session={unauthenticated} />)

            const signOutButton = screen.queryByRole('button', {
                name: /Sign out/i,
            })

            expect(signOutButton).not.toBeInTheDocument()
        })
    })

    describe('When user is authenticated', () => {
        it('shows the sign out button', () => {
            render(<AuthButton session={authenticated} />)

            const signOutButton = screen.getByRole('button', {
                name: /Sign out/i,
            })

            expect(signOutButton).toBeInTheDocument()
        })

        it('does not show the sign in button', () => {
            render(<AuthButton session={authenticated} />)

            const signInButton = screen.queryByRole('button', {
                name: /Sign in with Google/i,
            })

            expect(signInButton).not.toBeInTheDocument()
        })
    })
})