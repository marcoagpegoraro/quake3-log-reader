import * as fs from 'fs'
import * as readline from 'readline';
import processLine from './processLine';
import GamesSingleton from '../helpers/GamesSingleton';
import GamesDeathCauseSingleton from '../helpers/GamesDeathCauseSingleton';

function streamAsPromise(rl) {
    let gamesSingleton = GamesSingleton.getInstance()
    let gamesDeathCauseSingleton = GamesDeathCauseSingleton.getInstance();

    return new Promise((resolve, reject) => {
        rl.on('line', (line) => processLine(line));
        rl.on("close", () => resolve([
            gamesSingleton.getGamesReport(), 
            gamesDeathCauseSingleton.getGamesReport()
        ]));
        rl.on("error", error => reject(error));
    });
}

export async function processFile(fileName) {
    const fileStream = fs.createReadStream(fileName);
    
    return streamAsPromise(readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    }))
}