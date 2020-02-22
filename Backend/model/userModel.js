const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    tel: { type: Number, required: true },
    userType: { type: String, required: true },
    createdOn: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Users", userSchema);