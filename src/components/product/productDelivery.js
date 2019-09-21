import React from 'react';

import './productDelivery.scss';

import DeliveryIcon from '~/static/img/delivery.svg';

export default function productPay() {
    return (
        <div className="product-delivery">
            <div className="product-delivery__header">
                <DeliveryIcon className="product-delivery__icon" />
                <span className="product-delivery__title">Доставка</span>
            </div>
            <div className="product-delivery__body">
                <p className="product-delivery__text">
                    По Москве сегодня курьером - <b>200 руб</b>.<br/>
                </p>
                <p className="product-delivery__text">
                    Самовывоз с нашего магазина - <b>бесплатно</b>.<br/>
                </p>
            </div>
        </div>
    )
}