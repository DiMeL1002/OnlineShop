import React from 'react'
import { Link } from 'react-router-dom';

import { routesMap, urlBuilder } from '~/routes/routes';

import './headerProductsNav.scss'

export default function() {
    let catalogItemsData = getCatalogItemsData();
    let catalogItems = [];

    catalogItemsData.forEach((item) => {
        catalogItems.push (
            <li className="main-nav__item" key={`main-catalog-item-${item.name}`}>
                <Link className="main-nav__link" to={item.routerTo}>
                    {item.name}
                </Link>
            </li>
        )
    });

    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                {catalogItems}
            </ul>
        </nav>
    )
}

function getCatalogItemsData() {
    return [
        {
            name: 'Телефоны',
            routerTo: urlBuilder('products', {type: 'phones'}),
        },
        {
            name: 'Планшеты',
            routerTo: urlBuilder('products', {type: 'tablets'}),
        },
        {
            name: 'Часы',
            routerTo: routesMap.products,
        },
        {
            name: 'Аксессуары',
            routerTo: routesMap.products,
        },
    ];
}