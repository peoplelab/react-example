const responseJSON = require('./response');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON);
  }
};
