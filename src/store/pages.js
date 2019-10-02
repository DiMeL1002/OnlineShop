import {routesMap} from '~/routes/routes';

export default class {
    items = [
        {
            name: 'О компании',
            routerTo: routesMap.about,
        },
        {
            name: 'Доставка и оплата',
            routerTo: routesMap.delivery,
        },
        {
            name: 'Акции',
            routerTo: routesMap.stocks,
        },
        {
            name: 'Поставщикам',
            routerTo: routesMap.wholesalers,
        },
        {
            name: 'Новости',
            routerTo: routesMap.news,
        },
        {
            name: 'Гарантии',
            routerTo: routesMap.warranties,
        },
        {
            name: 'Контакты',
            routerTo: routesMap.contacts,
        },
    ];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}