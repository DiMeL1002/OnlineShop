import React from 'react'
import MediaQuery from 'react-responsive'
import {Helmet} from "react-helmet";

import PageContainer from '~p/PageContainer/PageContainer'

import './Delivery.scss'

export default function() {
    let table = (
        <React.Fragment>
            <tr>
                <th>Сумма заказа</th>
                <th>менее 4000 руб</th>
                <th>от 4000 до 5000 руб</th>
                <th>от 5000 руб</th>
            </tr>
            <tr>
                <th>Стоимость доставки</th>
                <th>400 руб</th>
                <th>200 руб</th>
                <th>бесплатно</th>
            </tr>
        </React.Fragment>
    );

    let verticalTable = (
        <React.Fragment>
            <tr>
                <th>Сумма заказа</th>
                <th>Стоимость доставки</th>
            </tr>
            <tr>
                <th>менее 4000 руб</th>
                <th>400 руб</th>
            </tr>
            <tr>
                <th>от 4000 до 5000 руб</th>
                <th>200 руб</th>
            </tr>
            <tr>
                <th>от 5000 руб</th>
                <th>бесплатно</th>
            </tr>
        </React.Fragment>
    );

    return (
        <PageContainer>
            <section className="delivery-page">
                <Helmet>
                    <title>Giant - доставка</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - Доставка"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - доставка" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - Доставка"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/delivery" />
                </Helmet>
                <h1 className="delivery-page__title">Доставка и оплата</h1>
                <p className="delivery-page__text">
                    Вы можете оформить заказ самостоятельно на сайте либо по телефону.
                </p>
                <p className="delivery-page__text">
                    Заказы оформленные до 14 часов дня могут быть доставлены в день 
                    заказа или на следующий день. Возможна доставка в выходные дни.
                </p>
                <p className="delivery-page__text">
                    Заказы оформленные в субботу до 14.00, могут быть доставлены в день 
                    заказа или в любой удобный Вам день.
                </p>
                <p className="delivery-page__text">
                    Заказы оформленные в воскресенье, доставляются на следующий день, 
                    с понедельника по следующее воскресенье включительно.
                </p>
                <p className="delivery-page__text">
                    Заказы оформленные после 14 часов дня доставляются на следующий день. 
                    Возможна срочная доставка, по договоренности, стоимость – 600 рублей.
                </p>
                <p>
                    После оформления заказа на сайте с Вами свяжется наш менеджер для 
                    уточнения деталей заказа и времени доставки.
                </p>
                <h2 className="delivery-page__title-h2">Доставка по Москве и области</h2>
                <p><b>Доставка по Москве в пределах МКАД:</b></p>
                <table className="delivery-page__table" 
                        cellPadding="18"
                        cellSpacing="0"
                        border="1"
                >
                    <tbody>
                        <MediaQuery minDeviceWidth={576}>
                            {table}
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={575}>
                            {verticalTable}
                        </MediaQuery>
                    </tbody>
                </table>
                <p>
                    <b>Доставка по Москве и области, за МКАД </b> 
                    оплачивается из расчета 1км = 30 рублей, минимальная сумма выезда 
                    за МКАД – 100 рублей.
                </p>
                <h2 className="delivery-page__title-h2">Доставка во все регионы России</h2>
                <p>
                    Осуществляется посредством транспортных компаний: Деловые Линии, ПЭК, EMS 
                    Почта России. Вы можете выбрать любую другую транспортную компанию по своем 
                    усмотрению, представительство которой находится в Москве.
                </p>
                <h2 className="delivery-page__title-h2">Оплата</h2>
                <p className="delivery-page__text">
                    На данный момент оплата принимается наличными при получении товара.
                </p>
                <p>
                    При отказе от товара надлежащего качества потребитель оплачивает 
                    согласно п.3 ст.497 ГК РФ стоимость доставки в размере 400 рублей 
                    за выполненную работу курьера.
                </p>
            </section>
        </PageContainer>
    )
}