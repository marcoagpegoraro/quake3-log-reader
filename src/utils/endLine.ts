import GamesSingleton from "../GamesSingleton";

export default function endLine(){
    let gamesSingleton = GamesSingleton.getInstance()
    
    return console.log(JSON.stringify(gamesSingleton.games))
}