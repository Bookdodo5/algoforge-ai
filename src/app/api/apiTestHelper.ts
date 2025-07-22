import { generateAiResponse } from '@/lib/ai';

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
    validPayload?: Record<string, any>,
    requiredFields?: string[],
    missingFieldError?: string,
    successPayload: Record<string, any>,
    errorPrefix: string,
}) {
    const mockedGenerateAiResponse = generateAiResponse as jest.Mock;

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
            mockedGenerateAiResponse.mockResolvedValue(successPayload);

            const req = new Request(`http://localhost${endpoint}`, {
                method,
                ...(method === 'POST' && validPayload ? { body: JSON.stringify(validPayload) } : {}),
            });

            const res = await handler(req);

            expect(res.status).toBe(200);
            expect(await res.json()).toEqual(successPayload);
            expect(mockedGenerateAiResponse).toHaveBeenCalledTimes(1);
        });

        // Only test missing fields for POST endpoints with required fields
        if (method === 'POST' && requiredFields && missingFieldError) {
            requiredFields.forEach((field) => {
                it(`should return a 500 error if ${field} is missing`, async () => {
                    const payload = { ...validPayload };
                    delete payload[field];

                    mockedGenerateAiResponse.mockClear();

                    const req = new Request(`http://localhost${endpoint}`, {
                        method,
                        body: JSON.stringify(payload),
                    });

                    const res = await handler(req);

                    expect(res.status).toBe(500);
                    expect(await res.json()).toEqual({ error: missingFieldError });
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
            mockedGenerateAiResponse.mockRejectedValue(mockError);

            const req = new Request(`http://localhost${endpoint}`, {
                method,
                ...(method === 'POST' && validPayload ? { body: JSON.stringify(validPayload) } : {}),
            });

            const res = await handler(req);

            expect(res.status).toBe(500);
            expect(await res.json()).toEqual({ error: 'AI failed' });
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                `${errorPrefix} error:`,
                mockError
            );
        });
    });
}