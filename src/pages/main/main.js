import React from 'react'

import Banner from '~c/sliders/banner'
import Advantages from '~c/advantages/advantages'
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