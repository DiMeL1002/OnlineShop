import React from 'react'
import {Helmet} from "react-helmet";

import PageContainer from '~p/PageContainer/PageContainer'

import './Stocks.scss'

export default function() {
    return (
        <PageContainer>
            <section className="stocks">
                <Helmet>
                    <title>Giant - акции</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Акции"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - акции" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Акции"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/stocks" />
                </Helmet>

                <h1 className="stocks__title">Акции</h1>
                <div className="products__body">
                    <p>В данный момент нет никаких акций.</p>
                </div>
            </section>
        </PageContainer>
    )
}