var express = require('express');

var { validateToken } = require('../lib/auth');
var { getDatabase } = require('../lib/db');
var { Notes } = require('../models/notes');
var { Users } = require('../models/users');

var router = express.Router();

router.get('/notes', (req, res) => {
  validateToken('fake_token', (user_info) => {
    let map = [];
    map[0] = {
      user_info: user_info,
      notes: notes
    };

    getDatabase().then((db) => {
      let users = new Users(db);
      users.getUser(user_info.gmail_id,
        (records) => {
          console.log(docs);
        }
      );

      db.close();
      res.json(map);
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
