
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    surname : {
        type: String,
        unique : false,
        required : true
    },
    username : {
        type: String,
        unique : true,
        required : true
    },
    password : {
        type: String,
        unique : false,
        required : true
    },
    email : {
        type: String,
        unique : true,
        required : true
    }
}, {
    timestamps: true
});

module.exports = usersSchema;