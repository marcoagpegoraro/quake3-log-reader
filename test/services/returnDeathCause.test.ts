import { describe, expect, test } from '@jest/globals';
import returnDeathCause from '../../src/services/returnDeathCause';


describe('Returns the death cause of line', () => {
  test('Shoud obtain the death cause', async () => {
    const deathCause = returnDeathCause(
      "  2:22 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN"
    );

    expect(deathCause).toBe("MOD_RAILGUN");
  });
});