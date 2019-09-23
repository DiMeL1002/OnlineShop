import React from 'react';

import './footerSocials.scss'

export default function() {
    let socialData = getSocialsData();
    let socials = [];

    socialData.forEach((item) => {
        socials.push (
            <li className="socials__item" key={`footer-social-${item.name}`}>
                <a className="socials__link" href={item.link}>
                    <img className="socials__img"
                         src={item.img}
                         alt={item.alt}
                    />
                    <span className="socials__name">{item.name}</span>
                </a>
            </li>
        )
    });

    return (
        <div className="socials">
            <ul className="socials__list">
                {socials}
            </ul>
        </div>
    )
}

function getSocialsData() {
    return [
        {
            name: 'Instagram',
            link: 'instagram.com',
            img: '/img/instagram.svg',
            alt: 'Instagram'
        },
        {
            name: 'Facebook',
            link: 'facebook.com',
            img: '/img/facebook.svg',
            alt: 'Facebook'
        },
        {
            name: 'Вконтакте',
            link: 'vk.com',
            img: '/img/vk.svg',
            alt: 'Вконтакте'
        },
    ];
}