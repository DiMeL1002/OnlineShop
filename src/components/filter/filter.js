import React from 'react'

import Button from '~c/buttons/button/button'
import FilterItem from '~c/filter/filterItem'
import FilterRange from '~c/filter/filterRange'

import './filter.scss'

function Filter() {
    return (
        <div className="filter">
            <div className="filter__range">
                <FilterRange min={0} max={100000} />
            </div>
            
            <div className="filter__item">
                <FilterItem
                    title="Производитель"
                    list={{
                        'Xiaomi': 57,
                        'Samsung': 46,
                        'Apple': 25,
                        'LG': 20,
                        'Meizu': 32,
                    }}
                />
            </div>
            <div className="filter__item">
                <FilterItem
                    title="Оперативная память"
                    list={{
                        '1Gb': 7,
                        '2Gb': 56,
                        '3Gb': 33,
                        '4Gb': 24,
                    }}
                />
            </div>
            <div className="filter__item">
                <FilterItem
                    title="Встроенная память"
                    list={{
                        '8Gb': 3,
                        '16Gb': 31,
                        '32Gb': 23,
                        '64Gb': 35,
                    }}
                />
            </div>

            <Button type="button" text="Сбросить" theme="reverse" />
        </div>
    )
}

export default Filter;