import React from 'react'

import BasketTable from './components/BasketTable/BasketTable'
import BasketTotal from './components/BasketTotal/BasketTotal'

import './Basket.scss'

export default function() {
    return (
        <div className="basket">
            <div className="basket__table">
                <BasketTable />
            </div>
            <div className="basket__total">
                <BasketTotal />
            </div>
        </div>
    )
}