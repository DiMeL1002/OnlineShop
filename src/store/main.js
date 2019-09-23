import phonesStore from './phones';

class RootStore{
    constructor(){
        this.phones = new phonesStore(this);
    }    
}

export default new RootStore();