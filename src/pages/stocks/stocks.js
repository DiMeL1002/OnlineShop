import React from 'react'

import PageContainer from '~p/pageContainer/pageContainer'

import './stocks.scss'

export default function() {
    return (
        <PageContainer>
            <section className="stocks">
                <h1 className="stocks__title">Акции</h1>
                <div className="products__body">
                    <p>В данный момент нет никаких акций.</p>
                </div>
            </section>
        </PageContainer>
    )
}