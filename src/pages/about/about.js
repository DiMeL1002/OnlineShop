import React from 'react'
import {Helmet} from "react-helmet";

import PageContainer from '~p/PageContainer/PageContainer'

import './About.scss'

export default function() {
    return (
        <PageContainer>
            <section className="about-page">
                <Helmet>
                    <title>Giant - о компании</title>
                    <meta name="description"
                        content="Giant - Информация для клиентов. Раздел - О компании"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Giant - о компании" />
                    <meta property="og:description"
                        content="Giant - Информация для клиентов. Раздел - О компании"
                    />
                    <meta property="og:image" content="https://giant.ru/img/logo.png" />
                    <meta property="og:url" content="https://giant.ru/about" />
                </Helmet>
                
                <h1 className="about-page__title">О компании</h1>
                <p>
                    Интернет-магазин Giant занимается продажей различных современных гаджетов. 
                    Компания работает на рынке уже больше 15 лет. За это время мы составили 
                    уникальный ассортимент товаров на любой вкус и кошелек.
                </p>
                <h2 className="about-page__title-h2">Наш ассортимент</h2>
                <p>
                    В каталог не попадают «случайные» товары. Мы сотрудничаем с известными во всем 
                    мире производителями, тщательно анализируем рынок и выставляем на продажу 
                    гаджеты, завоевавшие положительные отклики у покупателей.
                    Это гаджеты таких легендарных брендов как:
                </p>
                <ul className="about-page__list">
                    <li className="about-page__item">Samsung</li>
                    <li className="about-page__item">Apple</li>
                    <li className="about-page__item">LG</li>
                    <li className="about-page__item">Meizu</li>
                    <li className="about-page__item">Xiaomi</li>
                </ul>
                <p>
                    Мы продаем продукцию только высокого качества, с учетом самых современных 
                    тенденций. Гарантируем надежность, индивидуальный подход к каждому клиенту 
                    и высокое качество предлагаемого товара. При этом здесь дается полная 
                    гарантия того, что товар, который вы планируете купить, обладает самым 
                    высоким качеством. На сайте каждый может найти контактную информацию о 
                    магазине и в случае возникновения какого-либо вопроса, связанного с работой 
                    приобретенного устройства либо вопроса, касающегося покупки. Менеджеры 
                    компании подробно разъяснят все интересующие вопросы и поделятся 
                    необходимыми рекомендациями и советами.
                </p>
                <h2 className="about-page__title-h2">Причины выбрать Giant:</h2>
                <ul className="about-page__list">
                    <li className="about-page__item">
                        Огромный обновляемый ассортимент. На сайте в удобном электронном 
                        каталоге представлены телефоны, планшеты и многое другое.
                    </li>
                    <li className="about-page__item">
                        Уверенность в качестве. Мы продаем только фирменные товары с 
                        сертификатами и предоставляем на них гарантию.
                    </li>
                    <li className="about-page__item">
                        Квалифицированный персонал. Здесь работают знатоки своего дела, 
                        которые любят профессию и прекрасно разбираются в особенностях 
                        представленного товара. В магазине всегда можно получить совет по 
                        выбору, информацию о характеристиках и особенностях эксплуатации 
                        заинтересовавшей модели.
                    </li>
                    <li className="about-page__item">
                        Привлекательная стоимость и регулярные распродажи для дополнительной выгоды.
                        Для оптовиков — специальные условия заказа.
                    </li>
                    <li className="about-page__item">
                        Курьерская доставка по Москве уже в день покупки 
                        (от 5000 рублей — бесплатно), а также отправление товаров в регионы.
                    </li>
                    <li className="about-page__item">
                        Собственный сервисный центр. Не нужно искать мастера, наши специалисты 
                        произведут все необходимые работы по ремонту или замене деталей 
                        на высшем уровне.
                    </li>
                </ul>
            </section>
        </PageContainer>
    )
}