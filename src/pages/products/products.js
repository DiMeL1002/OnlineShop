import React from 'react'
import { inject } from 'mobx-react';

import ProductCart from '~c/product/productCart'

import './products.scss'

@inject('stores') export default class extends React.Component {
    render() {
        let phonesData = this.props.stores.phones;

        let phones = phonesData.items.map((phone) => {
            return <ProductCart productId={phone.id} key={`phone-${phone.id}`} />
        })

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
                                {phones}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}