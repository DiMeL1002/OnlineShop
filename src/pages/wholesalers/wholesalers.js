import React from 'react'

import Advantages from '~c/advantages/advantages'

import './wholesales.scss'

export default function() {
    return (
        <section className="wholesales-page">
            <div className="container">
                <h1 className="wholesales-page__title">Поставщикам</h1>
                <p>
                    Уважаемые поставщики, наш сайт открыт для размещения Ваших товаров,
                    мы открыты для сотрудничества по всем категориям.
                </p>
                <p>Предложения присылайте на email - <a href="mailto:opt@giant.ru">opt@giant.ru</a></p>
                <div className="wholesales-page__advantages">
                    <Advantages />
                </div>
            </div>
        </section>
    )
}