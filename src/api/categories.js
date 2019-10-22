import makeRequest from './helpers/makeRequest'

function all() {
    return makeRequest('categories');
}

export { all };