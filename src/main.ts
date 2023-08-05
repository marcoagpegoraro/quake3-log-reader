
// import createReadStream from './services/createReadStream';
import processLine from './services/processLine'
import endLine from './services/endLine'
import processFile from './services/createReadStream';
import GamesSingleton from './helpers/GamesSingleton';
import GamesDeathCauseSingleton from './helpers/GamesDeathCauseSingleton';

export default async function main(fileName){    
    const processedFile = await processFile(fileName)

    GamesSingleton.getInstance().resetGames()
    GamesDeathCauseSingleton.getInstance().resetGames()

    return processedFile
}