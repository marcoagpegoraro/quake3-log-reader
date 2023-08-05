import * as fs from 'fs'
import * as readline from 'readline';
import processLine from './processLine';
import GamesSingleton from '../helpers/GamesSingleton';

function streamAsPromise(rl) {
    let gamesSingleton = GamesSingleton.getInstance()

    return new Promise((resolve, reject) => {
        rl.on('line', (line) => processLine(line));
        rl.on("close", () => resolve(gamesSingleton.games));
        rl.on("error", error => reject(error));
    });
}

export default async function processFile(fileName) {
    const fileStream = fs.createReadStream(fileName);
    
    return streamAsPromise(readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    }))
}