module.exports = class Database {
    constructor(client) {
        this.client = client;
    };
    creteURL() {
        return new Promise((resolve, reject) => {
            if(this.client.credentials.database.password.length === 0){
                return resolve(`mysql://${this.client.credentials.database.user}@${this.client.credentials.database.host}:3306/${this.client.credentials.database.database}`);
            }
            resolve(`mysql://${this.client.credentials.database.user}:${this.client.credentials.database.password[0]}@${this.client.credentials.database.host}:3306/${this.client.credentials.database.database}`);
        });
    }
};