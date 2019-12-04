import React from 'react'
import PropTypes from 'prop-types'

import Filter from '~c/Filter/Filter'

import './FilterMobile.scss'

import CloseIcon from "~/static/img/close.svg";

FilterMobile.propType = { hideFilterMenu: PropTypes.func.isRequired }

function FilterMobile(props) {
    let handleClick = () => {
        props.hideFilterMenu();
    }

    return (
        <div className="filter-mobile">
            <div className="filter-mobile__close">
                <CloseIcon
                    className="filter-mobile__close-icon"
                    onClick={handleClick}
                />
            </div>

            <Filter />
        </div>
    )
}

export default FilterMobile;