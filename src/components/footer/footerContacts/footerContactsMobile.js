import React from 'react';

import './footerContactsMobile.scss'

export default function() {
    return (
        <div className="footer-contacts-mobile">
            <div className="footer-contacts-mobile__items">
                <a className="footer-contacts-mobile__phone" href="tel:87777777777">
                    8 (777) 777-77-77
                </a>
                <span className="footer-contacts-mobile__text">Звонок бесплатный</span>
            </div>
            <div className="footer-contacts-mobile__items">
                <span className="footer-contacts-mobile__text">8 (777) 777-77-77</span>
                <a className="footer-contacts-mobile__email" href="mailto:sale@giant.ru">
                    sale@giant.ru
                </a>
            </div>
        </div>
    )
}