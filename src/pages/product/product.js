import React from 'react'
import { Helmet } from "react-helmet";
import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom';

import { urlBuilder } from '~/routes/routes';
import Product from '~c/product/product'

import './product.scss'

@inject('stores') class ProductPage extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        let productsStore = this.props.stores.products;

        productsStore.loadProduct(id);
    }

    render() {    
        let id = parseInt(this.props.match.params.id);
        
        if (id === null) return <div>Ошибка 404</div>;

        let product = this.props.stores.products.item;

        return (
            <main className="product">
                <Helmet>
                    <title>{`${product.name}, цена – купить в Giant`}</title>
                    <meta name="description"
                        content={`${product.name} — покупайте с выгодой в интернет-магазине Giant. Широкий выбор и доступные цены. Доставка по всей России.`}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={`${product.name}, цена – купить в Giant`} />
                    <meta property="og:description"
                        content={`${product.name} — покупайте с выгодой в интернет-магазине Giant. Широкий выбор и доступные цены. Доставка по всей России.`}
                    />
                    <meta property="og:image" content={'https://giant.ru' + product.img} />
                    <meta property="og:url" content={'https://giant.ru' + urlBuilder('product', {id: product.id})} />
                </Helmet>
                
                <div className="container">
                    <Product productId={id} />
                </div>
            </main>
        )
    }
}

export default withRouter(ProductPage);