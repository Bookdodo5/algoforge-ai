jest.mock('next-auth', () => ({
    getServerSession: jest.fn(() =>
        Promise.resolve({
            user: { id: '1', email: 'test@example.com' }
        })
    )
}));

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(() => ({
        data: { user: { id: '1', email: 'test@example.com' } },
        status: 'authenticated'
    })),
    SessionProvider: ({ children }: { children: React.ReactNode }) => children,
    signIn: jest.fn(),
    signOut: jest.fn(),
}));