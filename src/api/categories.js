function all() {
    return fetch('http://95.181.200.182:8080/categories').then((response) => {
        if (response.status !== 200) {
            return response.text().then(function(text) {
                throw new Error(text);
            });
        }

        return response.json();
    })
}

export { all };