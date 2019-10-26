import {observable, computed, action} from 'mobx';

class Basket {
    @observable products = []

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.basket;
    }

    @computed get totalPrice() {
        let totalPrice = this.products.reduce((total, product) => {
            return total + product.price * product.count;
        }, 0)

        totalPrice = String(totalPrice).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

        return totalPrice;
    }

    @computed get totalCountProducts() {
        return this.products.length;
    }

    @computed get isProductInBasket() {
        return (id) => this.products.some((product) => product.id === id);
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.api.load().then((data) => {
                this.products = data;
                resolve(true);
            })
        })
    }

    @action addProduct(id) {
        let index = this.findIndex(id);

        if (index === -1) {
            let product = this.rootStore.products.getById(id);

            this.products.push({count: 1, ...product});
        }

        this.refreshBasketOnApi();
    }

    @action changeProductCount(id, count) {
        let index = this.findIndex(id);

        if (index !== -1) {
            this.products[index].count = count;
        }

        this.refreshBasketOnApi();
    }

    @action removeProduct(id) {
        let index = this.findIndex(id);

        if (index !== -1) {
            this.products.splice(index, 1);
        }

       this.refreshBasketOnApi();
    }

    findIndex(id) {
        return this.products.findIndex((product) => product.id === id);
    }

    refreshBasketOnApi() {
        return new Promise((resolve, reject) => {
            this.api.refresh(this.products).then(() => {
                resolve(true);
            })
        })
    }
}

export default Basket;