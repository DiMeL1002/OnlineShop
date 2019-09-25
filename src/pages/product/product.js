import React from 'react'

import Product from '~c/product/product'

import './product.scss'

export default function(props) {
    let id = parseInt(props.match.params.id);
    
    if (id === null) return <div>Ошибка 404</div>

    return (
        <main className="product">
            <div className="container">
                <Product productId={id} />
            </div>
        </main>
    )
}