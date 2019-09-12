import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

export default class extends React.Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }
    
    render() {
        return (
            <React.Fragment>
                <button className="button" type={this.props.type}>
                    {this.props.text}
                </button>
            </React.Fragment>
        )
    }
}