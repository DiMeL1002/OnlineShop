import React from 'react'
import PropTypes from 'prop-types'

import ProductInfo from '~c/product/productInfo'
import ProductBody from '~c/product/productBody'

import './product.scss'

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