import { Game } from "./types/Game";
import { TempGame } from "./types/TempGame";

export default class GamesSingleton {

    private static instance: GamesSingleton;

    games: Game[]
    tempGame: TempGame
    isGameActive: boolean 

    constructor() {
        this.games = []
        this.isGameActive = false
        this.resetTempPlater()
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GamesSingleton()
        }
        return this.instance;
    }

    resetTempPlater(){
        this.tempGame = {
            total_kills: 0,
            players: new Set<string>,
            kills: new Map<string, number>,
        }
    }
   
    setTempGame(tempGame) { 
        return this.tempGame = tempGame 
    }
   
    addKillCount(playerName){
        if(this.tempGame.kills.get(playerName) == undefined){
            this.tempGame.kills.set(playerName, 0)
        }

        this.tempGame.total_kills++
        this.tempGame.kills.set(playerName, this.tempGame.kills.get(playerName) + 1)
    }


    removeKillCount(playerName){
        if(this.tempGame.kills.get(playerName) == undefined){
            this.tempGame.kills.set(playerName, 0)
        }

        const totalKillsOfPlater = this.tempGame.kills.get(playerName)

        if(totalKillsOfPlater == 0)
            return

        this.tempGame.kills.set(playerName, this.tempGame.kills.get(playerName) - 1)
    }

    addTempGame() { 
        const game: Game = {
            total_kills: this.tempGame.total_kills, 
            players: Array.from(this.tempGame.players),
            kills: Object.fromEntries(this.tempGame.kills)
        }
        this.resetTempPlater()
        this.games.push(game)
    }

    
}
