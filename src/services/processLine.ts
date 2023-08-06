import GamesDeathCauseSingleton from "../helpers/GamesDeathCauseSingleton";
import GamesSingleton from "../helpers/GamesSingleton";
import GlobalsSingleton from "../helpers/GlobalsSingleton";
import returnDeathCause from "./returnDeathCause";
import returnKillerPlayerAndKilledPlayer from "./returnKillerPlayerAndKilledPlayer";

export default function processLine(line) {

  let globalsSingleton = GlobalsSingleton.getInstance();
  let gamesSingleton = GamesSingleton.getInstance();
  let gamesDeathCauseSingleton = GamesDeathCauseSingleton.getInstance();

  switch (true) {
    case line.indexOf("InitGame") != -1 && globalsSingleton.isGameActive:
    case line.indexOf("ShutdownGame") != -1:
      gamesSingleton.addTempGame()
      gamesDeathCauseSingleton.addTempGame()
      globalsSingleton.isGameActive = false
      globalsSingleton.currentGameNumber++
      gamesSingleton.resetTempGame()
      gamesDeathCauseSingleton.resetTempGame()

      break;

    case line.indexOf("InitGame") != -1:
      globalsSingleton.isGameActive = true
      break;

    case line.indexOf("killed") != -1:
      const deathCause = returnDeathCause(line);
      gamesDeathCauseSingleton.increaseDeathCauseCount(deathCause)

      const [killerPlayer, killedPlayer] = returnKillerPlayerAndKilledPlayer(line);

      gamesSingleton.getCurrentGame().players.add(killedPlayer)

      if (killerPlayer == "<world>") {
        gamesSingleton.increaseTotalKillCount()
        gamesSingleton.removePlayerKillCountByOne(killedPlayer)
        break
      }

      gamesSingleton.getCurrentGame().players.add(killerPlayer)
      gamesSingleton.addPlayerKillCountByOne(killerPlayer)
      break
  }
}