/** @jest-environment node */

import { GET } from './route';
import { testApiEndpoint } from '@/app/api/apiTestHelper';

jest.mock('@/lib/ai');

testApiEndpoint({
    handler: GET,
    method: 'GET',
    endpoint: '/api/ai/theme-ideation',
    successPayload: { themes: ['string'] },
    errorPrefix: 'Theme ideation',
});