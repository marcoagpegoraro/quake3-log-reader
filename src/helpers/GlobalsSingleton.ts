
export default class GlobalsSingleton {

    private static instance: GlobalsSingleton;

    isGameActive: boolean 

    constructor() {
        this.isGameActive=false;
    }

    static getInstance() {
        if(this.instance == undefined){
            this.instance = new GlobalsSingleton()
        }
        return this.instance;
    }

}
