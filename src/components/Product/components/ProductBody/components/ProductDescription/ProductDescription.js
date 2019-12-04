import React from 'react'

import './ProductDescription.scss'

export default function() {
    let DescriptionData = getDescriptionData();
    let descriptions = [];

    for (let key in DescriptionData) {
        descriptions.push (
            <li className="product-description__item" key={`product-description-${key}`}>
                <p><b>{`${key}: `}</b>{DescriptionData[key]}</p>
            </li>
        )
    }

    return (
        <div className="product-description">
            <h2 className="product-description__title">Описание</h2>
            <ul className="product-description__list">
                {descriptions}
            </ul>
        </div>
    )
}

function getDescriptionData() {
    return {
        'Тип': 'смартфон',
        'Кол-во SIM-карт': '2, nano SIM',
        'Экран': '6.67 дюйм., 3120x1440',
    }
}