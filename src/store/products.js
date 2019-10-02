import {observable, computed, action} from 'mobx';

export default class {
    @observable items = [];

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

    @action getProductsFromAPI(type) {
        switch (type) {
            case 'phones':
                this.items = getPhonesFromAPI();
                break;
            case 'tablets':
                this.items = getTabletsFromAPI();
                break;
        }
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

function getTabletsFromAPI() {
    return [
        {
            id: 101,
            article: '000101',
            name: 'Samsung Galaxy Tab A 10.1 SM-T585 16Gb',
            price: '12 850 руб',
            img: '/img/products/id101.jpg',
            brand: '/img/brands/samsung.jpg',
            rating: 5,
        },
        {
            id: 102,
            article: '000102',
            name: 'Xiaomi MiPad 4 64Gb LTE',
            price: '14 312 руб',
            img: '/img/products/id102.jpg',
            brand: '/img/brands/xiaomi.jpg',
            rating: 4,
        },
        {
            id: 103,
            article: '000103',
            name: 'Apple iPad (2018) 32Gb Wi-Fi',
            price: '19 998 руб',
            img: '/img/products/id103.png',
            brand: '/img/brands/apple.jpg',
            rating: 3,
        },
        {
            id: 104,
            article: '000104',
            name: 'Samsung Galaxy Tab A 8.0 SM-T295 32Gb',
            price: '9 560 руб',
            img: '/img/products/id104.jpg',
            brand: '/img/brands/samsung.jpg',
            rating: 4,
        },
    ]
}