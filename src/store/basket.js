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

    @action add(id) {
        this.products.push({id, count: 1});
    }

    @action remove(id) {
        let index = this.products.findIndex((product) => product.id === id);

        if(index !== -1) {
            this.products.splice(index, 1);
        }
    }
}