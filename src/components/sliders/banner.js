import React from 'react';
import Slider from "react-slick";

import './banner.scss'

import PrevIcon from '~/static/img/banner-prev.svg';
import NextIcon from '~/static/img/banner-next.svg';

export default class extends React.Component {

    setSliderRef = (element) => {
        this.slider = element;
    }

    nextSlide = () => {
        this.slider.slickNext();
    }

    prevSlide = () => {
        this.slider.slickPrev();
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

        let slidesData = getSlidesData();
        let slides = [];

        slidesData.forEach((banner) => {
            slides.push(
                <div key={`slide-${banner.title}`}>
                    <div className="banner__slide">
                        <div className="banner__col">
                            <div className="banner__title">{banner.title}</div>
                            <div className="banner__description">{banner.description}</div>
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

function getSlidesData() {
    return [
        {
            title: "Xiaomi Mi Band 3",
            description: "Лучший фитнес браслет 2019 года",
            img: "/img/banner/banner1.png",
        },
        {
            title: "Samsung Galaxy Tab A 10.1 SM-T515",
            description: "Доступный и стильный",
            img: "/img/banner/banner2.png",
        },
        {
            title: "Xiaomi Redmi Note 7",
            description: "Лучший бюджетный телефон",
            img: "/img/banner/banner3.png",
        },
    ]
}