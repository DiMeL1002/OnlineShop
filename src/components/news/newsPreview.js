import React from 'react';

import './newsPreview.scss'

export default function() {
    return (
        <div className="news-preview">
            <h2 className="news-preview__title">Новости</h2>
            <div className="news-preview__items">
                <a className="news-preview__item">
                    <img className="news-preview__img" src='./img/news/news1.jpg' />
                    <span className="news-preview__text">Скидка до 50%</span>
                </a>
                <a className="news-preview__item">
                    <img className="news-preview__img" src='./img/news/news2.jpg' />
                    <span className="news-preview__text">Чехол в подарок</span>
                </a>
            </div>
            <a className="news-preview__link">Все новости</a>
        </div>
    )
}