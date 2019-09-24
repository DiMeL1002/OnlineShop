import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Advantages from '~c/advantages/advantages'
import ProductCharacteristics from '~c/product/productCharacteristics'
import ProductDescription from '~c/product/productDescription'
import ProductReviews from '~c/product/productReviews'

import './productBody.scss'

export default class extends React.Component {
    state = { showedMenu: <ProductDescription /> }

    switchMenu = (menuItem) => {
        switch (menuItem) {
            case 'description':
                this.setState({showedMenu: <ProductDescription />});
                break;
            case 'characteristics':
                this.setState({showedMenu: <ProductCharacteristics />});
                break;
            case 'reviews':
                this.setState({showedMenu: <ProductReviews />});
                break;
        }
    }

    render() {
        return (
            <section className="product-body">
                <header className="product-body__header">
                    <div className="product-body__nav">
                        <ul className="product-body__list">
                            <li className="product-body__item">
                                <a className="product-body__link"
                                    onClick={() => this.switchMenu('description')}
                                >
                                    Описание
                                </a>
                            </li>
                            <li className="product-body__item">
                                <a className="product-body__link"
                                    onClick={() => this.switchMenu('characteristics')}
                                >
                                    Характеристики
                                </a>
                            </li>
                            <li className="product-body__item">
                                <a className="product-body__link"
                                    onClick={() => this.switchMenu('reviews')}
                                >
                                    Отзывы
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="product-body__body">
                    <TransitionGroup>
                        <CSSTransition classNames="product-body__description"
                                       timeout={500}
                                       key={Math.random()}
                        >
                            {this.state.showedMenu}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <Advantages />
            </section>
        )
    }
}