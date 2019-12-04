import React from 'react'
import PropTypes from 'prop-types'

import './FilterItem.scss'

export default class extends React.Component {
    state={ showList: false }

    static propTypes = {
        title: PropTypes.string.isRequired,
        list: PropTypes.object.isRequired,
    }

    bodyClassName = 'filter-item__body'
    iconClassName = 'filter-item__icon'

    toogleList = () => {
        if (this.state.showList) {
            this.bodyClassName = 'filter-item__body';
            this.iconClassName = 'filter-item__icon';

            this.setState({ showList: false })
        } else {
            this.bodyClassName = 'filter-item__body filter-item__body_opened';
            this.iconClassName = 'filter-item__icon filter-item__icon_turned';

            this.setState({ showList: true })
        }
    }
    
    render() {
        let filterList = [];
        let list = this.props.list;

        for (let key in list) {
            filterList.push (
                <label className="filter-item__label" key={`filter-item-${key}`}>
                    <input type="checkbox" className="filter-item__chekbox" />
                        {key}
                    <span className="filter-item__value">{list[key]}</span>
                </label>
            )
        }

        return (
            <div className="filter-item">
                <div className="filter-item__header" onClick={this.toogleList}>
                    <span className="filter-item__title">{this.props.title}</span>
                    <div className={this.iconClassName}></div>
                </div>
                <div className={this.bodyClassName}>
                    {filterList}
                </div>
            </div>
        )
    }
}