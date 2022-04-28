const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.MYDB_CONNECTION;

mongoose.connect(DB, { useNewUrlParser: true }, (error) => {
  if (!error) {
    console.log('success connect');
  } else {
    console.log('error to connect db');
  }
});

const Users = require('../model/user');
