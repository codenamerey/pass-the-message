const User = require("../models/User.js")

const findUserByUsername = async(username) => {
    const user = await User.find({ username });

    return user[0];
}

module.exports = { findUserByUsername }