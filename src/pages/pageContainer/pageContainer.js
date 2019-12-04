import React from 'react'

import Advantages from '~c/Advantages/Advantages'

import './pageContainer.scss'

export default function(props) {
    return (
        <div className="page-container">
            <div className="container">
                {props.children}
                <div className="page-container__advantages">
                    <Advantages />
                </div>
            </div>
        </div>
    )
}