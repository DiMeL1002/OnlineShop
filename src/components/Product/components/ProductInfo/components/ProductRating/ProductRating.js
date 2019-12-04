import React from 'react'
import PropTypes from 'prop-types'

import './productRating.scss'

import StarIcon from '~/static/img/star.svg'

export default function ProductRating(props) {
    let starsCount = 5;
    let activeCount = 0;
    let stars = [];

    for (let i = 0; i < starsCount; i++) {
        if (activeCount < props.rating) {
            stars.push( 
                <StarIcon className="product-rating__star product-rating__star_active"
                          key={`product-star-${i}`}
                />
            )
        } else {
            stars.push(
                <StarIcon className="product-rating__star" key={`product-star-${i}`} />
            )
        }

        activeCount++;
    }

    return (
        <div className="product-rating">
            <div>
                {stars}
            </div>
        </div>
    )
}

ProductRating.defaultProps = { rating: 0 };

ProductRating.propTypes = { rating: PropTypes.number };