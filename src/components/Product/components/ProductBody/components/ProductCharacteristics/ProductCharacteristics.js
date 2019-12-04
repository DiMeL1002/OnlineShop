import React from 'react'

import './ProductCharacteristics.scss'

export default function() {
    let characteristicsData = getCharacteristicsData();
    let characteristics = [];

    for (let key in characteristicsData) {
        let tableRows = [];
        let internalObject = characteristicsData[key];

        for (let internalKey in internalObject) {
            tableRows.push (
                <tr className="product-characteristics__table-row"
                    key={`table-row-${internalKey}`}
                >
                    <td className="product-characteristics__table-col"><b>{internalKey}</b></td>
                    <td className="product-characteristics__table-col">
                        {internalObject[internalKey]}
                    </td>
                </tr>
            )
        }
        
        characteristics.push (
            <div className="product-characteristics__table-wrapper" key={`table-${key}`}>
                <span className="product-characteristics__table-title">{key}</span>
                <table className="product-characteristics__table">
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="product-characteristics">
            <h2 className="product-characteristics__title">Характеристики</h2>
            {characteristics}
        </div>
    )
}

function getCharacteristicsData() {
    return {
        'Общие характеристики': {
            'Вес': '206 г',
            'Количество SIM-карт': '2',
            'Операционная система (на начало продаж)': 'Android 9.0',
            'Размеры (ШxВxТ)': '75.9x162.6x8.8 мм',
        },
        'Память и процессор': {
            'Видеопроцессор': 'Adreno 640',
            'Количество ядер процессора': '8',
            'Объем встроенной памяти': '256 Гб',
            'Объем оперативной памяти': '8 Гб',
            'Процессор': 'Qualcomm Snapdragon 855',
        }
    }
}