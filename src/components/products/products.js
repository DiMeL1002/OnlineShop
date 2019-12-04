import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import MediaQuery from 'react-responsive'
import { CSSTransition } from 'react-transition-group';

import Button from '~c/buttons/Button/Button'
import ProductCart from '~c/ProductCart/ProductCart'
import Filter from '~c/Filter/Filter'
import FilterMobile from '~c/Filter/FilterMobile'

import './Products.scss'

@inject('stores') @observer class Products extends React.Component {
    state = { showFilters: false }

    showFilterMenu = () => {
        this.setState({ showFilters: true });
    }

    hideFilterMenu = () => {
        this.setState({ showFilters: false });
    }

    render() {
        let productsStore = this.props.stores.products;

        let products = productsStore.items.map((product) => {
            return <ProductCart productId={product.id} key={`phone-${product.id}`} />
        })

        return (
            <div className="products">
                <MediaQuery maxDeviceWidth={992}>
                    <div className="products__button">
                        <Button
                            type="button"
                            size="s"
                            text="Фильтры"
                            theme="gray"
                            onClick = {this.showFilterMenu}
                        />
                    </div>
                </MediaQuery>

                <div className="products__body">
                    <aside className="products__filter">
                        <MediaQuery minDeviceWidth={993}>
                            <Filter />
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={992}>
                            <CSSTransition
                                in={this.state.showFilters}
                                timeout={500}
                                unmountOnExit
                                classNames="products__filter-animate"
                            >
                                <FilterMobile hideFilterMenu={this.hideFilterMenu} />
                            </CSSTransition>
                        </MediaQuery>
                    </aside>

                    <div className="products__main">
                        <div className="products__catalog">
                            {products}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Products);