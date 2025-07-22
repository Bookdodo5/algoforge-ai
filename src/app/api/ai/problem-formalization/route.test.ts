/** @jest-environment node */

import { POST } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: POST,
    method: 'POST',
    endpoint: '/api/ai/problem-formalization',
    validPayload: { 
        narrative: 'string', 
        problem: {
            coreAlgorithm: 'string',
            coreConcept: 'string',
            detailedDescription: 'string',
            narrativeJustification: 'string',
            originalityNotes: 'string',
            difficulty: 'Straightforward',
        }, 
        vibe: {
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
        }
    },
    requiredFields: ['narrative', 'problem', 'vibe'],
    missingFieldError: 'Narrative, problem, and vibe are required',
    successPayload: {
        problemTitle: 'string',
        problemStatement: 'string',
        constraints: 'string',
        inputFormat: 'string',
        outputFormat: 'string',
        subtasks: [],
        exampleTestcases: [],
        notes: 'string',
    },
    errorPrefix: 'Problem formalization',
}); 