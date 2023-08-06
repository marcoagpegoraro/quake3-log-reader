import { MeansOfDeath } from "../enum/MeansOfDeath"

export type GameDeathCause = {
    [key: string]: GameDeathCauseContent
}

export type GameDeathCauseContent = {
    kills_by_means?: killsByMeans
}

export type killsByMeans = {
    [key in MeansOfDeath]?: number
}


export namespace GameDeathCause {
    export function createNewGame(gameName: string): GameDeathCause {

        let game: GameDeathCause = {}
        game[gameName] = {
            kills_by_means: {}
        }

        return game
    }
}
