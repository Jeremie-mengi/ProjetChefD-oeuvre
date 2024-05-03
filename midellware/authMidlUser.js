const passport = require("passport");
const jwt = require("jsonwebtoken");
const { user } = require("../db/prisma");
// const prisma = require("../db/prisma");
// const configPassport = require("../AUTH/User");

function authMidlUser(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (user) {
            return res.status(200).json({ message: 'Utilisateur existant' });
        }
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: 'Identifiant incorrect' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3m' });
        res.status(200).json(token);
    })(req, res, next);
}


module.exports = authMidlUser;