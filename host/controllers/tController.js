const TData = require('../models/tModel');

exports.getT1 = (req, res) => {
  
  try {
    TData.fetchT1().then(([rows]) => {
      console.log(JSON.stringify(rows));
      // res.send(JSON.stringify(rows));
      res.render('t1', {
        data: rows,
        title: 'T1',
      });
    });
  } catch (err) {
    console.log(err);
  }
};
const TlData = require('../models/tModel');

exports.getT2 = (req, res) => {
  
  try {
    TData.fetchT2().then(([rows]) => {
      console.log(JSON.stringify(rows));
      // res.send(JSON.stringify(rows));
      res.render('t2', {
        data: rows,
        title: 'T2',
      });
    });
  } catch (err) {
    console.log(err);
  }
};

