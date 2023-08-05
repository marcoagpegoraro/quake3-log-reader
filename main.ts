
import createReadStream from './src/utils/createReadStream';
import processLine from './src/utils/processLine'
import endLine from './src/utils/endLine'

function main(fileName){    
    const rl = createReadStream(fileName)

    rl.on('line', (line) => processLine(line));
    rl.on('close', () => endLine());

}

main("./resources/qgames.log")