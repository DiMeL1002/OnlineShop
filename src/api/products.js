function type(type) {
    return fetch(`http://95.181.200.182:8080/products/${type}`).then((response) => {
        if (response.status !== 200) {
            return response.text().then(function(text) {
                throw new Error(text);
            })
        }

        return response.json();
    })
}

function product(id) {
    return fetch(`http://95.181.200.182:8080/product/${id}`).then((response) => {
        if (response.status !== 200) {
            return response.text().then((text) => {
                throw new Error(text);
            })
        }

        return response.json();
    })
}

export { type, product };