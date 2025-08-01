/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/logline-expansion',
    validPayload: {
        theme: 'string',
        vibe: {
            voice_summary: 'string',
            vibe_keywords: ['string'],
            stylistic_tags: ['string'],
            formality: 'Standard',
            pacing: 'Steady',
            complexity: 'Standard',
            humor_styles: ['None'],
            aesthetic: 'string',
            sample_text: 'string',
            language: 'string',
        }
    },
    requiredFields: ['theme', 'vibe'],
    missingFieldError: 'Theme and vibe are required',
    successPayload: {
        loglines: [
            {
                protagonist: 'string',
                goal: 'string',
                obstacle: 'string',
                stakes: 'string',
                logline_sentence: 'string',
            },
        ],
    },
    errorPrefix: 'Logline expansion',
}); 