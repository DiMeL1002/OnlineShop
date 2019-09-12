import React from 'react'
import PropTypes from 'prop-types'

import './input.scss'

export default class extends React.Component {
    static defaultProps = {
        value: '',
        placeholder: '',
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
    }

    render() {
        return (
            <React.Fragment>
                <input className="input"
                       type={this.props.type}
                       name={this.props.name}
                       defaultValue={this.props.value}
                       placeholder={this.props.placeholder}
                >
                </input>
            </React.Fragment>
        )
    }
}