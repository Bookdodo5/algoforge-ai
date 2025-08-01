/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/narrative-generation',
    validPayload: {
        logline: {
            protagonist: 'string',
            goal: 'string',
            obstacle: 'string',
            stakes: 'string',
            logline_sentence: 'string',
        },
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
        },
        priorText: 'string',
    },
    requiredFields: ['logline', 'vibe'],
    missingFieldError: 'Logline and vibe are required',
    successPayload: { narrative: 'string' },
    errorPrefix: 'Narrative generation',
}); 