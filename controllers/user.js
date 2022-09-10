const User = require('../models/User');

exports.userdata = async (req, res, next) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
