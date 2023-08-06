import { MeansOfDeath } from "../enum/MeansOfDeath";
import { GameDeathCause } from "../types/GameDeathCause";
import { orderMapByValue } from "../utils/orderMapByValue";

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
        const meanOfDeath = MeansOfDeath.parse(deathCause)

        if(this.tempGame.kills_by_means.get(meanOfDeath) == undefined){
            this.tempGame.kills_by_means.set(meanOfDeath, 0)
        }

        this.tempGame.kills_by_means.set(meanOfDeath, this.tempGame.kills_by_means.get(meanOfDeath) + 1)
    }

    addTempGame() { 
        this.tempGame.kills_by_means = orderMapByValue(this.tempGame.kills_by_means) as Map<MeansOfDeath, number>
        this.games.push(this.tempGame)
        this.resetTempGame()
    }

    resetGames(){
        this.games = []
        this.resetTempGame()
    }

    getGames(){
        return {
            kills_by_means: this.games
                .map(game => game.kills_by_means)
                .map(game => Object.fromEntries(game))
        }
    }

}
