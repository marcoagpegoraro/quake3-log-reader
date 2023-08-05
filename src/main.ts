
// import createReadStream from './services/createReadStream';
import processLine from './services/processLine'
import endLine from './services/endLine'
import processFile from './services/createReadStream';

export default async function main(fileName){    
    const file = await processFile(fileName)
    console.log(file)
}