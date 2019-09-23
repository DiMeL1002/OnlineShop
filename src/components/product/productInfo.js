import React from 'react'

import Button from '~c/buttons/button/button'
import ProductRating from '~c/product/productRating'
import ProductPay from '~c/product/productPay'
import ProductDelivery from '~c/product/productDelivery'

import './productInfo.scss'

export default class extends React.Component {
    render() {
        return (
            <section className="product-info">
                <div className="product-info__img-wrapper">
                    <img className="product-info__img"
                         src={this.props.img}
                         alt={this.props.name}
                    />
                </div>
                <div className="product-info__description">
                    <div className="product-info__row">
                        <h1 className="product-info__name">
                            {this.props.name}
                        </h1>
                        <img className="product-info__logo"
                             src="/img/brands/xiaomi.jpg"
                             alt="Логотип производителя"
                        />
                    </div>
                    <div className="product-info__row">
                        <div className="product-info__rating">
                            <div className="product-info__product-rating">
                                <ProductRating rating={3}/>
                            </div>
                            <a>0 отзывов</a>
                        </div>
                        <span className="product-info__articul">Артикул: <b>MM0009</b></span>
                    </div>
                    <div className="product-info__row product-info__row_buttons">
                        <span className="product-info__price">{this.props.price}</span>
                        <div className="product-info__buttons">
                            <div className="product-info__button-buy">
                                <Button type="button" text="Купить" />
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