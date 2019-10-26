let mainServerUrl = 'http://95.181.200.182:8080/';
// let mainServerUrl = 'http://localhost:8080/';

function makeRequest(url, options = {}, baseUrl = mainServerUrl) {
    return fetch(baseUrl + url, options).then((response) => {
        if (response.status !== 200) {
            return response.text().then((text) => {
                throw new Error(text);
            });
        }

        const contentTypeHeader = response.headers.get('Content-Type');
        
        if (contentTypeHeader && contentTypeHeader.includes('application/json')) {
            return response.json();
        }
    });
}

export default makeRequest;