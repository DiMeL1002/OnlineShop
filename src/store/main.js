import ProductsStore from './products';
import BasketStore from './basket';
import CatalogItemsStore from './catalogItems';
import PagesStore from './pages';

class RootStore{
    constructor(){
        this.products = new ProductsStore(this);
        this.basket = new BasketStore(this);
        this.catalogItems = new CatalogItemsStore(this);
        this.pages = new PagesStore(this);
    }
}

export default new RootStore();