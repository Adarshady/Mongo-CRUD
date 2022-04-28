  const express = require('express');
// const res = require('express/lib/response');
const mongoose = require('mongoose');
const { validation } = require('../model/user');

const router = express.Router();
const Users = mongoose.model('Users');

router.get('/', (req, res) => {
  //getting
  Users.find((err, docs) => {
    if (!err) {
      // console.log(docs);
      res.status(200).json(docs);
    } else {
      res.send('error');
    }
  });
});

router.get('/:id', (req, res) => {
  Users.findById({ _id: req.params.id }, (err, doc) => {
    if (!err) {
      // console.log(docs);
      res.status(200).json(doc);
    } else {
      res.status(404).json({ message: 'User Id not found' });
    }
  });
});

router.post('/add', async (req, res) => {
  console.log(req.body);
  insertRecord(req, res);
});

const insertRecord = (req, res) => {
  // console.log(req.body);
  const { first_name, last_name, email, mobile } = req.body;

  const user = new Users();
  user.first_name = first_name;
  user.last_name = last_name;
  user.email = email;
  user.mobile = mobile;

  try {
    const { error } = validation(req.body);
    // console.log(error);
    if (!error) {
      user.save((err) => {
        if (err) {
          res.status(404).json({ message: err.message });
        } else {
          res.status(201).json({ message: 'Data saved' });
        }
      });
    } else {
      res.status(400).json(error.details);
    }
  } catch {
    // res.status(404).json(error);
  }
};

router.put('/update/:id', async (req, res) => { 
  try {
    const user = req.body;
    await Users.updateOne(
      { _id: req.params.id },
      {
        first_name: req.body.first_name,
        email: req.body.email,
      }
    );
    // console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id',  (req, res) => {
  Users.remove({ _id: req.params.id }, (err, doc) => {
    if (!err) {
      // console.log(docs);
      res.status(200).json(doc);
    } else {
      res.status(404).json({ message: 'User Id not found' });
    }
  });
});

module.exports = router;
