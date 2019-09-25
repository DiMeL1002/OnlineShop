import React from 'react'
import PropTypes from 'prop-types'

import ProductInfo from '~c/product/productInfo'
import ProductBody from '~c/product/productBody'

import './product.scss'

export default class extends React.Component {
    static propTypes = { productId: PropTypes.number.isRequired }

    render() {
        return (
            <main className="product">
                <div className="container">
                    <div className="product__header">
                        <ProductInfo productId={this.props.productId} />
                    </div>
                    <div className="product__body">
                        <ProductBody />
                    </div>
                </div>
            </main>
        )
    }
}