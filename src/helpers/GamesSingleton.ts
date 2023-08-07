import { mapGameIntoGameReport } from "../mappers/mapGameIntoGameReport";
import { Game, GameReport, KillsContent } from "../types/Game";
import GlobalsSingleton from "./GlobalsSingleton";
import { IGamesSingleton } from "./IGamesSingleton";

export default class GamesSingleton implements IGamesSingleton{

    private static instance: GamesSingleton;

    games: GameReport[]
    tempGame: Game

    constructor() {
        this.resetGames()
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GamesSingleton()
        }
        return this.instance;
    }

    resetTempGame(){
        this.tempGame = Game.createNewGame(this.getCurrentGameName())
    }
   
    addPlayerKillCountByOne(playerName){
        const currentGame = this.getCurrentGame()

        if(currentGame == undefined){
            const gameName = this.getCurrentGameName()
            this.tempGame = Game.createNewGame(gameName)
        }

        if(currentGame.kills[playerName] == undefined){
            currentGame.kills[playerName] = 0
        }

        this.increaseTotalKillCount()
        currentGame.kills[playerName] = currentGame.kills[playerName] + 1
    }


    removePlayerKillCountByOne(playerName){
        let currentGame = this.getCurrentGame()

        if(currentGame.kills[playerName] == undefined){
            currentGame.kills[playerName] = 0
        }

        currentGame = this.getCurrentGame()

        const totalKillsOfPlater = currentGame.kills[playerName]

        if(totalKillsOfPlater == 0)
            return

            currentGame.kills[playerName] = totalKillsOfPlater - 1
    }

    increaseTotalKillCount(){
        this.tempGame[this.getCurrentGameName()].total_kills++
    }

    addTempGame() { 
        this.games.push(mapGameIntoGameReport(this.tempGame, this.getCurrentGameName()))
    }

    resetGames(){
        this.games = []
        this.resetTempGame()
    }

    getGamesReport(){
        return this.games
    }

    getCurrentGameName(){
        const currentGameNumber = GlobalsSingleton.getInstance().getCurrentGameNumber()
        return `game_${currentGameNumber}`
    }

    getCurrentGame(){
        const currentGameName = this.getCurrentGameName()
        return this.tempGame[currentGameName]
    }
}
