import React from 'react'
import PropTypes from 'prop-types'

import './HeaderSearch.scss'

import CloseIcon from "~/static/img/close.svg";

export default class extends React.Component {

    static propTypes = { hideSearchModal: PropTypes.func.isRequired }

    handleClick = () => {
        this.props.hideSearchModal();
    }

    render() {
        return (
            <div className="search">
                <form className="search__form">
                    <div className="search__input-wrapper">
                        <input className="search__input"
                            type="text"
                            placeholder="Я хочу купить..."
                        ></input>
                        <div className="search__close">
                            <CloseIcon className="search__close-icon"
                                        onClick={this.handleClick}
                            />
                        </div>
                    </div>
                    <button className="search__button">Найти</button>
                </form>
            </div>
        )
    }
}