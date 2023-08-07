import { Game, GameReport } from "../types/Game";

export function mapGameIntoGameReport(game: Game, gameName:string): GameReport{
    let gameReport = {}
    gameReport[gameName] = {
        total_kills: game[gameName].total_kills,
        players: Array.from(game[gameName].players.values()),
        kills: Object.fromEntries(
            Object.entries(game[gameName].kills).sort(([,a],[,b]) => a-b).reverse()
        )
    }



    return gameReport
}