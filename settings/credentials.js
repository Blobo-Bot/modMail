const credentials = {
  base: {
      token: 'NzE4NzY5OTc2MzExNDE0ODM3.Xttzhw.pAcNZzVVP7iYmFGtf7UwyC9FRsA'
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