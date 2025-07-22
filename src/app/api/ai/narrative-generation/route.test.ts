/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/narrative-generation',
    validPayload: { 
        logline: { protagonist: 'A hero' }, 
        vibe: { voice_summary: 'epic' } 
    },
    requiredFields: ['logline', 'vibe'],
    missingFieldError: 'Logline and vibe are required',
    successPayload: { narrative: 'Once upon a time...' },
    errorPrefix: 'Narrative generation',
}); 