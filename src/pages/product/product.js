import React from 'react'

import ProductInfo from '~c/product/productInfo'

import './product.scss'

export default class extends React.Component {
    render() {
        return (
            <main className="product">
                <div className="container">
                    <div className="product__header">
                        <ProductInfo />
                    </div>
                    <div className="product__body">
                        
                    </div>
                </div>
            </main>
        )
    }
}