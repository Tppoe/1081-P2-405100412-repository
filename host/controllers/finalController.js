const FinalData = require('../models/finalModel');

exports.getProject = (req, res) => {
  
  try {
    FinalData.fetchProject().then(([rows]) => {
      console.log(JSON.stringify(rows));
      // res.send(JSON.stringify(rows));
      res.render('project', {
        data: rows,
        title: 'Project',
      });
    });



  } catch (err) {
    console.log(err);
  }
};


