import React from 'react'

import Basket from '~c/basket/basket'

import './basket.scss'

export default function() {
    return (
        <section className="basket-page">
            <div className="container">
                <h1 className="basket-page__title">Корзина</h1>
                <Basket />
            </div>
        </section>
    )
}