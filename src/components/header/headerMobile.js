import React from 'react';

import Sandwich from '~c/buttons/sandwich/sandwich'
import Logo from '~c/header/headerLogo'
import MainNavMobile from '~c/header/headerProductsNav/headerProductsNavMobile'
import Search from '~c/header/headerSearch'

import './headerMobile.scss'

import SearchIcon from "~/static/img/search.svg";
import UserIcon from "~/static/img/user.svg";
import BasketIcon from "~/static/img/basket.svg";

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
            <header className="header-mobile">
                <div className="header-mobile__menu-button" onClick={this.showMenu}>
                    <Sandwich theme={'dark'} />
                </div>
                <div className="header-mobile__logo" >
                    <Logo />
                </div>
                
                <div className="header-mobile__icons">
                    <SearchIcon className="header-mobile__icon" onClick={this.showSearchModal} />
                    <UserIcon className="header-mobile__icon" />
                    <BasketIcon className="header-mobile__icon" />
                </div>
                {
                    this.state.showMenu && (
                        <div className="header-mobile__main-nav-mobile">
                            <MainNavMobile hideMenu={this.hideMenu}/>
                        </div>
                    )
                }
                {
                    this.state.showSearchModal && (
                        <div className="header-mobile__search">
                            <Search hideSearchModal={this.hideSearchModal} />
                        </div>
                    )
                }
            </header>
        )
    }
}