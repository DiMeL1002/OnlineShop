function all() {
    return fetch('http://localhost:3000/categories').then((response) => {
        if (response.status !== 200) {
            return response.text().then(function(text) {
                throw new Error(text);
            });
        }

        return response.json();
    })
}

export { all };