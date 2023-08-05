
// import createReadStream from './services/createReadStream';
import processLine from './services/processLine'
import endLine from './services/endLine'
import processFile from './services/createReadStream';
import GamesSingleton from './helpers/GamesSingleton';

export default async function main(fileName){    
    const processedFile = await processFile(fileName)

    GamesSingleton.getInstance().resetGames()

    return processedFile
}