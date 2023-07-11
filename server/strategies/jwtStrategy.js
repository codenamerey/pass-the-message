const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User.js');
const passport = require('passport');

const cookieExtractor = (req) => {
    let token = req?.cookies['token'];
    return token
}

const jwtStrategy = new Strategy({
    secretOrKey: process.env.JWTKey,
    jwtFromRequest: cookieExtractor
}, async(payload, done) => {
    try {
        const id = payload.id
        const user = await User.findById(id)

        if(!user) return done("Wrong credentials", false);

        done(null, user);
    } catch(err) {
        done(err, false)
    }
})

passport.use('jwt', jwtStrategy);