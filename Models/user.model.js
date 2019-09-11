const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema ({
    name:{ type: String, required: true, max: 100},
    surname:{ type: String, required: true, max: 100},
    age:{type: Number, required: true},
    sexe:{type: String, required: true},
    mail:{type: String, required: true},
    pass: {type: String, required: true, max:100},
});
module.exports = mongoose.Model('User', UserSchema);