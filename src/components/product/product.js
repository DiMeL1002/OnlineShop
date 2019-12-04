import React from 'react'
import PropTypes from 'prop-types'

import ProductInfo from './components/ProductInfo/ProductInfo'
import ProductBody from './components/ProductBody/ProductBody'

import './Product.scss'

function Product(props) {
    return (
        <main className="product">
            <div className="container">
                <div className="product__header">
                    <ProductInfo productId={props.productId} />
                </div>
                <div className="product__body">
                    <ProductBody />
                </div>
            </div>
        </main>
    )
}

Product.propTypes = { productId: PropTypes.number.isRequired };

export default Product;