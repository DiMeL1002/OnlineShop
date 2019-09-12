import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {routesMap} from '~/routes/routes';
import MediaQuery from 'react-responsive'

import './headerNav.scss'

import DotsIcon from "~/static/img/dots.svg";

export default class extends React.Component {
    state = { showSubNav: false }

    componentDidMount() {
        document.addEventListener('click', this.hadleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hadleClickOutside);
    }

    hadleClickOutside = () => {
        let domNode = ReactDOM.findDOMNode(this);

        if (this.isNotTargetOfClick(domNode, event) || event.target.tagName === 'A') {
            this.setState({showSubNav: false});
        }
    }

    isNotTargetOfClick = (elem, event) => {
        return !elem || !elem.contains(event.target);
    }

    toggleSubNav = () => {
        this.setState({showSubNav: !this.state.showSubNav});
    }

    render() {
        let subNav = (
            <div className="header-nav__subnav-body">
                <div className="header-nav__subnav-arrow"></div>
                <ul className="header-nav__subnav-list">
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.stocks}>
                            Акции
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.wholesalers}>
                            Поставщикам
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.news}>
                            Новости
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.warranties}>
                            Гарантии
                        </Link>
                    </li>
                </ul>
            </div>
        )

        return (
            <nav className="header-nav">
                <ul className="header-nav__list">
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.about}>
                            О компании
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.delivery}>
                            Доставка и оплата
                        </Link>
                    </li>
                    <MediaQuery minDeviceWidth={993}>
                        <li className="header-nav__item">
                            <Link className="header-nav__link" to={routesMap.stocks}>
                                Акции
                            </Link>
                        </li>
                        <li className="header-nav__item">
                            <Link className="header-nav__link" to={routesMap.wholesalers}>
                                Поставщикам
                            </Link>
                        </li>
                        <li className="header-nav__item">
                            <Link className="header-nav__link" to={routesMap.news}>
                                Новости
                            </Link>
                        </li>
                        <li className="header-nav__item">
                            <Link className="header-nav__link" to={routesMap.warranties}>
                                Гарантии
                            </Link>
                        </li>
                    </MediaQuery>
                    <li className="header-nav__item">
                        <Link className="header-nav__link" to={routesMap.contacts}>
                            Контакты
                        </Link>
                    </li>
                    <MediaQuery maxDeviceWidth={992}>
                        <li className="header-nav__subnav">
                            <DotsIcon className="header-nav__subnav-icon"
                                      onClick={this.toggleSubNav}
                            />
                            {this.state.showSubNav && subNav}
                        </li>
                    </MediaQuery>
                </ul>
            </nav>
        )
    }
}