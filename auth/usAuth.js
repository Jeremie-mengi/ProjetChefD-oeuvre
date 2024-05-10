const bcrypt = require("bcryptjs");
const passport = require("passport");
const prisma = require("../db/prisma");
const LocalStrategy = require("passport-local").Strategy

const configPassport = new LocalStrategy({ usernameField: "email", passwordField: "password" },
    async (email, passport, done) => {
        const user = await prisma.user.findFirst({ where: { email } })
        if (!user) {
            return done(null, false, { message: "User introuvable" })
        }
        bcrypt.compare(passport, user.password, (err, IsMatch) => {
            if (!user) {
                return done(err)
            }
            if (!IsMatch) {
                return done(null, false, { message: "Mot de passe incorect" });
            } else {
                return done(null, true, 'user find')
            }
        })
    })

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})

module.exports = configPassport;


