import {observable, computed, action} from 'mobx';

export default class {
    @observable items = [];
    @observable item = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
    }

    @computed get productMap() {
        let map = {};

        this.items.forEach((product, i) => {
            map[product.id.toString()] = i;
        });

        return map;
    }

    getById(id) {
        let index = this.productMap[id];

        if (index === undefined) {
            return null;
        }

        return this.items[index];
    }

    @action loadProduct(id) {
        return new Promise((resolve, reject) => {
            this.api.product(id).then((data) => {
                this.item = data;
                resolve(true)
            })
        })
    }

    @action load(type) {
        return new Promise((resolve, reject) => {
            this.api.type(type).then((data) => {
                this.items = data;
                resolve(true);
            })
        })
    }
}