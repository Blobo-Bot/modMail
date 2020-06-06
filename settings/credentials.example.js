const credentials = {
    base: {
        token: 'YOUR_BOT_TOKEN'
    },
    database: {
        host: 'YOUR_SERVER_IP || localhost',
        user: 'YOUR_DATABASE_USER',
        password: ['YOUR_PASS_WORD'] /**Si vous etes en local host vous n'avez pas besoin de metre un password*/,
        database: 'YOUR_DATABASE_NAME'
    }
};
module.exports.credentials = credentials;
module.exports.db = class Database {
    constructor(configuration) { this.cfg = configuration; }
    ;creteURL() {
        return new Promise((resolve, reject) => {
            if(this.cfg.password.length === 0){
                return resolve(`mysql://${this.cfg}@${this.cfg.host}:3306/${this.cfg.database}`);
            }
            resolve(`mysql://${this.cfg}:${this.cfg.password[0]}@${this.cfg.host}:3306/${this.cfg.database}`);
        });
    }
};