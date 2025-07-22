/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/test-generator',
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
    },
    requiredFields: ['fullProblem'],
    missingFieldError: 'Full problem is required',
    successPayload: { python_code: 'string' },
    errorPrefix: 'Test generator',
}); 