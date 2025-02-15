const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    selectedTopics: {
        type: [String],
        default: []
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;