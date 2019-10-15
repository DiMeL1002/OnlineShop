import ProductsStore from './products';
import BasketStore from './basket';
import Categories from './categories';
import PagesStore from './pages';

import * as categories from '~/api/categories';

class RootStore{
    constructor(){
        this.api = {
            categories
        };
        this.products = new ProductsStore(this);
        this.basket = new BasketStore(this);
        this.categories = new Categories(this);
        this.pages = new PagesStore(this);
    }
}

export default new RootStore();