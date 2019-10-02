import React from 'react'
import {observer, inject} from 'mobx-react';

import './basketTable.scss'

import CloseIcon from "~/static/img/close.svg";
import PlusIcon from "~/static/img/plus.svg";
import MinusIcon from "~/static/img/minus.svg";

@inject('stores') @observer class BasketTable extends React.Component {
    increaseProductCount = (id, count) => {
        count++;
        this.props.stores.basket.changeProductCount(id, count);
    }

    reduceProductCount = (id, count) => {
        if (count > 1) {
            count--;
            this.props.stores.basket.changeProductCount(id, count);
        }
    }

    render() {
        let basket = this.props.stores.basket;
        
        let products = basket.products.map((product) => {
            let price = product.price.replace(/[^+\d]/g, '');
            let totalPrice = String(price * product.count);
            totalPrice = totalPrice.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

            return (
                <div className="basket-table__item" key={`product-${product.id}`}>
                    <div className="basket-table__preview">
                        <img className="basket-table__img" src={product.img} />
                        <div className="basket-table__name">
                            <a>{product.name}</a>
                            <span className="basket-table__article">
                                Артикул: {product.article}
                            </span>
                        </div>
                    </div>
                    <div className="basket-table__price">{product.price}</div>
                    <div className="basket-table__counter">
                        <div className="basket-table__minus"
                             onClick={() => this.reduceProductCount(product.id, product.count)}
                        >
                            <MinusIcon className="basket-table__minus-icon" />
                        </div>
                        <div className="basket-table__count">{product.count}</div>
                        <div className="basket-table__plus"
                             onClick={() => this.increaseProductCount(product.id, product.count)}
                        >
                            <PlusIcon className="basket-table__plus-icon" />
                        </div>
                    </div>
                    <div className="basket-table__full-price">
                        {`${totalPrice} руб.`}
                    </div>
                    <div className="basket-table__remove"
                         onClick={() => basket.removeProduct(product.id)}
                    >
                        <CloseIcon className="basket-table__remove-icon" />
                    </div>
                </div>
            )
        })

        return (
            <div className="basket-table">
                <div className="basket-table__header">
                    <span className="basket-table__title">Выбранные товары</span>
                </div>
                <div className="basket-table__body">
                    {products}
                </div>
            </div>
        )
    }
}

export default BasketTable;