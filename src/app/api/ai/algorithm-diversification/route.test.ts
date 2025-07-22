/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/algorithm-diversification',
    validPayload: {
        narrative: 'string',
        algorithms: [
            {
                id: 'string',
                level: 'string',
                category: 'string',
                name: 'string',
                description: 'string',
            },
        ],
    },
    requiredFields: ['narrative', 'algorithms'],
    missingFieldError: 'Narrative and at least one algorithm are required',
    successPayload: {
        proposals: [
            {
                coreAlgorithm: 'string',
                coreConcept: 'string',
                detailedDescription: 'string',
                narrativeJustification: 'string',
                originalityNotes: 'string',
                difficulty: 'Straightforward',
            },
        ],
    },
    errorPrefix: 'Algorithm diversification',
}); 