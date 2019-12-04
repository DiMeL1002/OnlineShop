import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import PageContainer from '~p/PageContainer/PageContainer'

import './News.scss'

export default function() {
    let newsData = getNews();
    let news = [];

    newsData.forEach((item) => {
        news.push(
            <div className="news__item" key={`news-item-${item.title}`}>
                <Link className="news__link" to={item.url}>
                    <img className="news__img" src={item.img} alt={item.title} />
                    <h3 className="news__item-title">{item.title}</h3>
                </Link>
            </div>
        )
    })
    return (
        <PageContainer>
            <section className="news">
                <Helmet>
                    <title>Giant - новости</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Новости"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - новости" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Новости"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/news" />
                </Helmet>
                
                <h1 className="news__title">Новости</h1>
                <div className="news__body">
                    <div className="news__items">
                        {news}
                    </div>
                </div>
            </section>
        </PageContainer>
    )
}

let getNews= () => {
    return [
        {
            title: "Скидка до 50%",
            img: './img/news/news1.jpg',
            url: './news',
        },
        {
            title: "Чехол в подарок",
            img: './img/news/news2.jpg',
            url: './news',
        },
        {
            title: "Скидка до 40%",
            img: './img/news/news1.jpg',
            url: './news',
        },
        {
            title: "Чехол в подарок1",
            img: './img/news/news2.jpg',
            url: './news',
        },
        {
            title: "Скидка до 60%",
            img: './img/news/news1.jpg',
            url: './news',
        },
    ]
}