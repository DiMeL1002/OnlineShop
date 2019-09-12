import React from 'react'
import { Link } from 'react-router-dom'
import {routesMap} from '~/routes/routes'

import './headerLogo.scss'

export default function() {
    return (
        <div className="logo">
            <Link className="logo__link" to={routesMap.home}>
                <img className="logo__img"
                    src="./img/logo.png"
                    alt="Логотип Giant"
                ></img>
            </Link>
        </div>
    )
}