import React from 'react'

import './headerBasket.scss'

import BasketIcon from "~/static/img/basket.svg";

export default function() {
    return (
        <div className="header-basket">
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