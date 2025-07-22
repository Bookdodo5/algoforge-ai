/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/algorithm-suggestion',
    validPayload: { narrative: 'string' },
    requiredFields: ['narrative'],
    missingFieldError: 'Narrative is required',
    successPayload: {
        suggestions: [
            {
                id: 'string',
                narrativeJustification: 'string',
            },
        ],
    },
    errorPrefix: 'Algorithm suggestion',
}); 