import React from 'react';
import { withRouter } from 'react-router-dom'

import { routesMap } from '~/routes/routes';

import './reviewsPreview.scss'

let reviewsPreview = (props) => {
    let goToReviews = () => {
        props.history.push(routesMap.reviews);
    }

    return (
        <div className="reviews-preview">
            <h2 className="reviews-preview__title">Отзывы</h2>
            <div className="reviews-preview__review">
                <span className="reviews-preview__text">
                    Купил у вас в середине лета телефоны для себя, жены и дочери. 
                    Понравился ваш выбор и цены. Мне все телефоны обошлись не очень дорого. 
                    И доставка у вас очень быстрая, приятно.
                </span>
                <span className="reviews-preview__author">Павел</span>
            </div>
            <div className="reviews-preview__footer">
                <a className="reviews-preview__link" onClick={goToReviews}>
                    Все отзывы
                </a>
            </div>
        </div>
    )
}

export default withRouter(reviewsPreview);