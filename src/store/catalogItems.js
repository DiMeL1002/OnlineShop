export default class {
    items = [
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
}