const passport = require("passport");
const jwt = require("jsonwebtoken");
const { user } = require("../db/prisma");

async function authMidlUser(req, res, next) {
    passport.authenticate("local", async (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ message: 'Identifiant incorrect' });
            }
            
            // Vérification des identifiants de l'utilisateur dans la base de données
            const foundUser = await user.findUnique({ where: { email: req.body.email } });
            if (!foundUser) {
                return res.status(401).json({ message: 'Identifiant incorrect' });
            }

            // Si l'utilisateur est trouvé dans la base de données, nous le connectons
            req.login(foundUser, { session: false }, async (error) => {
                if (error) {
                    return next(error);
                }

                // Création du token JWT
                const token = jwt.sign({ id: foundUser.id, role: foundUser.role }, process.env.JWT_SECRET, { expiresIn: '3m' });
                
                // Envoi du token JWT en réponse
                return res.status(200).json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
}

module.exports = authMidlUser;
