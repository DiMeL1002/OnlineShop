import React from 'react'
import {Helmet} from "react-helmet";

import Basket from '~c/basket/basket'

import './basket.scss'

export default function() {
    return (
        <section className="basket-page">
            <Helmet>
                <title>Giant - корзина</title>
                <meta name="description"
                    content="Giant - Информация для клиентов. Раздел - Корзина"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Giant - корзина" />
                <meta property="og:description"
                    content="Giant - Информация для клиентов. Раздел - Корзина"
                />
                <meta property="og:image" content="https://giant.ru/img/logo.png" />
                <meta property="og:url" content="https://giant.ru/basket" />
            </Helmet>
            <div className="container">
                <h1 className="basket-page__title">Корзина</h1>
                <Basket />
            </div>
        </section>
    )
}