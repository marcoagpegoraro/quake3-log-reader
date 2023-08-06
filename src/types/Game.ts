export type Game = {
    [key: string]: GameContent
}

export type GameContent = {
    total_kills?: number
    players?: Set<string>
    kills?: KillsContent
}


export type KillsContent = {
    [key: string]: number
}

export namespace Game {
    export function createNewGame(gameName: string): Game {
        let kills: KillsContent = {}

        let game = {}
        game[gameName] = {
            total_kills: 0,
            players: new Set<string>,
            kills: kills,
        }

        return game
    }
}

export type GameReport = {
    [key: string]: GameReportContent
}


export type GameReportContent = {
    total_kills?: number
    players?: string[]
    kills?: KillsReportContent
}

export type KillsReportContent = {
    [key: string]: number
}