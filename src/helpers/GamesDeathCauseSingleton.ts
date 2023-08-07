import { MeansOfDeath } from "../enum/MeansOfDeath";
import { GameDeathCause } from "../types/GameDeathCause";
import GlobalsSingleton from "./GlobalsSingleton";
import { IGamesSingleton } from "./IGamesSingleton";

export default class GamesDeathCauseSingleton implements IGamesSingleton {

    private static instance: GamesDeathCauseSingleton;

    games:  GameDeathCause[]
    tempGame: GameDeathCause

    constructor() {
        this.resetGames()
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GamesDeathCauseSingleton()
        }
        return this.instance;
    }

    resetTempGame(){
        this.tempGame = GameDeathCause.createNewGame(this.getCurrentGameName())
    } 
   
    increaseDeathCauseCount(deathCause){
        let currentGame = this.getCurrentGame()

        if(currentGame == undefined){
            const gameName = this.getCurrentGameName()
            this.tempGame = GameDeathCause.createNewGame(gameName)
        }
        currentGame = this.getCurrentGame()

        if(currentGame.kills_by_means[deathCause] == undefined){
            currentGame.kills_by_means[deathCause] = 0
        }

        currentGame.kills_by_means[deathCause] = currentGame.kills_by_means[deathCause] + 1
    }

    addTempGame() { 
        this.games.push(this.tempGame)
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
        return `game-${currentGameNumber}`
    }

    getCurrentGame(){
        const currentGameName = this.getCurrentGameName()
        return this.tempGame[currentGameName]
    }

}
