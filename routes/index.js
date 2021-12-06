var express = require('express');
var router = express.Router();

let allUsers = [];
let counter = 0;

/* a middleware for counting the number of visits to homepage*/
router.get('/', function(req, res, next) {
  counter++;
  console.log('visits = ' + counter);
  next()
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET request for creating a user. and Generate a welcome message.*/
router.get('/welcome', function(req, res, next) {
  // form submission input parameter
  let username = req.query.username;
  allUsers.push(username);
  res.render('welcome', { yourname: username });
});

/* POST request for creating a user. and Generate a welcome message.
 */
router.post('/welcome', function(req, res, next) {
  // form submission input parameter
  let username = req.body.username;
  allUsers.push(username);
  res.render('welcome', { yourname: username });
});

router.get('/all', function(req, res, next) {
  res.send(allUsers);
});

router.get('/counter', function(req, res, next) {
  res.send({ counter: counter });
});

module.exports = router;
