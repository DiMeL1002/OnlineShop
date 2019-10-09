import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './modalContainer.scss'

import ModalCloseIcon from "~/static/img/close.svg";

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = {
        title: PropTypes.string,
        hideModal: PropTypes.func,
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.hadleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hadleClickOutside);
    }

    hadleClickOutside = () => {
        let domNode = ReactDOM.findDOMNode(this);

        if (this.isNotTargetOfClick(domNode, event)) {
            this.props.hideModal();
        }
    }

    isNotTargetOfClick = (elem, event) => {
        return !elem || !elem.contains(event.target);
    }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <div className="modal">
                <div className="modal__header">
                    <h1 className="modal__title">{this.props.title}</h1>
                    <ModalCloseIcon className="modal__close-icon" onClick={this.hideModal} />
                </div>
                <div className="modal__body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}