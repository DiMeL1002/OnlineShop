import React from 'react'

import './Error404.scss'

export default class extends React.Component {
    render() {
        return (
            <div className="error404">
                <span className="error404__code">404</span>
                <h1 className="error404__title">Страница не найдена</h1>
                <p>По ссылке, которую вы пытались открыть, страницы не оказалось. Введите правильный адрес страницы.</p>
            </div>
        )
    }
}