/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/algorithm-diversification',
    validPayload: { 
        narrative: 'A story.', 
        algorithms: [{ id: 'dp' }] 
    },
    requiredFields: ['narrative', 'algorithms'],
    missingFieldError: 'Narrative and at least one algorithm are required',
    successPayload: { proposals: [{ coreAlgorithm: 'DP' }] },
    errorPrefix: 'Algorithm diversification',
}); 