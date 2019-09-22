import React from 'react';

import './brandsPreview.scss'

export default function() {
    let brands = [
        {
            name: "Samsung",
            img: "./img/brands/samsung.jpg",
        },
        {
            name: "Apple",
            img: "./img/brands/apple.jpg",
        },
        {
            name: "LG",
            img: "./img/brands/lg.jpg",
        },
        {
            name: "Meizu",
            img: "./img/brands/meizu.jpg",
        },
        {
            name: "Xiaomi",
            img: "./img/brands/xiaomi.jpg",
        },
    ]

    let items = [];

    brands.forEach((brand) => {
        items.push(
            <div className="brands-preview__item" key={`brand-${brand.name}`}>
                <img className="brands-preview__img"
                     src={brand.img}
                     alt={brand.name}
                />
                <span className="brands-preview__name">{brand.name}</span>
            </div>
        )
    })

    return (
        <div className="brands-preview">
            <h2 className="brands-preview__title">Бренды</h2>
            <div className="brands-preview__items">
                {items}
            </div>
            <div className="brands-preview__footer">
                <a className="brands-preview__link">Все бренды</a>
            </div>
        </div>
    )
}