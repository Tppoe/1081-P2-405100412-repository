const db = require('../utils/database');

module.exports = class TData {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  // READ
  static fetchPT1() {
    return db.execute('SELECT * FROM T where type ="a"');
  }

  static fetchPT1() {
    return db.execute('SELECT * FROM T where type ="b"');
  }


};
