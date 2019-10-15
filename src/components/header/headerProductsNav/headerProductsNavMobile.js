import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Sandwich from '~c/buttons/sandwich/sandwich'
import { urlBuilder } from '~/routes/routes';

import './headerProductsNavMobile.scss'

@inject('stores') @observer class headerProductsNavMobile extends React.Component {

    static propTypes = { hideMenu: PropTypes.func.isRequired }

    handleClick = () => {
        this.props.hideMenu();
    }

    clickOnMenu = (e) => {
        if (e.target.tagName === 'A') {
            this.props.hideMenu();
        }
    }

    render() {
        let catalogItemsData = this.props.stores.categories.items;
        let catalogItems = [];

        catalogItemsData.forEach((item) => {
            catalogItems.push (
                <li className="main-nav-mobile__catalog-item"
                    key={`main-catalog-item-${item.name}`}
                >
                    <Link className="main-nav-mobile__catalog-link"
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
                <li className="main-nav-mobile__info-item" key={`main-page-${item.name}`}>
                    <Link className="main-nav-mobile__info-link" to={item.routerTo}>
                        {item.name}
                    </Link>
                </li>
            )
        });

        return (
            <div className="main-nav-mobile" onClick={() => this.clickOnMenu(event)}>
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

export default headerProductsNavMobile;