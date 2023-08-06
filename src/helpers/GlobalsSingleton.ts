
export default class GlobalsSingleton {

    private static instance: GlobalsSingleton;

    isGameActive: boolean 
    currentGameNumber: number

    constructor() {
        this.reset()
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GlobalsSingleton()
        }
        return this.instance;
    }

    setIsGameActive(isGameActive){
        this.isGameActive = isGameActive
    }

    increaseCurrentGameNumber(){
        this.currentGameNumber++
    }

    getCurrentGameNumber(){
        return this.currentGameNumber
    }

    reset(){
        this.isGameActive=false;
        this.currentGameNumber=1;
    }

}
