import {observable, computed, action} from 'mobx';

export default class {
    @observable items = getPhonesFromAPI()

    constructor(rootStore) {
        this.rootStore = rootStore;
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
}

// server api

function getPhonesFromAPI() {
    return [
        {
            id: 1,
            name: 'Xiaomi Mi A3 4/64GB Android One',
            price: '10 000 руб',
            img: '/img/products/id1.jpg',
        },
        {
            id: 2,
            name: 'Apple iPhone 8 64GB',
            price: '20 000 руб',
            img: '/img/products/id2.jpg',
        },
        {
            id: 3,
            name: 'Xiaomi Mi A3 4/64GB Android One',
            price: '30 000 руб',
            img: '/img/products/id1.jpg',
        },
        {
            id: 4,
            name: 'Apple iPhone 8 64GB',
            price: '40 000 руб',
            img: '/img/products/id2.jpg',
        },
    ]
}