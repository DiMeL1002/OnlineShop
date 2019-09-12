import React from 'react'

import Sandwich from '~c/buttons/sandwich/sandwich'

import './productsNavButton.scss'

export default function() {
    return (
        <React.Fragment>
            <button className="products-nav-button">
                <div className="products-nav-button__sandwich">
                    <Sandwich />
                </div>
                <span className="products-nav-button__title">Каталог товаров</span>
            </button>
        </React.Fragment>
    )
}