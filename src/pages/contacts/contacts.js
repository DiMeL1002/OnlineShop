import React from 'react'
import {Helmet} from "react-helmet";

import PageContainer from '~p/pageContainer/pageContainer'

import './contacts.scss'

export default function() {
    return (
        <PageContainer>
            <section className="contacts-page">
                <Helmet>
                    <title>Giant - контакты</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Контакты"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - контакты" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Контакты"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/contacts" />
                </Helmet>
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
            </section>
        </PageContainer>
    )
}