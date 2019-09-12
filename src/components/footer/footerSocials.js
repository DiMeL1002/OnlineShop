import React from 'react';

import './footerSocials.scss'

export default function() {
    return (
        <div className="socials">
            <ul className="socials__list">
                <li className="socials__item">
                    <a className="socials__link">
                        <img className="socials__img"
                             src="./img/instagram.svg"
                             alt="иконка Instagram"
                        />
                        <span className="socials__name">Instagram</span>
                    </a>
                </li>
                <li className="socials__item">
                    <a className="socials__link">
                        <img className="socials__img"
                             src="./img/facebook.svg"
                             alt="иконка Facebook"
                        />
                        <span className="socials__name">Facebook</span>
                    </a>
                </li>
                <li className="socials__item">
                    <a className="socials__link">
                        <img className="socials__img"
                             src="./img/vk.svg"
                             alt="иконка Вконтакте"
                        />
                        <span className="socials__name">Вконтакте</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}