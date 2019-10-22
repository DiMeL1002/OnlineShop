import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

export default class extends React.Component {
    static defaultProps = {
        theme: '',
        size: '',
        onClick: () => {},
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        theme: PropTypes.string,
        size: PropTypes.string,
        onClick: PropTypes.func,
    }
    
    render() {
        let className = 'button'

        switch (this.props.theme) {
            case 'reverse':
                className += ` button_theme_reverse`;
                break;
            case 'gray':
                className += ` button_theme_gray`;
                break;
            case 'white':
                className += ` button_theme_white`;
                break;
        }

        switch (this.props.size) {
            case 's':
                className += ` button_size_s`;
                break;
            case 'm':
                className += ` button_size_m`;
                break;
        }

        return (
            <React.Fragment>
                <button className={className}
                        type={this.props.type}
                        onClick={this.props.onClick}
                >
                    {this.props.text}
                </button>
            </React.Fragment>
        )
    }
}