import React from 'react'

import BasketTable from '~c/basket/basketTable'
import BasketTotal from '~c/basket/basketTotal'

import './basket.scss'

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