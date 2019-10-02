import React from 'react'
import {observer, inject} from 'mobx-react';
import { withRouter } from 'react-router-dom';

import ProductCart from '~c/product/productCart'

import './products.scss'

@inject('stores') @observer class Products extends React.Component {
    componentDidMount() {
        this.loadingProducts();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.loadingProducts();
        }
    }

    loadingProducts = () => {
        let productsStore = this.props.stores.products;
        let productsType = this.props.match.params.type;

        productsStore.getProductsFromAPI(productsType);
    }

    render() {
        let productsStore = this.props.stores.products;

        let products = productsStore.items.map((product) => {
            return <ProductCart productId={product.id} key={`phone-${product.id}`} />
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
                                {products}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Products);