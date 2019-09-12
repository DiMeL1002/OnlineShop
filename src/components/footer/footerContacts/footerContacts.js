import React from 'react';

import './footerContacts.scss'

export default function() {
    return (
        <div className="footer-contacts">
            <div className="footer-contacts__phones">
                <a className="footer-contacts__phone" href="tel:87777777777">
                    8 (777) 777-77-77
                </a>
                <span className="footer-contacts__text">Звонок бесплатный</span>
                <span className="footer-contacts__text">8 (777) 777-77-77</span>
            </div>
            <span className="footer-contacts__address">
                <span>г. Санкт-Петербург,</span>
                <span>Кушелевская дорога 7к3</span>
            </span>
            <a className="footer-contacts__email" href="mailto:sale@online-mag.ru">
                sale@online-mag.ru
            </a>
        </div>
    )
}