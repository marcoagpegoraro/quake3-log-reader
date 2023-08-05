import { MeansOfDeath } from "../enum/MeansOfDeath";
import { Game } from "../types/Game";
import { GameKillsByMeans } from "../types/GameKillsByMeans";
import { TempGame } from "../types/TempGame";
import { TempGameKilledByMeans } from "../types/TempGameKillsByMeans";

export default class GamesSingleton {

    private static instance: GamesSingleton;

    games: Game[]
    tempGame: TempGame
    isGameActive: boolean 

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
        this.tempGame = {
            total_kills: 0,
            players: new Set<string>,
            kills: new Map<string, number>,
        }
    }
   
    addPlayerKillCountByOne(playerName){
        if(this.tempGame.kills.get(playerName) == undefined){
            this.tempGame.kills.set(playerName, 0)
        }

        this.increaseTotalKillCount()
        this.tempGame.kills.set(playerName, this.tempGame.kills.get(playerName) + 1)
    }


    removePlayerKillCountByOne(playerName){
        if(this.tempGame.kills.get(playerName) == undefined){
            this.tempGame.kills.set(playerName, 0)
        }

        const totalKillsOfPlater = this.tempGame.kills.get(playerName)

        if(totalKillsOfPlater == 0)
            return

        this.tempGame.kills.set(playerName, this.tempGame.kills.get(playerName) - 1)
    }

    increaseTotalKillCount(){
        this.tempGame.total_kills++
    }

    addTempGame() { 
        const game: Game = {
            total_kills: this.tempGame.total_kills, 
            players: Array.from(this.tempGame.players),
            kills: Object.fromEntries(this.tempGame.kills)
        }
        this.resetTempGame()
        this.games.push(game)
    }

    resetGames(){
        this.games = []
        this.isGameActive = false
        this.resetTempGame()
    }

}
