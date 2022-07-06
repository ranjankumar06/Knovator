const mongodb = require('mongoose');
const validator = require('validator');

// UserSchema
const UserSchema = new mongodb.Schema({
    Title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    Body: {
        type: String,
        required: true
    },
    Created: {
        type: String,
        required: true
    },
    Active: {
        type: Boolean,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
});


module.exports = mongodb.model("users", UserSchema);