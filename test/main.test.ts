import { describe, expect, test } from '@jest/globals';
import main from '../src/main';
import { Game } from '../src/types/Game';

describe('Process log file', () => {
  test('Process a log file with only one game', async () => {
    const games: Game[] = await main("./test/resources/qgames_test_one_game.log") as Game[]
    console.log(JSON.stringify(games))
    const firstGame = games[0]

    //I slightly changed the log file to contain only one game and this game, i put the line
    //67 to test if the number of kills of the player Assasinu Credi would decrease because
    //after in the game, he will be killed by the <world>

    //To check if the test is expecting correct values, please open de qgames_test.log and 
    //press ctrl + F, for example, searching the world "killed" gives the total kill count of the game

    //Check total kills (including <world> kills)
    expect(firstGame.total_kills).toBe(21);

    //Check players array
    expect(firstGame.players).toContain("Isgalamido");
    expect(firstGame.players).toContain("Assasinu Credi");
    expect(firstGame.players).toContain("Oootsimo");
    expect(firstGame.players).toContain("Chessus");
    expect(firstGame.players).toContain("Zeh");
    expect(firstGame.players).toContain("Mal");

    //Check kills of each player, when <world> kill player, the number is decreased by one 
    //In the case of the player "Isgalamido", if you search "Isgalamido killed", you will see
    //that Isgalamido killed 7 players, but if you search "<world> killed Isgalamido", you will
    //see that world killed Isgalamido 2 times, but the number of kills is still 7 because <world>
    //killed Isgalamido before Isgalamido killed other player, and the number of kills cannot be negative
    expect(firstGame.kills?.Isgalamido).toBe(7);

    //In the case of the player "Assasinu Credi", if you search "Assasinu Credi killed", you will see
    //that Assasinu Credi killed 1 player, but if you search "<world> killed Isgalamido", you will
    //see that world killed Isgalamido 3 times after Assasinu Credi got his first kill, 
    //thats why the number of kills is 0
    expect(firstGame.kills?.['Assasinu Credi']).toBe(0);
  });

  test('Process a log file with three games', async () => {
    const games: Game[] = await main("./test/resources/qgames_test_three_games.log") as Game[]
    console.log(JSON.stringify(games))

    //In this log file, i only included the first three games of the original file
    //I dont know if it was intended, but in the line 97 of the original log, there is
    //no "ShutdownGame", (https://gist.github.com/cloudwalk-tests/be1b636e58abff14088c8b5309f575d8)
    //so in my code, i end a game using two conditions, one if there is a "ShutdownGame" log, and 
    //another if a log "InitGame" apears while im collecting data for a game
    expect(games.length).toBe(3);
  });
});