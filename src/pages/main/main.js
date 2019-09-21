import React from 'react'

import Banner from '~c/sliders/banner'
import Advantage from '~c/advantage/advantage'
import NewsPreview from '~c/news/newsPreview'
import ReviewsPreview from '~c/reviews/reviewsPreview'
import BrandsPreview from '~c/brands/brandsPreview'

import './main.scss'

export default class extends React.Component {
    render() {
        return (
            <div className="main-page">
                <div className="main-page__s-banner">
                    <div className="container banner__container">
                        <Banner />
                    </div>
                </div>
                <div className="main-page__s-advantages">
                    <div className="container">
                        <div className="main-page__advantages">
                            <Advantage img="./img/warranty.svg"
                                    title="Гарантия"
                                    description="качества всех товаров"
                            />
                            <Advantage img="./img/delivery.svg"
                                    title="Доставка"
                                    description="по Москве и области"
                            />
                            <Advantage img="./img/payment.svg"
                                    title="Оплата"
                                    description="онлайн и наличными"
                            />
                        </div>
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