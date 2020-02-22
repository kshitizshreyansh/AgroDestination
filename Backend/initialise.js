const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const express = require('express');


const router = express.Router();


const usersSchema = require('./model/userModel')
mongoose.connect('mongodb+srv://amita:5SxAq8ihvbuN0WIv@cluster1-dm6iy.mongodb.net/agrov2?retryWrites=true/agro');

var hash = bcrypt.hashSync("admin", saltRounds);
var userJson = {
    name: "amita",
    username: "admin",
    tel:"+919113553831",
    password: hash,
    userType: "Admin"
};
var users = new usersSchema(userJson);

users.save(function(err, result) {
    console.log("Admin Account Created");
    // const token = jwt.sign({ username: result["username"], name: result["name"] }, 'this_must_be_a_long_string', { expiresIn: "1h" });

});