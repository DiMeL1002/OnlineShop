import React from 'react'
import {observer, inject} from 'mobx-react';

import './BasketTotal.scss'

@inject('stores') @observer class BasketTotal extends React.Component {
    render () {
        return (
            <div className="basket-total">
                {/* <div className="basket-total__row">
                    <span className="basket-total__label">Без скидки:</span>
                    <span className="basket-total__value">10 000 руб.</span>
                </div>
                <div className="basket-total__row">
                    <span className="basket-total__label">Скидка:</span>
                    <span className="basket-total__value">0 руб.</span>
                </div> */}
                <div className="basket-total__row basket-total__row_full">
                    <span className="basket-total__label">Итого:</span>
                    <span className="basket-total__value">
                        {`${this.props.stores.basket.totalPrice} руб`}
                    </span>
                </div>
            </div>
        )
    }
}

export default BasketTotal;