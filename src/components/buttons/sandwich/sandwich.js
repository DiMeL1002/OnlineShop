import React from 'react';
import PropTypes from 'prop-types';

import './sandwich.scss' 

export default class extends React.Component {
    static defaultProps = {
        isActive: false,
        theme: '',
    }
    
    static propTypes = {
        isActive: PropTypes.bool,
        theme: PropTypes.string,
    }

    render() {
        let className = 'sandwich';
            if (this.props.isActive) {
                className += ` sandwich_active`;
            }

            if (this.props.theme === 'dark') {
                className += ` sandwich_theme_dark`;
            }

        return (
            <div className={className}>
                <div className="sandwich__line sandwich__line_top"></div>
                <div className="sandwich__line sandwich__line_middle"></div>
                <div className="sandwich__line sandwich__line_bottom"></div>
            </div>
        )
    }
}