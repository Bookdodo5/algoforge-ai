/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/vibe-extraction',
    validPayload: { sample: 'some text' },
    requiredFields: ['sample'],
    missingFieldError: 'Sample text is required',
    successPayload: { voice_summary: 'witty' },
    errorPrefix: 'Vibe extraction',
}); 