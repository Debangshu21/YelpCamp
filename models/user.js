const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});
// Code below automatically adds username and password. Feature of Passport.js
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);