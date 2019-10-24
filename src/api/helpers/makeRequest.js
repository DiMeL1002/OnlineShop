let mainServerUrl = '/api/';
// let mainServerUrl = 'http://localhost:8080/';

function makeRequest(url, options = {}, baseUrl = mainServerUrl) {
    return fetch(baseUrl + url, options).then((response) => {
        if (response.status !== 200) {
            return response.text().then((text) => {
                throw new Error(text);
            });
        }

        return response.json();
    });
}

export default makeRequest;