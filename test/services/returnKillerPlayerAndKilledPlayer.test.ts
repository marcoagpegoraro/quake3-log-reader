import { describe, expect, test } from '@jest/globals';
import returnKillerPlayerAndKilledPlayer from '../../src/services/returnKillerPlayerAndKilledPlayer';


describe('Process line of log file', () => {
  test('Shoud return the killer player and the killed player', async () => {
    const [killerPlayer, killedPlayer] = returnKillerPlayerAndKilledPlayer(
      "  2:22 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN"
    );

    expect(killerPlayer).toBe("Isgalamido");
    expect(killedPlayer).toBe("Dono da Bola");
  });
});