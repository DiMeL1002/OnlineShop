import React from 'react'
import { inject } from 'mobx-react';

import ProductInfo from '~c/product/productInfo'
import ProductBody from '~c/product/productBody'

import './product.scss'

@inject('stores') class Product extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let product = this.props.stores.phones.getById(id);
        
        if (product === null) {
            return <div>Ошибка 404</div>
        }

        return (
            <main className="product">
                <div className="container">
                    <div className="product__header">
                        <ProductInfo name={product.name}
                                     price={product.price}
                                     img={product.img}
                        />
                    </div>
                    <div className="product__body">
                        <ProductBody />
                    </div>
                </div>
            </main>
        )
    }
}

export default Product;