import { observable, action } from 'mobx';

class User {
    @observable user = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.user;
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.api.load().then(() => {
                resolve(true);
            })
        })
    }
}

export default User;