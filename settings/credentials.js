const credentials = {
  base: {
      token: 'NzE4NzY5OTc2MzExNDE0ODM3.Xtt8eA.BxKuvP0_-MWRJYJpd-NV2F6Hp3k'
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