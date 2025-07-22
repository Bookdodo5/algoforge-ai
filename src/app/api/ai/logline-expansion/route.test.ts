/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/logline-expansion',
    validPayload: { 
        theme: 'test theme', 
        vibe: { voice_summary: 'test' } 
    },
    requiredFields: ['theme', 'vibe'],
    missingFieldError: 'Theme and vibe are required',
    successPayload: { loglines: [{ protagonist: 'A wizard' }] },
    errorPrefix: 'Logline expansion',
}); 