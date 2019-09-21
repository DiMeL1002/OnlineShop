import React from 'react';

import './reviewsPreview.scss'

export default function() {
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
            <a className="reviews-preview__link">Все отзывы</a>
        </div>
    )
}