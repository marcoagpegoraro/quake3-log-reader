
import createReadStream from './services/createReadStream';
import processLine from './services/processLine'
import endLine from './services/endLine'

function main(fileName){    
    const rl = createReadStream(fileName)

    rl.on('line', (line) => processLine(line));
    rl.on('close', () => endLine());

}

main("./resources/qgames.log")