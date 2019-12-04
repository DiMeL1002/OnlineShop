import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import { routesMap, urlBuilder } from '~/routes/routes';
import Button from '~c/buttons/Button/Button'

import './ProductCart.scss'

@inject('stores') @observer class ProductCart extends React.Component {
    static propTypes = { productId: PropTypes.number.isRequired }

    goToBasket = () => {
        this.props.history.push(routesMap.basket);
    }

    render() {
        let product = this.props.stores.products.getById(this.props.productId);
        let basket = this.props.stores.basket;
        let price = String(product.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        let button;

        if (basket.isProductInBasket(product.id)) {
            button = (
                <Button type="button"
                        text="В корзине"
                        theme="gray"
                        onClick={this.goToBasket}
                />
            )
        } else {
            button = (
                <Button type="button"
                        text="В корзину"
                        theme="reverse"
                        onClick={() => basket.addProduct(product.id)}
                />
            )
        }

        return (
            <div className="product-cart">
                <Link className="product-cart__link" to={urlBuilder('product', {id: product.id})}>
                    <img className="product-cart__img" src={`/img/products/${product.img}`} />
                    <span className="product-cart__text">
                        {product.name}
                    </span>
                </Link>
                <span className="product-cart__price">{price} руб</span>
                {button}
            </div>
        )
    }
}

export default withRouter(ProductCart);