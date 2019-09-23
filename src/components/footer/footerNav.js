import React from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes/routes';

import './footerNav.scss'

export default function() {
    let catalogItemsData = getCatalogItemsData();
    let catalogItems = [];

    catalogItemsData.forEach((item) => {
        catalogItems.push (
            <li className="footer-nav__item" key={`footer-catalog-item-${item.name}`}>
                <Link className="footer-nav__link" to={item.routerTo}>
                    {item.name}
                </Link>
            </li>
        )
    });

    let pagesData = getPagesData();
    let pages = [];

    pagesData.forEach((item) => {
        pages.push (
            <li className="footer-nav__item" key={`footer-page-${item.name}`}>
                <Link className="footer-nav__link" to={item.routerTo}>
                    {item.name}
                </Link>
            </li>
        )
    });

    return (
        <nav className="footer-nav">
            <div className="footer-nav__item">
                <ul className="footer-nav__list">
                    {catalogItems}
                </ul>
            </div>
            <div className="footer-nav__item">
                <ul className="footer-nav__list">
                    {pages}
                </ul>
            </div>
        </nav>
    )
}

function getCatalogItemsData() {
    return [
        {
            name: 'Телефоны',
            routerTo: routesMap.products,
        },
        {
            name: 'Планшеты',
            routerTo: routesMap.products,
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

function getPagesData() {
    return [
        {
            name: 'О компании',
            routerTo: routesMap.about,
        },
        {
            name: 'Доставка и оплата',
            routerTo: routesMap.delivery,
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
            name: 'Отзывы',
            routerTo: routesMap.reviews,
        },
        {
            name: 'Контакты',
            routerTo: routesMap.contacts,
        },
    ]
}