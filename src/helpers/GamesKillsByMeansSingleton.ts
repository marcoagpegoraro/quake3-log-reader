import { MeansOfDeath } from "../enum/MeansOfDeath";
import { TempGameKilledByMeans } from "../types/TempGameKillsByMeans";

export default class GamesKillsByMeansSingleton {

    private static instance: GamesKillsByMeansSingleton;

    games:  TempGameKilledByMeans[]
    tempGame: TempGameKilledByMeans
    isGameActive: boolean 

    constructor() {
        this.resetGames()
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GamesKillsByMeansSingleton()
        }
        return this.instance;
    }

    resetTempGame(){
        this.tempGame = {
            kills_by_means: new Map<MeansOfDeath, number>,
        }
    } 
   
    addDeathCause(deathCause){
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
        this.isGameActive = false
        this.resetTempGame()
    }

    resetGamesKillsByMeans(){
        this.games = []
        this.resetGames()
    }
}
