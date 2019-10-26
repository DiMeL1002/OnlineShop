import makeRequest from './helpers/makeRequest';

function load() {
    return makeRequest(`auth/login`, {
        credentials: 'include',
    });
}

export { load };