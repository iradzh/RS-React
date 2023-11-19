import { expect, test } from 'vitest';

import { convertCharIDtoUrl } from '../src/util/utilFunctions';

test('returns correct URL from URL', () => {
  expect(convertCharIDtoUrl(5)).toBe('https://swapi.dev/api/people/5');
});
