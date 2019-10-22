import ProductsStore from './products';
import BasketStore from './basket';
import Categories from './categories';
import PagesStore from './pages';
import BannerStore from './banner';

import * as categories from '~/api/categories';
import * as products from '~/api/products';

class RootStore{
    constructor(){
        this.api = {
            categories,
            products,
        };
        this.products = new ProductsStore(this);
        this.basket = new BasketStore(this);
        this.categories = new Categories(this);
        this.pages = new PagesStore(this);
        this.banner = new BannerStore(this);
    }
}

export default new RootStore();