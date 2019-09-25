import React from 'react'
import { withRouter } from 'react-router-dom'

import { routesMap } from '~/routes/routes';

import './headerBasket.scss'

import BasketIcon from "~/static/img/basket.svg";

const headerBasket = function(props) {
    let goToBasket = () => {
        props.history.push(routesMap.basket);
    }

    return (
        <div className="header-basket" onClick={goToBasket}>
            <div className="header-basket__goods">
                <span className="header-basket__price">0 &#8381;</span>
                <span className="header-basket__count">0 товаров</span>
            </div>
            <div className="header-basket__right">
                <BasketIcon className="header-basket__icon" />
                <span className="header-basket__text">Корзина</span>
            </div>
        </div>
    )
}

export default withRouter(headerBasket);