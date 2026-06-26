const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,

    email: {
        type: String,
        unique: true
    },

    password: String,

    role: {
        type: String,
        enum: ["owner", "customer"],
        default: "customer"
    },

    phone: String
});

module.exports = mongoose.model("User", userSchema);