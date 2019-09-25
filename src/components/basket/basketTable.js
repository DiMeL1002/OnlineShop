import React from 'react'

import './basketTable.scss'

import CloseIcon from "~/static/img/close.svg";
import PlusIcon from "~/static/img/plus.svg";
import MinusIcon from "~/static/img/minus.svg";

export default function() {
    return (
        <div className="basket-table">
            <div className="basket-table__header">
                <span className="basket-table__title">Выбранные товары</span>
            </div>
            <div className="basket-table__body">
                <div className="basket-table__item">
                    <div className="basket-table__preview">
                        <img className="basket-table__img" src="./img/products/id1.jpg" />
                        <div className="basket-table__name">
                            <a>Xiaomi Mi A3 4/64GB Android One</a>
                            <span className="basket-table__article">Артикул: MM0009</span>
                        </div>
                    </div>
                    <div className="basket-table__price">10 000 руб.</div>
                    <div className="basket-table__counter">
                        <div className="basket-table__minus">
                            <MinusIcon className="basket-table__minus-icon" />
                        </div>
                        <div className="basket-table__count">3</div>
                        <div className="basket-table__plus">
                            <PlusIcon className="basket-table__plus-icon" />
                        </div>
                    </div>
                    <div className="basket-table__full-price">10 000 руб.</div>
                    <div className="basket-table__remove">
                            <CloseIcon className="basket-table__remove-icon" />
                        </div>
                </div>
                <div className="basket-table__item">
                    <div className="basket-table__preview">
                        <img className="basket-table__img" src="./img/products/id1.jpg" />
                        <div className="basket-table__name">
                            <a>Xiaomi Mi A3 4/64GB Android One</a>
                            <span className="basket-table__article">Артикул: MM0009</span>
                        </div>
                    </div>
                    <div className="basket-table__price">8 000 руб.</div>
                    <div className="basket-table__counter">
                        <div className="basket-table__minus">
                            <MinusIcon className="basket-table__minus-icon" />
                        </div>
                        <div className="basket-table__count">3</div>
                        <div className="basket-table__plus">
                            <PlusIcon className="basket-table__plus-icon" />
                        </div>
                    </div>
                    <div className="basket-table__full-price">8 000 руб.</div>
                    <div className="basket-table__remove">
                            <CloseIcon className="basket-table__remove-icon" />
                        </div>
                </div>
            </div>
        </div>
    )
}