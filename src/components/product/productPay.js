import React from 'react';

import './productPay.scss';

import PayIcon from '~/static/img/payment.svg';

export default function() {
    return (
        <div className="product-pay">
            <div className="product-pay__header">
                <PayIcon className="product-pay__icon" />
                <span className="product-pay__title">Оплата</span>
            </div>
            <div className="product-pay__body">
                <ul className="product-pay__list">
                    <li className="product-pay__item">Наличные</li>
                    <li className="product-pay__item">Электронные деньги</li>
                    <li className="product-pay__item">Сбербанк</li>
                    <li className="product-pay__item">Безналичная оплата</li>
                </ul>
            </div>
        </div>
    )
}