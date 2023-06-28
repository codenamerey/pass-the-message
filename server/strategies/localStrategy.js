const { Strategy } = require("passport-local");
const { findUserByUsername } = require("../utils/dbHelpers.js");
const passport = require("passport");

const localStrategy = new Strategy({
    session: false,
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    const user = await findUserByUsername(username);
    console.log(user)
    if(user && user.password != password) {
        done('Wrong password!', false);
    } else if(!user) {
        done('No user found', false)
    } else {
        done(null, user)
    }
})

passport.use('local', localStrategy);