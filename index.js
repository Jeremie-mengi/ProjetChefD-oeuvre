const express = require ("express");
const bcrypt = require ("bcrypt")
const dotenv = require ("dotenv")
const passport = require ("passport")
const LocalStrategy = require ("passport-local").Strategy

const back = express();
back.use(express.json());
dotenv.config()
const PORT = process.env.PORT ; // Définir le port par défaut si PORT n'est pas défini dans l'environnement

back.get("/", (req, res) => {
  console.log("Requête GET reçue sur la route '/'");
  res.send("Yo");
});


back.listen(PORT, () => console.log(`Le serveur est en écoute sur le port ${PORT}`));
