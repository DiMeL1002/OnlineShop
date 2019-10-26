import ProductsStore from './products';
import BasketStore from './basket';
import Categories from './categories';
import PagesStore from './pages';
import BannerStore from './banner';
import UserStore from './user';

import * as categories from '~/api/categories';
import * as products from '~/api/products';
import * as user from '~/api/user';
import * as basket from '~/api/basket';

class RootStore{
    constructor(){
        this.api = {
            categories,
            products,
            user,
            basket,
        };

        this.products = new ProductsStore(this);
        this.basket = new BasketStore(this);
        this.categories = new Categories(this);
        this.pages = new PagesStore(this);
        this.banner = new BannerStore(this);
        this.user = new UserStore(this);
    }
}

export default new RootStore();