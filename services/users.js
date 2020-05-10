var express = require('express')
var router = express.Router()
var User = require('../dao/user');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/', function (req, res) {
  var user = {
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };

  User.create(user, function(err, user) {
    if(err) {
        res.json({
            error : err
        })
    } else {
      res.json({
        message : "User created successfully"
      })
    }
  })
})

router.put('/:id', function (req, res) {
  var user = {
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };

  User.update({_id: req.params.id}, user, function(err, user) {
    if(err) {
        res.json({
            error : err
        })
    } else {
      res.json({
        message : "User updated successfully"
      })
    }
  })
})

router.get('/:id', function (req, res) {
  User.get({_id: req.params.id}, function(err, users) {
    if(err) {
        res.json({
            error: err
        })
    } else {
      res.json({
        users: users
      })
    }
  })
})

router.get('/', function (req, res) {
  User.get({}, function(err, users) {
    if(err) {
        res.json({
            error: err
        })
    } else {
      res.json({
        users: users
      })
    }
  })
})

router.delete('/:id', function (req, res) {
  User.delete({_id: req.params.id}, function(err, user) {
    if(err) {
        res.json({
            error : err
        })
    } else {
      res.json({
        message : "User deleted successfully"
      })
    }
  })
})

module.exports = router