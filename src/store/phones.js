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
            article: '000001',
            name: 'Xiaomi Mi A3 4/64GB Android One',
            price: '11 500 руб',
            img: '/img/products/id1.jpg',
            brand: '/img/brands/xiaomi.jpg',
            rating: 5,
        },
        {
            id: 2,
            article: '000002',
            name: 'Apple iPhone 8 64GB',
            price: '34 780 руб',
            img: '/img/products/id2.jpg',
            brand: '/img/brands/apple.jpg',
            rating: 4,
        },
        {
            id: 3,
            article: '000003',
            name: 'Смартфон Samsung Galaxy A10',
            price: '8 057 руб',
            img: '/img/products/id3.jpg',
            brand: '/img/brands/samsung.jpg',
            rating: 3,
        },
        {
            id: 4,
            article: '000004',
            name: 'Meizu X8 4/64GB',
            price: '13 300 руб',
            img: '/img/products/id4.jpg',
            brand: '/img/brands/meizu.jpg',
            rating: 4,
        },
    ]
}