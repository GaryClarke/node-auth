const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove('﻿5bed688fc76f5c22579aeaf5').then((todo) => {
   console.log(todo);
});
