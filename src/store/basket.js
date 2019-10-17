import {observable, computed, action} from 'mobx';

export default class {
    @observable products = []

    constructor(rootStore) {
        this.rootStore = rootStore;
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

    @action addProduct(id) {
        let index = this.findIndex(id);

        if (index === -1) {
            let product = this.rootStore.products.getById(id);

            this.products.push({count: 1, ...product});
        }
    }

    @action changeProductCount(id, count) {
        let index = this.findIndex(id);

        if (index !== -1) {
            this.products[index].count = count;
        }
    }

    @action removeProduct(id) {
        let index = this.findIndex(id);

        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    findIndex(id) {
        return this.products.findIndex((product) => product.id === id);
    }
}