import React from 'react'

import Advantage from '~c/advantages/advantage'

import './advantages.scss'

export default function Advantages() {
    return (
        <div className="advantages">
            <Advantage img="./img/warranty.svg"
                       title="Гарантия"
                       description="качества всех товаров"
            />
            <Advantage img="./img/delivery.svg"
                       title="Доставка"
                       description="по Москве и области"
            />
            <Advantage img="./img/payment.svg"
                       title="Оплата"
                       description="онлайн и наличными"
            />
        </div>
    )
}