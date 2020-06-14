module.exports = class Database {
    constructor(configuration) { this.cfg = credentials; }
    creteURL() {
        return new Promise((resolve, reject) => {
            if(this.cfg.database.password.length === 0){
                return resolve(`mysql://${this.cfg.database.user}@${this.cfg.database.host}:3306/${this.cfg.database.database}`);
            }
            resolve(`mysql://${this.cfg.database.user}:${this.cfg.database.password[0]}@${this.cfg.database.host}:3306/${this.cfg.database.database}`);
        });
    }
};