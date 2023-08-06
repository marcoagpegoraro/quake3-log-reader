
// import createReadStream from './services/createReadStream';
import { processFile }  from './services/createReadStream';
import GamesSingleton from './helpers/GamesSingleton';
import GamesDeathCauseSingleton from './helpers/GamesDeathCauseSingleton';
import { Game } from './types/Game';
import { GameDeathCause } from './types/GameDeathCause';

export default async function main(fileName){    
    const [reportPlayerRank, reportDeathCause] = await processFile(fileName) as [Game[], GameDeathCause[]]

    GamesSingleton.getInstance().resetGames()
    GamesDeathCauseSingleton.getInstance().resetGames()

    console.log("---------- Report for each match and player ranking ----------")
    console.log(reportPlayerRank)
    console.log("---------- End report for each match and player ranking ----------")
    console.log("---------- Report for each match death cause ----------")
    console.log(reportDeathCause)
    console.log("---------- End report for each match death cause ----------")

    return [reportPlayerRank, reportDeathCause]
}