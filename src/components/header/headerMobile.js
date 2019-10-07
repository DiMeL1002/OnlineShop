import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom'

import { routesMap } from '~/routes/routes';
import Sandwich from '~c/buttons/sandwich/sandwich'
import Logo from '~c/header/headerLogo'
import MainNavMobile from '~c/header/headerProductsNav/headerProductsNavMobile'
import Search from '~c/header/headerSearch'

import './headerMobile.scss'

import SearchIcon from "~/static/img/search.svg";
import UserIcon from "~/static/img/user.svg";
import BasketIcon from "~/static/img/basket.svg";

class headerMobile extends React.Component {

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

    goToBasket = () => {
        this.props.history.push(routesMap.basket);
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
                    <BasketIcon className="header-mobile__icon" onClick={this.goToBasket} />
                </div>
                <CSSTransition in={this.state.showMenu}
                               timeout={800}
                               unmountOnExit
                               classNames="header-mobile__main-nav-animate"
                >
                    <div className="header-mobile__main-nav-mobile">
                        <MainNavMobile hideMenu={this.hideMenu}/>
                    </div>
                </CSSTransition>
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

export default withRouter(headerMobile);