import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import { routesMap } from '~/routes/routes';
import Button from '~c/buttons/button/button'
import ProductRating from '~c/product/productRating'
import ProductPay from '~c/product/productPay'
import ProductDelivery from '~c/product/productDelivery'

import './productInfo.scss'

@inject('stores') @observer class ProductInfo extends React.Component {
    static propTypes = { productId: PropTypes.number.isRequired }

    goToBasket = () => {
        this.props.history.push(routesMap.basket);
    }

    render() {
        let product = this.props.stores.products.getById(this.props.productId);
        let basket = this.props.stores.basket;

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
                        onClick={() => basket.addProduct(product.id)}
                />
            )
        }

        return (
            <section className="product-info">
                <div className="product-info__img-wrapper">
                    <img className="product-info__img"
                         src={product.img}
                         alt={product.name}
                    />
                </div>
                <div className="product-info__description">
                    <div className="product-info__row">
                        <h1 className="product-info__name">{product.name}</h1>
                        <img className="product-info__logo"
                             src={product.brand}
                             alt="Логотип производителя"
                        />
                    </div>
                    <div className="product-info__row">
                        <div className="product-info__rating">
                            <div className="product-info__product-rating">
                                <ProductRating rating={product.rating} />
                            </div>
                            <a>0 отзывов</a>
                        </div>
                        <span className="product-info__articul">
                            Артикул: <b>{product.article}</b>
                        </span>
                    </div>
                    <div className="product-info__row product-info__row_buttons">
                        <span className="product-info__price">{product.price}</span>
                        <div className="product-info__buttons">
                            <div className="product-info__button-buy">
                                {button}
                            </div>
                            <div className="product-info__button-buy-click">
                                <Button type="button" text="Купить в 1 клик" theme="gray" />
                            </div>
                        </div>
                    </div>
                    <div className="product-info__row">
                        <ProductPay />
                        <ProductDelivery />
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(ProductInfo);