import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { urlBuilder } from '~/routes/routes';

import './footerNav.scss'

@inject('stores') @observer class footerNav extends React.Component {

    render() {
        let catalogItemsData = this.props.stores.catalogItems.items;
        let catalogItems = [];

        catalogItemsData.forEach((item) => {
            catalogItems.push (
                <li className="footer-nav__item" key={`footer-catalog-item-${item.name}`}>
                    <Link className="footer-nav__link"
                          to={urlBuilder('products', {type: item.type})}
                    >
                        {item.name}
                    </Link>
                </li>
            )
        });

        let pagesData = this.props.stores.pages.items;
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
}

export default footerNav;