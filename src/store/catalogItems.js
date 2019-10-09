import {observable, computed, } from 'mobx';

export default class {
    @observable items = [
        {
            name: 'Телефоны',
            type: 'phones',
        },
        {
            name: 'Планшеты',
            type: 'tablets',
        },
        {
            name: 'Часы',
            type: 'clock',
        },
        {
            name: 'Аксессуары',
            type: 'accessories',
        },
    ];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @computed get itemsMap() {
        let map = {};

        this.items.forEach((item) => {
            map[item.type] = item.name;
        });
        
        return map;
    }
}