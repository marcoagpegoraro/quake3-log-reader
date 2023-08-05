import * as fs from 'fs'
import * as readline from 'readline';

export default function createReadStream(fileName) {
    const fileStream = fs.createReadStream(fileName);
    
    return readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
}