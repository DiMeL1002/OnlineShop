import React from 'react'

import Advantages from '~c/advantages/advantages'

import './contacts.scss'

export default function() {
    return (
        <section className="contacts-page">
            <div className="container">
                <h1 className="contacts-page__title">Контакты</h1>
                <p className="contacts-page__text">
                    <b>Телефон: </b>8(777) 777-77-77, 8(777) 777-77-77 (бесплатно по всей России)
                </p>
                <p className="contacts-page__text">
                    <b>E-mail: </b><a href="mailto:sale@giant.ru">sale@giant.ru</a>
                </p>
                <p  className="contacts-page__text">
                    <b>Заказы и консультация по телефону:</b> 10:00-20:00 без выходных
                </p>
                <p className="contacts-page__text">
                    <b>Самовывоз: </b>по будням 10:00-19:00, в субботу 12:00-17:00
                </p>
                <p className="contacts-page__text">
                    <b>Адрес: </b>г. Санкт-Петербург, Кушелевская дорога 7к3
                </p>
                <div className="contacts-page__advantages">
                    <Advantages />
                </div>
            </div>
        </section>
    )
}