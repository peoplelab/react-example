const { base } = require('../../../mock.base');
const responseJSON = require('./response.json');


module.exports = {
  GET: base(
    (req) => ({ ...responseJSON, id: req.params.id })
  )
};
