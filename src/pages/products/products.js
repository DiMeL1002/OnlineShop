import React from 'react'

import ProductCart from '~c/product/productCart'

import './products.scss'

export default class extends React.Component {
    render() {
        return (
            <section className="products">
                <div className="container">
                    <header className="products__header">
                        <h1 className="products__title">Телефоны</h1>
                    </header>
                    <div className="products__body">
                        <aside className="products__filter"></aside>
                        <div className="products__main">
                            <div className="products__catalog">
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                                <div className="products__item">
                                    <ProductCart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}