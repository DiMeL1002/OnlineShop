import React from 'react'
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { observer, inject } from 'mobx-react';

import { urlBuilder } from '~/routes/routes';
import Products from '~c/products/products'

import './products.scss'

@inject('stores') @observer class ProductsPage extends React.Component {
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
        let productsType = this.props.match.params.type;
        let catalogItemsStore = this.props.stores.catalogItems.itemsMap;

        return (
            <section className="products-page">
                <Helmet>
                    <title>Купить технику в интернет-магазине - Giant</title>
                    <meta name="description"
                        content="Покупайте с выгодой в интернет-магазине Giant. Широкий выбор и доступные цены. Доставка по всей России."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Купить технику в интернет-магазине - Giant" />
                    <meta property="og:description"
                        content="Покупайте с выгодой в интернет-магазине Giant. Широкий выбор и доступные цены. Доставка по всей России."
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content={'https://giant.ru' + urlBuilder('products', {type: productsType})} />
                </Helmet>

                <div className="container">
                    <header className="products-page__header">
                        <h1 className="products-page__title">{catalogItemsStore[productsType]}</h1>
                    </header>
                    <div className="products-page__body">
                        <Products />
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(ProductsPage);