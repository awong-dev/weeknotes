var express = require('express');

var { validateToken } = require('../lib/auth');
var { getDatabase } = require('../lib/db');
var { Notes } = require('../models/notes');
var { Users } = require('../models/users');

var router = express.Router();


router.get('/notes', (req, res) => {
  validateToken('fake_token').then((user_info) => {

    getDatabase().then((db) => {
      let users = new Users(db);
      users.getUser(user_info).then((user_record) => {
          db.close();

          let notes = [];
          let map = [{
            user_info: user_record.value,
            notes: 'notes' 
          }];
          res.json(map);
        }
      );
    });
  });
});

router.post('/notes', (req, res) => {

  validateToken('fake_token', (user_info) => {
    console.log(user_info);
    let map = [];
    map[0] = {};
    res.json(map);
  });
});

module.exports = router;
