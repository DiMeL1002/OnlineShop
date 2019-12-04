import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

export default class extends React.Component {
    static defaultProps = {
        value: '',
        placeholder: '',
        onChange: function() {},
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
    }

    render() {
        return (
            <React.Fragment>
                <input className="input"
                       type={this.props.type}
                       name={this.props.name}
                       defaultValue={this.props.value}
                       placeholder={this.props.placeholder}
                       onChange={this.props.onChange}
                >
                </input>
            </React.Fragment>
        )
    }
}