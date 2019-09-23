import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes/routes';

import Button from '~c/buttons/button/button'

import './productCart.scss'

export default class extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="product-cart">
                <Link className="product-cart__link" to={this.props.link}>
                    <img className="product-cart__img" src={this.props.img} />
                    <span className="product-cart__text">
                        {this.props.name}
                    </span>
                </Link>
                <span className="product-cart__price">{this.props.price}</span>
                <Button type="button" text="Купить" theme="reverse" />
            </div>
        )
    }
}