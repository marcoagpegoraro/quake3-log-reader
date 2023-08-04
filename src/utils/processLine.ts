import GamesSingleton from "../GamesSingleton";
import identifyTypeOfLine from "./identifyTypeOfLine";

export default function processLine(line){

    let gamesSingleton = new GamesSingleton().getInstance();

    // const typeOfLine = identifyTypeOfLine(line);

    let isGameActive: boolean = false;

    switch (true) {
        case line.indexOf("InitGame") != -1:
            isGameActive = true
            gamesSingleton.setTempGame({})
        break;
        case line.indexOf("ShutdownGame") != -1:
            isGameActive = false
        break;
        default:
        
        
        break;
    }
    
    return console.log(`Line: ${line}`)
}