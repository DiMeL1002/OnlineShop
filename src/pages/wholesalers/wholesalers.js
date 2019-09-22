import React from 'react'

import PageContainer from '~p/pageContainer/pageContainer'

import './wholesales.scss'

export default function() {
    return (
        <PageContainer>
            <section className="wholesales-page">
                <h1 className="wholesales-page__title">Поставщикам</h1>
                <p>
                    Уважаемые поставщики, наш сайт открыт для размещения Ваших товаров,
                    мы открыты для сотрудничества по всем категориям.
                </p>
                <p>Предложения присылайте на email - <a href="mailto:opt@giant.ru">opt@giant.ru</a></p>
            </section>
        </PageContainer>
    )
}