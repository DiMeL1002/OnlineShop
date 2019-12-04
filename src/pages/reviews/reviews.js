import React from 'react'
import {Helmet} from "react-helmet";

import PageContainer from '~p/PageContainer/PageContainer'

import './Reviews.scss'

export default function() {
    let reviewsFromAPI = reviewsAPI();

    let reviews = [];

    reviewsFromAPI.forEach((review) => {
        reviews.push (
            <div className="reviews-page__review" key={`review-${review.id}`}>
                <p className="reviews-page__date">{review.date}</p>
                <p className="reviews-page__name">{review.name}</p>
                <p className="reviews-page__text">{review.text}</p>
            </div>
        )
    })
    
    return (
        <PageContainer>
            <section className="reviews-page">
                <Helmet>
                    <title>Giant - отзывы</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Отзывы"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - отзывы" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Отзывы"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/reviews" />
                </Helmet>
                
                <h1 className="reviews-page__title">Отзывы</h1>
                {reviews}
            </section>
        </PageContainer>
    )
}

function reviewsAPI() {
    return [
        {
            id: 1,
            date: '06.09.2015',
            name: 'Павел',
            text: 'Купил у вас в середине лета телефоны для себя, жены и дочери. Понравился ваш выбор и цены. Мне все телефоны обошлись не очень дорого. И доставка у вас очень быстрая, приятно.',
        },
        {
            id: 2,
            date: '06.09.2015',
            name: 'Павел',
            text: 'Купил у вас в середине лета телефоны для себя, жены и дочери. Понравился ваш выбор и цены. Мне все телефоны обошлись не очень дорого. И доставка у вас очень быстрая, приятно.',
        },
        {
            id: 3,
            date: '06.09.2015',
            name: 'Павел',
            text: 'Купил у вас в середине лета телефоны для себя, жены и дочери. Понравился ваш выбор и цены. Мне все телефоны обошлись не очень дорого. И доставка у вас очень быстрая, приятно.',
        },
        {
            id: 4,
            date: '06.09.2015',
            name: 'Павел',
            text: 'Купил у вас в середине лета телефоны для себя, жены и дочери. Понравился ваш выбор и цены. Мне все телефоны обошлись не очень дорого. И доставка у вас очень быстрая, приятно.',
        },
    ]
}