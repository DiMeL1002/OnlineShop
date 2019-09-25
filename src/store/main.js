import phonesStore from './phones';
import BasketStore from './basket';

class RootStore{
    constructor(){
        this.phones = new phonesStore(this);
        this.basket = new BasketStore(this);
    }
}

export default new RootStore();