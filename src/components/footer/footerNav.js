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
                        <a className="footer-nav__link">Велосипеды</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Скейты</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Ролики</a>
                    </li>
                    <li className="footer-nav__item">
                        <a className="footer-nav__link">Аксессуары и запчасти</a>
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
                        <Link className="footer-nav__link" to={routesMap.warranties}>
                            Отзывы
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.contacts}>
                            Контакты
                        </Link>
                    </li>
                    <li className="footer-nav__item">
                        <Link className="footer-nav__link" to={routesMap.contacts}>
                            Вопрос-ответ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}