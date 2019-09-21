import React from 'react'
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes/routes';

import './headerProductsNav.scss'

export default function() {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <Link className="main-nav__link" to={routesMap.products}>
                        Телефоны
                    </Link>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Планшеты</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Часы</a>
                </li>
                <li className="main-nav__item">
                    <a className="main-nav__link">Аксессуары</a>
                </li>
            </ul>
        </nav>
    )
}