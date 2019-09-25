import React from 'react'

import './basketTotal.scss'

export default function() {
    return (
        <div className="basket-total">
            <div className="basket-total__row">
                <span className="basket-total__label">Без скидки:</span>
                <span className="basket-total__value">10 000 руб.</span>
            </div>
            <div className="basket-total__row">
                <span className="basket-total__label">Скидка:</span>
                <span className="basket-total__value">0 руб.</span>
            </div>
            <div className="basket-total__row basket-total__row_full">
                <span className="basket-total__label">Итого:</span>
                <span className="basket-total__value">13 500 руб.</span>
            </div>
        </div>
    )
}