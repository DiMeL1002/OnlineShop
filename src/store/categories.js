import { observable, computed, action } from 'mobx';

export default class {
    @observable items = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.categories;
    }

    @computed get itemsMap() {
        let map = {};

        this.items.forEach((item) => {
            map[item.type] = item.name;
        });
        
        return map;
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.api.all().then((data) => {
                this.items = data;
                resolve(true);
            })
        })
    }
}