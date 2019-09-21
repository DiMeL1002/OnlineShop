import React from 'react'
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes/routes';

import Button from '~c/buttons/button/button'

import './productCart.scss'

export default class extends React.Component {
    render() {
        return (
            <div className="product-cart">
                <Link className="product-cart__link" to={routesMap.product}>
                    <img className="product-cart__img" src="./img/products/product1.webp" />
                    <span className="product-cart__text">
                        Xiaomi Mi A3 4/64GB Android One
                    </span>
                </Link>
                <span className="product-cart__price">10 000 руб.</span>
                <Button type="button" text="Купить" theme="reverse" />
            </div>
        )
    }
}