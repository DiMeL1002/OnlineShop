import React from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes/routes';

import './footerNav.scss'

export default function() {
    return (
        <nav className="footer-nav">
            <div className="footer-nav__item">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Телефоны</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Планшеты</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Часы</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Аксессуары</a>
                    </li>
                </ul>
            </div>
            <div className="footer-nav__item">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.about}>
                            О компании
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.delivery}>
                            Доставка и оплата
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.wholesalers}>
                            Поставщикам
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.news}>
                            Новости
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.reviews}>
                            Отзывы
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.contacts}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}