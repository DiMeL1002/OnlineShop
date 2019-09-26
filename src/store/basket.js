import {observable, computed, action} from 'mobx';

export default class {
    @observable products = []

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @computed get productsDetailed() {
        return this.products.map((item) => {
            let product = this.rootStore.phones.getById(item.id);

            return {...product, count: item.count}
        })
    }

    @computed get totalPrice() {
        let totalPrice = this.productsDetailed.reduce((total, product) => {
            let price = product.price.replace(/[^+\d]/g, '');

            return total + price * product.count;
        }, 0)

        totalPrice = String(totalPrice).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

        return (`${totalPrice} руб.`);
    }

    @computed get isProductInBasket() {
        return (id) => this.products.some((product) => product.id === id);
    }

    @action addProduct(id) {
        let index = this.findIndex(id);

        if (index === -1) {
            this.products.push({id, count: 1});
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