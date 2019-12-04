import React from 'react'
import Slider from "react-slick"
import { withRouter } from 'react-router-dom'
import { inject} from 'mobx-react';

import { urlBuilder } from '~/routes/routes'
import Button from '~c/buttons/Button/Button'

import './Banner.scss'

import PrevIcon from '~/static/img/banner-prev.svg';
import NextIcon from '~/static/img/banner-next.svg';

@inject('stores') class Banner extends React.Component {

    setSliderRef = (element) => {
        this.slider = element;
    }

    nextSlide = () => {
        this.slider.slickNext();
    }

    prevSlide = () => {
        this.slider.slickPrev();
    }

    goToProduct = (id) => {
        this.props.history.push(urlBuilder('product', {id}))
    }

    render() {
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            customPaging: i => (
                <button className="banner__dot"></button>
            ),
        };

        let slidesData = this.props.stores.banner.items;
        let slides = [];

        slidesData.forEach((banner) => {
            slides.push(
                <div key={`slide-${banner.title}`}>
                    <div className="banner__slide">
                        <div className="banner__col">
                            <div className="banner__title">{banner.title}</div>
                            <div className="banner__description">{banner.description}</div>
                            <Button
                                type="button"
                                theme="white"
                                size="s"
                                text="Выбрать"
                                onClick={() => this.goToProduct(banner.id)}
                            />
                        </div>
                        <div className="banner__col_img">
                            <img className="banner__img" src={banner.img} />
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="banner">
                <button className="banner__prev" onClick={this.prevSlide}>
                    <PrevIcon className="banner__arrow" />
                </button>
                <button className="banner__next" onClick={this.nextSlide}>
                    <NextIcon className="banner__arrow" />
                </button>
                <Slider ref={this.setSliderRef} {...sliderSettings}>
                    {slides}
                </Slider>
            </div>
        )
    }
}

export default withRouter(Banner);