import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {routesMap} from '~/routes/routes';

import Sandwich from '~c/buttons/sandwich/sandwich'

import './headerProductsNavMobile.scss'

export default class extends React.Component {

    static propTypes = { hideMenu: PropTypes.func.isRequired }

    handleClick = () => {
        this.props.hideMenu();
    }

    render() {
        let catalogItemsData = getCatalogItemsData();
        let catalogItems = [];

        catalogItemsData.forEach((item) => {
            catalogItems.push (
                <li className="main-nav-mobile__catalog-item"
                    key={`main-catalog-item-${item.name}`}
                >
                    <Link className="main-nav-mobile__catalog-link" to={item.routerTo}>
                        {item.name}
                    </Link>
                </li>
            )
        });

        let pagesData = getPagesData();
        let pages = [];

        pagesData.forEach((item) => {
            pages.push (
                <li className="main-nav-mobile__info-item" key={`main-page-${item.name}`}>
                    <Link className="main-nav-mobile__info-link" to={item.routerTo}>
                        {item.name}
                    </Link>
                </li>
            )
        });

        return (
            <div className="main-nav-mobile">
                <div className="main-nav-mobile__header">
                    <span className="main-nav-mobile__menu-title">Меню</span>
                    <div className="main-nav-mobile__close" onClick={this.handleClick}>
                        <Sandwich isActive={true} />
                    </div>
                </div>
                <div className="main-nav-mobile__body">
                    <nav className="main-nav-mobile__catalog">
                        <ul className="main-nav-mobile__catalog-list">
                            {catalogItems}
                        </ul>
                    </nav>
                    <nav className="main-nav-mobile__info">
                        <ul className="main-nav-mobile__info-list">
                            {pages}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
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
    ]
}