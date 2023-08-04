import { Game } from "./types/Game";

export default class GamesSingleton {

    games: Game[]  = [];
    tempGame: Game  = {};

    private instance: GamesSingleton;

    constructor() {
        if (!this.instance) {
            this.instance = new GamesSingleton();
        }
    }

    getInstance() {
        return this.instance;
    }

    getGames() { 
        return this.games 
    }

    getTempGame() { 
        return this.tempGame 
    }

    setTempGame(tempGame) { 
        return this.tempGame = tempGame 
    }
   
    addTempGame() { 
        this.games.push(this.tempGame)
        this.tempGame = {} 
    }

    
}