import React from 'react';
import MediaQuery from 'react-responsive'

import ProductsNavButton from '~c/buttons/productsNavButton/productsNavButton'
import HeaderBasket from '~c/header/headerBasket'
import Logo from '~c/header/headerLogo'
import HeaderNav from '~c/header/headerNav'
import Phones from '~c/header/headerPhones'
import MainNav from '~c/header/headerProductsNav/headerProductsNav'
import MainNavMobile from '~c/header/headerProductsNav/headerProductsNavMobile'
import Search from '~c/header/headerSearch'
import SignedOutLinks from '~c/signedOutLinks/signedOutLinks'

import './header.scss'

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
                                        <MainNav/>
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
                                                <MainNavMobile hideMenu={this.hideMenu}/>
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