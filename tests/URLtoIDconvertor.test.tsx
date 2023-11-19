import { expect, test } from 'vitest';

import { convertUrltoCharId } from '../src/util/utilFunctions';

test('returns correct ID from URL', () => {
  expect(convertUrltoCharId('https://swapi.dev/api/people/1/')).toBe('1');
});
