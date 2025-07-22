/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/solution-formation',
    validPayload: {
        fullProblem: {
            title: 'string',
            description: 'string',
            constraints: 'string',
            inputFormat: 'string',
            outputFormat: 'string',
            subtasks: [],
            exampleTestcases: [],
            notes: 'string',
        },
        technicalOutline: 'string',
    },
    requiredFields: ['fullProblem', 'technicalOutline'],
    missingFieldError: 'Full problem and technical outline are required',
    successPayload: { cpp_code: 'string' },
    errorPrefix: 'Solution formation',
}); 