var router = require('express').Router();
var EMPLOYEECLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
  console.log('doing homepage');
  res.render('index');
}

// api here

router.get('/api/v6/read', do_read);
router.post('/api/v6/create', do_create);
router.put('/api/v6/update', do_update);
router.delete('/api/v6/delete/:_id', do_delete);

function do_read(req, res) {
  console.log('getting all data');
  EMPLOYEECLASS.find()
    .then();
}

function do_create(req, res) {
  console.log('creating user');
  console.log(req.body);
  var data = {
      name: req.body.name,
      gender: req.body.gender,
      contact:{
          email: req.body.email,
          cell: req.body.cell,
          home: req.body.home
      }
  }

}

function do_update(req, res) {
  console.log('updating user');

}

function do_delete(req, res) {
  console.log('deleting user');

}