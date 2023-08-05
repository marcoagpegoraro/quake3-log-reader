import { MeansOfDeath } from "../enum/MeansOfDeath";
import { GameDeathCause } from "../types/GameDeathCause";

export default class GamesDeathCauseSingleton {

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
        this.tempGame = {
            kills_by_means: new Map<MeansOfDeath, number>,
        }
    } 
   
    increaseDeathCauseCount(deathCause){
        if(this.tempGame.kills_by_means.get(deathCause) == undefined){
            this.tempGame.kills_by_means.set(deathCause, 0)
        }

        this.tempGame.kills_by_means.set(deathCause, this.tempGame.kills_by_means.get(deathCause) + 1)
    }

    addTempGame() { 
        this.games.push(this.tempGame)
        this.resetTempGame()
    }

    resetGames(){
        this.games = []
        this.resetTempGame()
    }

    resetGamesKillsByMeans(){
        this.games = []
        this.resetGames()
    }
}
