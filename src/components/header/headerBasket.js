import React from 'react'
import { withRouter } from 'react-router-dom'
import {observer, inject} from 'mobx-react';

import { routesMap } from '~/routes/routes';
import Helpers from '~/helpers/helpers'

import './headerBasket.scss'

import BasketIcon from "~/static/img/basket.svg";

@inject('stores') @observer class HeaderBasket extends React.Component {
    goToBasket = () => {
        this.props.history.push(routesMap.basket);
    }

    render() {
        let basket = this.props.stores.basket;

        return (
            <div className="header-basket" onClick={this.goToBasket}>
                <div className="header-basket__goods">
                    <span className="header-basket__price">{basket.totalPrice} &#8381;</span>
                    <span className="header-basket__count">
                        {
                            `${basket.totalCountProducts} 
                            ${Helpers.bowWord(basket.totalCountProducts, ['товар', 'товара', 'товаров'])}`
                        }
                    </span>
                </div>
                <div className="header-basket__right">
                    <BasketIcon className="header-basket__icon" />
                    <span className="header-basket__text">Корзина</span>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderBasket);