module.exports = {
  GET: (req, res) => {
    const { id } = req.params;
    let task;
    let status;

    if (id === '50000157910000508014507496221648') {
      status = 200;
      task = require('./50000157910000508014507496221648');
    } else {
      status = 403;
      task = { error: { code: 'EXPIRED', id } };
    }

    res.status(status).json(task);
  }
};
