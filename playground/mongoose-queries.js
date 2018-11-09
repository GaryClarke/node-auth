const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6be2fe7134100030689c1bd311';
//
// if (!ObjectID.isValid(id)) {
//
//     console.log('ID not valid');
// }

User.findById('﻿5be447b3aecca5445a89525c').then((user) => {

    if (!user) {

        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
    
}, (e) => {

    console.log(e);
});

// Todo.findById(id).then((todo) => {
//
//     if (!todo) {
//         return console.log('ID not found');
//     }
//
//     console.log('Todo by id', todo);
// });