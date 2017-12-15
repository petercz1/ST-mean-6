var router = require('express').Router();
var EMPLOYEECLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
  console.log('doing homepage');
  res.render('pages/index');
}

// api here

router.get('/api/v6/read', do_read);
router.get('/api/v6/read/:_id', do_read_single);
router.post('/api/v6/create', do_create);
router.put('/api/v6/update', do_update);
router.delete('/api/v6/delete/:_id', do_delete);

function do_read(req, res) {
  console.log('getting all data');
  EMPLOYEECLASS.find({}, {name: 1})
    .then(function (results) {
        //console.log(results);
        res.json(results);
    });
}

function do_read_single(req, res) {
  console.log('getting single employee');
  EMPLOYEECLASS.findById(req.params._id).then(
    function (result) {
      res.json(result);
    }
  )
}

function do_create(req, res) {
  console.log('creating user');
  console.log(req.body);

  var data = {
    name: req.body.name,
    gender: req.body.gender,
    contact: {
      email: req.body.email,
      cell: req.body.cell,
      home: req.body.home
    }
  }

  var employee = new EMPLOYEECLASS(data);
  employee.save()
    .then(function (result) {
        console.log(result);
        res.json({message: 'saved new employee!'})
    });
}

function do_update(req, res) {
  console.log('updating user');
  console.log(req.body);
  var update = {
    $set: {
      name: req.body.name,
      gender: req.body.gender,
      contact: {
        email: req.body.email,
        cell: req.body.cell,
        home: req.body.home
      }
    }
  }
  EMPLOYEECLASS.findByIdAndUpdate(req.body._id, update)
    .then(function (result) {
        console.log(result);
        res.json({message: 'updated employee!'})
    })
}

function do_delete(req, res) {
  console.log('deleting user');
  console.log(req.params._id);
  EMPLOYEECLASS.findByIdAndRemove(req.params._id)
    .then(function (result) {
        console.log(result);
        res.json({message: 'deleted employee!'})
    });
}