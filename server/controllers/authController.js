const passport = require("passport")

exports.localLogIn = (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {
        if(err) {
            next(err);
        }

        if(user) {
            res.cookie('token', user.generateJWTToken(), {
                // Make cookie available for one whole day
                httpOnly: true,
                expires: new Date((Date.now() + (24 * 60 * 1000)))
            })
            res.status(200).end()
        }
    })(req, res, next)
}