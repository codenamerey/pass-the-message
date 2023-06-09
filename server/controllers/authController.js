const passport = require("passport")

exports.localLogIn = (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {
        if(err) {
            next(err);
        }

        if(user) {

            // Set cookie in the client with token as the name and the generated token as the value

            res.cookie('token', user.generateJWTToken(), {
                // Make cookie available for one whole day
                httpOnly: true,
                expires: new Date((Date.now() + (24 * 60 * 1000)))
            })
            res.status(200).end()
        }
    })(req, res, next)
}

exports.logOut = (req, res) => {

    try {
        console.log(req.cookie)

        res.cookie('token', '', {
            httpOnly: true,
            expires: new Date(1)
        })
        res.status(200).end()
    } catch(err) {
        console.log(err)
    }
}