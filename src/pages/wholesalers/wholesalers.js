import React from 'react'
import {Helmet} from "react-helmet";

import PageContainer from '~p/pageContainer/pageContainer'

import './wholesales.scss'

export default function() {
    return (
        <PageContainer>
            <section className="wholesales-page">
                <Helmet>
                    <title>Giant - поставщикам</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Поставщикам"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - поставщикам" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Поставщикам"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/wholesalers" />
                </Helmet>

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