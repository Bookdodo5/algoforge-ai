import { generateAiResponse } from '@/lib/ai';
import { getServerSession } from 'next-auth';

const act = (endpoint: string,
    method: 'POST' | 'GET',
    payload: Record<string, unknown> | undefined,
    handler: (req: Request) => Promise<Response>
) => {
    const req = new Request(`http://localhost${endpoint}`, {
        method,
        ...(method === 'POST' && payload ? { body: JSON.stringify(payload) } : {}),
    });
    return handler(req);
}

const expectSuccess = async (response: Response, expectedPayload: unknown) => {
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(expectedPayload);
};

const expectError = async (response: Response, status: number, errorMessage: string) => {
    expect(response.status).toBe(status);
    expect(await response.json()).toEqual({ error: errorMessage });
};


export function testApiEndpoint({
    handler,
    method,
    endpoint,
    validPayload,
    requiredFields,
    missingFieldError,
    successPayload,
    errorPrefix,
}: {
    handler: (req: Request) => Promise<Response>,
    method: 'POST' | 'GET',
    endpoint: string,
    validPayload?: Record<string, unknown>,
    requiredFields?: string[],
    missingFieldError?: string,
    successPayload: Record<string, unknown>,
    errorPrefix: string,
}) {
    const mockedGenerateAiResponse = generateAiResponse as jest.Mock;
    const mockedGetServerSession = getServerSession as jest.Mock;

    const authenticatedSession = {
        user: {
            name: 'Test User',
            email: 'test@example.com',
            image: 'https://example.com/image.png'
        },
    }

    const unauthenticatedSession = null;

    describe(`${method} ${endpoint}`, () => {

        let consoleErrorSpy: jest.SpyInstance;
        beforeEach(() => {
            jest.clearAllMocks();
            consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        });
        afterEach(() => {
            consoleErrorSpy.mockRestore();
        });

        it('should return a successful JSON response on valid input', async () => {
            mockedGetServerSession.mockResolvedValue(authenticatedSession);
            mockedGenerateAiResponse.mockResolvedValue(successPayload);

            const res = await act(endpoint, method, validPayload, handler);

            await expectSuccess(res, successPayload);
            expect(mockedGenerateAiResponse).toHaveBeenCalledTimes(1);
        });

        // Only test missing fields for POST endpoints with required fields
        if (method === 'POST' && requiredFields && missingFieldError) {
            requiredFields.forEach((field) => {
                it(`should return a 500 error if ${field} is missing`, async () => {
                    const payload = { ...validPayload };
                    delete payload[field];
                    mockedGetServerSession.mockResolvedValue(authenticatedSession);

                    const res = await act(endpoint, method, payload, handler);

                    await expectError(res, 500, missingFieldError);
                    expect(mockedGenerateAiResponse).not.toHaveBeenCalled();
                    expect(consoleErrorSpy).toHaveBeenCalledWith(
                        `${errorPrefix} error:`,
                        expect.any(Error)
                    );
                });
            });
        }

        it('should return a 500 error if AI generation fails', async () => {
            const mockError = new Error('AI failed');
            mockedGetServerSession.mockResolvedValue(authenticatedSession);
            mockedGenerateAiResponse.mockRejectedValue(mockError);

            const res = await act(endpoint, method, validPayload, handler);

            await expectError(res, 500, 'AI failed');
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                `${errorPrefix} error:`,
                mockError
            );
        });

        it('should return a 401 error if the user is not authenticated', async () => {
            mockedGetServerSession.mockResolvedValue(unauthenticatedSession);

            const res = await act(endpoint, method, validPayload, handler);

            await expectError(res, 401, 'Authentication required. Please sign in.');
        });
    });
}