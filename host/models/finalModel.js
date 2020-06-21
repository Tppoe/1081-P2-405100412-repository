const db = require('../utils/database');

module.exports = class FinalData {
  constructor(id, title, description, srcURL) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.srcURL = srcURL;
  }

  // READ
  static fetchProject() {
    return db.execute('SELECT * FROM `1082-final`.class_demo');
  }


};
