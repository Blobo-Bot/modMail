const credentials = {
  base: {
      token: 'priv'
  },
  database: {
      host: '',
      user: '',
      password: [],
      database: ''
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