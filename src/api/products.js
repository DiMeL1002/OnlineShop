import makeRequest from './helpers/makeRequest'

function type(type) {
    return makeRequest(`products/${type}`);
}

function product(id) {
    return makeRequest(`product/${id}`);
}

export { type, product };