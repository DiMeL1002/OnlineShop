import React from 'react'
import PropTypes from 'prop-types'

import './advantage.scss'

let Advantage = (props) => {
    return (
        <div className="advantage">
            <img className="advantage__img" src={props.img} />
            <div className="advantage__text">
                <span className="advantage__title">{props.title}</span>
                <span className="advantage__description">{props.description}</span>
            </div>
        </div>
    )
}

Advantage.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Advantage;