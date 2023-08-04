
import createReadStream from './src/utils/createReadStream';

function main(fileName){    
    const rl = createReadStream(fileName)

    let arrayOfGames = []

    rl.on('line', (line) => {
        console.log(`Line: ${line}`);
    });
    
    rl.on('close', () => {
        console.log('Finished reading the file.');
    });

}

main("./resources/qgames.log")