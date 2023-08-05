import GamesSingleton from "../helpers/GamesSingleton";

export default function endLine(){
    let gamesSingleton = GamesSingleton.getInstance()
    
    return console.log(JSON.stringify(gamesSingleton.games))
}