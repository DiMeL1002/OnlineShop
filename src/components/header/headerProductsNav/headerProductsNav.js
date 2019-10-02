import React from 'react'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { urlBuilder } from '~/routes/routes';

import './headerProductsNav.scss'

@inject('stores') @observer class headerProductsNav extends React.Component {
    render() {
        let catalogItemsData = this.props.stores.catalogItems.items;
        let catalogItems = [];

        catalogItemsData.forEach((item) => {
            catalogItems.push (
                <li className="main-nav__item" key={`main-catalog-item-${item.name}`}>
                    <Link className="main-nav__link"
                        to={urlBuilder('products', {type: item.type})}
                    >
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
}

export default headerProductsNav; 