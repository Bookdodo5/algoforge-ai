/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/vibe-extraction',
    validPayload: { sample: 'string' },
    requiredFields: ['sample'],
    missingFieldError: 'Sample text is required',
    successPayload: {
        voice_summary: 'string',
        vibe_keywords: ['string'],
        stylistic_tags: ['string'],
        formality: 'Standard',
        pacing: 'Steady',
        complexity: 'Standard',
        humor_style: ['None'],
        aesthetic: 'string',
        sample_text: 'string',
        language: 'string',
    },
    errorPrefix: 'Vibe extraction',
}); 