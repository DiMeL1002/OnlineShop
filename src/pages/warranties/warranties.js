import React from 'react'

import PageContainer from '~p/pageContainer/pageContainer'

import './warranties.scss'

export default function() {
    return (
        <PageContainer>
            <section className="warranties-page">
                <h1 className="warranties-page__title">Гарантии</h1>
                <p className="warranties-page__text">
                    Бесплатное сервисное обслуживание в течении 1-го года на любую технику 
                    в нашем интернет-магазине!
                </p>
                <p className="warranties-page__text">
                    А также мы предоставляем Вам 14 дней на проверку качества техники!
                </p>
                <p className="warranties-page__text">
                    У нас есть товары как с гарантией производителя, так и с гарантией 
                    нашего сервисного центра. В обоих случаях Ваша любимая техника будет 
                    бесплатно отремонтирована в течение всего гарантийного срока.
                </p>
                <p className="warranties-page__text">
                    Обращаем Ваше внимание, что гарантия не распространяется на аксессуары, 
                    включая чехлы, зарядные устройства и т.д..
                </p>
                <p>
                    Обратите внимание! Если дефект возник в ходе эксплуатации, при неправильном 
                    обращении с техникой, если покупатель не выполнил требования производителя, 
                    данный случай не является гарантийным!
                </p>
            </section>
        </PageContainer>
    )
}