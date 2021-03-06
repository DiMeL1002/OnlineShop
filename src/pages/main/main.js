import React from 'react'
import {Helmet} from "react-helmet";

import Banner from '~c/sliders/Banner/Banner'
import Advantages from '~c/Advantages/Advantages'
import NewsPreview from '~c/NewsPreview/NewsPreview'
import ReviewsPreview from '~c/ReviewsPreview/ReviewsPreview'
import BrandsPreview from '~c/BrandsPreview/BrandsPreview'

import './Main.scss'

export default class extends React.Component {
    render() {
        return (
            <div className="main-page">
                <Helmet>
                    <title>Giant - магазин цифровой техники</title>
                    <meta name="description" 
                          content="Giant - Интернет магазин цифровой техники. Телефоны, планшеты, ноутбуки, гаджеты и многое другое."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - магазин цифровой техники" />
                    <meta property="og:description"
                          content="Giant - Интернет магазин цифровой техники. Телефоны, планшеты, ноутбуки, гаджеты и многое другое."
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru" />
                </Helmet>
                <div className="main-page__s-banner">
                    <div className="container banner__container">
                        <Banner />
                    </div>
                </div>
                <div className="main-page__s-advantages">
                    <div className="container">
                        <Advantages />
                    </div>
                </div>
                <div className="main-page__s-information">
                    <div className="container">
                        <div className="main-page__information">
                            <div className="main-page__information-item">
                                <NewsPreview />
                            </div>
                            <div className="main-page__information-item">
                                <ReviewsPreview />
                            </div>
                            <div className="main-page__information-item">
                                <BrandsPreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}