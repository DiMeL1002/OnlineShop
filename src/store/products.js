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
            case 'clock':
                this.items = getClockFromAPI();
                break;
            case 'accessories':
                this.items = getAccessoriesFromAPI();
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

function getClockFromAPI() {
    return [
        {
            id: 201,
            article: '000201',
            name: 'Браслет Xiaomi Mi Band 3',
            price: '1 590 руб',
            img: '/img/products/id201.jpg',
            brand: '/img/brands/xiaomi.jpg',
            rating: 5,
        },
        {
            id: 202,
            article: '000202',
            name: 'Браслет Xiaomi Mi Band 4',
            price: '2 280 руб',
            img: '/img/products/id202.jpg',
            brand: '/img/brands/xiaomi.jpg',
            rating: 4,
        },
        {
            id: 203,
            article: '000203',
            name: 'Часы Samsung Galaxy Watch (46 mm)',
            price: '18 290 руб',
            img: '/img/products/id203.jpg',
            brand: '/img/brands/samsung.jpg',
            rating: 3,
        },
        {
            id: 204,
            article: '000204',
            name: 'Часы Apple Watch Series 4 GPS 40mm Aluminum Case with Sport Band',
            price: '29 992 руб',
            img: '/img/products/id204.jpg',
            brand: '/img/brands/apple.jpg',
            rating: 4,
        },
    ]
}

function getAccessoriesFromAPI() {
    return [
        {
            id: 301,
            article: '000301',
            name: 'Переходник Apple USB - USB Type-C (MJ1M2ZM/A)',
            price: '1 790 руб',
            img: '/img/products/id301.jpg',
            brand: '/img/brands/apple.jpg',
            rating: 5,
        },
        {
            id: 302,
            article: '000302',
            name: 'Аккумулятор Xiaomi Mi Power Bank 3 10000',
            price: '1 333 руб',
            img: '/img/products/id302.jpg',
            brand: '/img/brands/xiaomi.jpg',
            rating: 4,
        },
        {
            id: 303,
            article: '000303',
            name: 'Кабель Apple USB - Lightning (MD819ZM/A) 2 м',
            price: '2 290 руб',
            img: '/img/products/id303.jpg',
            brand: '/img/brands/apple.jpg',
            rating: 3,
        },
        {
            id: 304,
            article: '000304',
            name: 'Беспроводная сетевая зарядка Samsung EP-N6100',
            price: '4 706 руб',
            img: '/img/products/id304.jpg',
            brand: '/img/brands/samsung.jpg',
            rating: 4,
        },
    ]
}