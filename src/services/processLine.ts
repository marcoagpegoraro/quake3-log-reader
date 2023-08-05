import GamesSingleton from "../helpers/GamesSingleton";
import returnKillerPlayerAndKilledPlayer from "./returnKillerPlayerAndKilledPlayer";

export default function processLine(line) {

  let gamesSingleton = GamesSingleton.getInstance();

  switch (true) {
    case line.indexOf("InitGame") != -1 && gamesSingleton.isGameActive:
    case line.indexOf("ShutdownGame") != -1:
      gamesSingleton.isGameActive = false
      gamesSingleton.addTempGame()
      break;

    case line.indexOf("InitGame") != -1:
      gamesSingleton.isGameActive = true
      break;

    case line.indexOf("killed") != -1:
      const [killerPlayer, killedPlayer] = returnKillerPlayerAndKilledPlayer(line);

      gamesSingleton.tempGame.players.add(killedPlayer)

      if (killerPlayer == "<world>") {
        gamesSingleton.increaseTotalKillCount()
        gamesSingleton.removePlayerKillCountByOne(killedPlayer)
        break
      }

      gamesSingleton.tempGame.players.add(killerPlayer)
      gamesSingleton.addPlayerKillCountByOne(killerPlayer)
      break
  }
}