/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/problem-formalization',
    validPayload: { 
        narrative: 'A story', 
        problem: { title: 'Test' }, 
        vibe: { voice_summary: 'epic' } 
    },
    requiredFields: ['narrative', 'problem', 'vibe'],
    missingFieldError: 'Narrative, problem, and vibe are required',
    successPayload: { problemTitle: 'Test Problem' },
    errorPrefix: 'Problem formalization',
}); 