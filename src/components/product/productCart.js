import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes/routes';
import {observer, inject} from 'mobx-react';

import Button from '~c/buttons/button/button'

import './productCart.scss'

@inject('stores') @observer class ProductCart extends React.Component {
    static propTypes = { productId: PropTypes.number.isRequired }

    render() {
        let product = this.props.stores.phones.getById(this.props.productId);
        let basket = this.props.stores.basket;

        return (
            <div className="product-cart">
                <Link className="product-cart__link" to={urlBuilder('product', {id: product.id})}>
                    <img className="product-cart__img" src={product.img} />
                    <span className="product-cart__text">
                        {product.name}
                    </span>
                </Link>
                <span className="product-cart__price">{product.price}</span>
                <Button type="button"
                        text="В корзину"
                        theme="reverse"
                        onClick={() => basket.add(product.id)}
                />
            </div>
        )
    }
}

export default ProductCart;