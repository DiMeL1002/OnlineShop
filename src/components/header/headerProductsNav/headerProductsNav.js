import React from 'react'

import './headerProductsNav.scss'

export default function() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <a className="main-nav__link">Велосипеды</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Скейты</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Ролики</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Аксессуары и запчасти</a>
                </li>
            </ul>
        </nav>
    )
}