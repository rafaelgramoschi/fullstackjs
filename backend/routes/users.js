var express = require('express');
var router = express.Router();

/** BASE PATH IS /users */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ users: "Get users list"});
});

module.exports = router;
