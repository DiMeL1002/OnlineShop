import makeRequest from './helpers/makeRequest'

function load() {
    return makeRequest('basket', {
        credentials: 'include',
    })
}

function refresh(products) {
    return makeRequest('basket', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(products),
    });
}

export { load, refresh };