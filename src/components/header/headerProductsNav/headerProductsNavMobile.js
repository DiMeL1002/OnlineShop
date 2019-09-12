import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {routesMap} from '~/routes/routes';

import Sandwich from '~c/buttons/sandwich/sandwich'

import './headerProductsNavMobile.scss'

export default class extends React.Component {

    static propTypes = { hideMenu: PropTypes.func.isRequired }

    handleClick = () => {
        this.props.hideMenu();
    }

    render() {
        return (
            <div className="main-nav-mobile">
                <div className="main-nav-mobile__header">
                    <span className="main-nav-mobile__menu-title">Меню</span>
                    <div className="main-nav-mobile__close" onClick={this.handleClick}>
                        <Sandwich isActive={true} />
                    </div>
                </div>
                <div className="main-nav-mobile__body">
                    <nav className="main-nav-mobile__catalog">
                        <ul className="main-nav-mobile__catalog-list">
                            <li className="main-nav-mobile__catalog-item">
                                <a className="main-nav-mobile__catalog-link">Велосипеды</a>
                            </li>
                            <li className="main-nav-mobile__catalog-item">
                                <a className="main-nav-mobile__catalog-link">Скейты</a>
                            </li>
                            <li className="main-nav-mobile__catalog-item">
                                <a className="main-nav-mobile__catalog-link">Ролики</a>
                            </li>
                            <li className="main-nav-mobile__catalog-item">
                                <a className="main-nav-mobile__catalog-link">
                                    Аксессуары и запчасти
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="main-nav-mobile__info">
                        <ul className="main-nav-mobile__info-list">
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.about}
                                >
                                    О компании
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.delivery}
                                >
                                    Доставка и оплата
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.stocks}
                                >
                                    Акции
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.wholesalers}
                                >
                                    Поставщикам
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.news}
                                >
                                    Новости
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.warranties}
                                >
                                    Гарантии
                                </Link>
                            </li>
                            <li className="main-nav-mobile__info-item">
                                <Link className="main-nav-mobile__info-link"
                                      to={routesMap.contacts}
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}