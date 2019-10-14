import React from 'react'
import PropTypes from 'prop-types'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './filterRange.scss'

export default class extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }

    state = {
        min: this.props.min,
        max: this.props.max,
    }

    marks = {};

    componentDidMount() {
        let value = 0;
        let step = this.state.max / 4;

        while (value <= this.state.max) {
            this.marks[value] = value;
            value += step;
        }
    }

    onMinChange = (event) => {
        let value = parseInt(event.target.value);

        this.setState({ min: value })
    }

    onMaxChange = (event) => {
        let value = parseInt(event.target.value);

        this.setState({ max: value })
    }

    onSliderChange = (value) => {
        this.setState({
            min: value[0],
            max: value[1],
        });
    }

    render() {
        let { min, max } = this.state;

        return (
            <div className="filter-range">
                <span className="filter-range__title">Цена</span>

                <div className="filter-range__inputs">
                    <div className="filter-range__input-group">
                        <span>От</span>
                        <input
                            className="filter-range__input"
                            type="text"
                            value={min}
                            onChange={this.onMinChange}
                        />
                    </div>
                    <div className="filter-range__input-group">
                        <span>До</span>
                        <input
                            className="filter-range__input"
                            type="text"
                            value={max}
                            onChange={this.onMaxChange}
                        />
                    </div>
                </div>

                <Range 
                    allowCross={false}
                    min={this.props.min}
                    max={this.props.max}
                    defaultValue={[min, max]}
                    value={[min, max]}
                    marks={this.marks}
                    onChange={this.onSliderChange}
                />
            </div>
        )
    }
}