import React from 'react';
import MediaQuery from 'react-responsive'

import ProductsNavButton from '~c/buttons/ProductsNavButton/ProductsNavButton'
import HeaderBasket from './components/HeaderBasket/HeaderBasket'
import Logo from './components/HeaderLogo/HeaderLogo'
import HeaderNav from './components/HeaderNav/HeaderNav'
import Phones from './components/HeaderPhones/HeaderPhones'
import MainNav from './components/HeaderProductsNav/HeaderProductsNav'
import MainNavMobile from './components/HeaderProductsNav/HeaderProductsNavMobile'
import Search from './components/HeaderSearch/HeaderSearch'
import SignedOutLinks from '~c/SignedOutLinks/SignedOutLinks'

import './Header.scss'

import SearchIcon from "~/static/img/search.svg";

export default class extends React.Component {

    state = {
        showSearchModal: false,
        showMenu: false,
    }

    showSearchModal = () => {
        this.setState({showSearchModal: true});
    }

    hideSearchModal = () => {
        this.setState({showSearchModal: false});
    }

    showMenu = () => {
        this.setState({showMenu: true});
    }

    hideMenu = () => {
        this.setState({showMenu: false});
    }

    render() {
        return (
            <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="header__content">
                                <HeaderNav />
                                <div className="header__auth">
                                    <SignedOutLinks />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header__main">
                        <div className="container">
                            <div className="header__content">
                                <div className="header__logo">
                                    <Logo />
                                </div>
                                <Phones />
                                <div className="header__basket">
                                    <HeaderBasket />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header__menu">
                        <div className="container">
                            <div className="header__content">
                                <MediaQuery minDeviceWidth={993}>
                                    <div className="header__main-nav">
                                        <MainNav />
                                    </div>
                                </MediaQuery>
                                <MediaQuery maxDeviceWidth={992}>
                                    <div className="header__products-nav-button"
                                         onClick={this.showMenu}
                                    >
                                        <ProductsNavButton />
                                    </div>
                                    {
                                        this.state.showMenu && (
                                            <div className="header__main-nav-mobile">
                                                <MainNavMobile hideMenu={this.hideMenu} />
                                            </div>
                                        )
                                    }
                                </MediaQuery>
                                <SearchIcon className="header__search-icon"
                                            onClick={this.showSearchModal}
                                />
                                {
                                    this.state.showSearchModal && (
                                        <div className="header__search">
                                            <Search hideSearchModal={this.hideSearchModal} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
            </header>
        )
    }
}