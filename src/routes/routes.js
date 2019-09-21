import About from '~p/about/about'
import Contacts from '~p/contacts/contacts'
import Delivery from '~p/delivery/delivery'
import Page404 from '~p/error404/error404'
import Main from '~p/main/main'
import News from '~p/news/news'
import Products from '~p/products/products'
import Product from '~p/product/product'
import Stocks from '~p/stocks/stocks'
import Warranties from '~p/warranties/warranties'
import Wholesalers from '~p/wholesalers/wholesalers'

let routes = [
    {
        name: 'home',
        url: '/',
        component: Main,
        exact: true
    },
    {
        name: 'about',
        url: '/about',
        component: About,
        exact: true
    },
    {
        name: 'contacts',
        url: '/contacts',
        component: Contacts,
        exact: true
    },
    {
        name: 'delivery',
        url: '/delivery',
        component: Delivery,
        exact: true
    },
    {
        name: 'news',
        url: '/news',
        component: News,
        exact: true
    },
    {
        name: 'products',
        url: '/products',
        component: Products,
        exact: true
    },
    {
        name: 'product',
        url: '/product',
        component: Product,
        exact: true
    },
    {
        name: 'stocks',
        url: '/stocks',
        component: Stocks,
        exact: true
    },
    {
        name: 'warranties',
        url: '/warranties',
        component: Warranties,
        exact: true
    },
    {
        name: 'wholesalers',
        url: '/wholesalers',
        component: Wholesalers,
        exact: true
    },
    {
        url: '**',
        component: Page404,
    }
]

let routesMap = {};

routes.forEach((route) => {
    if (route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null;
    }

    let url = routes[name];

    for (let key in params) {
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};