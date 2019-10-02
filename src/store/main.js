import ProductsStore from './products';
import BasketStore from './basket';

class RootStore{
    constructor(){
        this.products = new ProductsStore(this);
        this.basket = new BasketStore(this);
    }
}

export default new RootStore();