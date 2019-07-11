const businessPlan = require('./wp-json/wp/v2/business-plan');


module.exports = (app) => {
  app
    .route('/wp-json/wp/v2/business-plan/:id')
    .get(businessPlan.GET);
};


// app.get(API_PATH, (req, res) => {
//   return res.send('Received a GET HTTP method');
// });

// app.post(API_PATH, (req, res) => {
//   return res.send('Received a POST HTTP method');
// });

// app.put(API_PATH, (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });

// app.patch(API_PATH, (req, res) => {
//   return res.send('Received a PATCH HTTP method');
// });

// app.delete(API_PATH, (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });
