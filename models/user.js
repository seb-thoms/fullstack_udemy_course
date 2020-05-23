const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// we can also write is as const { Schema } = mongoose;
//ES6 desturcturing

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);