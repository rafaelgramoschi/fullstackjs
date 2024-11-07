var express = require('express');
var router = express.Router();

const users = [
  {
    id: 123456,
    fullname: "Tom",
    email: "tom@email.loc",
    password: "secret",
  },
  {
    id: 123457,
    fullname: "Harry",
    email: "harry@email.loc",
    password: "secret",
  },
  {
    id: 123458,
    fullname: "Tim",
    email: "tim@email.loc",
    password: "secret",
  },
];
/** BASE PATH IS /users */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ result: users });
});

module.exports = router;
