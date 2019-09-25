import React from 'react'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react';

import Button from '~c/buttons/button/button'
import ProductRating from '~c/product/productRating'
import ProductPay from '~c/product/productPay'
import ProductDelivery from '~c/product/productDelivery'

import './productInfo.scss'

@inject('stores') @observer class ProductInfo extends React.Component {
    static propTypes = { productId: PropTypes.number.isRequired }

    render() {
        let product = this.props.stores.phones.getById(this.props.productId);
        let basket = this.props.stores.basket;

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
                                <Button type="button"
                                        text="В корзину"
                                        onClick={() => basket.add(product.id)}
                                />
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

export default ProductInfo;