const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/userRoutes")
const tuteur = require("./routes/tuteur")
const eleve = require("./routes/eleve")
const configPassport = require("./auth/usAuth")
const passport = require("passport");



passport.use(configPassport)
dotenv.config()
const PORT = process.env.PORT;
const back = express();
back.use(passport.initialize())
back.use(express.json());


back.get("/", (req, res) => {
  console.log("Requête GET reçue sur la route '/'");
  res.send("Yo");
});


back.use("/user",authRoutes)
back.use("/register",userRoutes)
back.use("/tuteur",tuteur)
back.use("/eleve", eleve)



back.listen(PORT, () => console.log(`Le serveur est en écoute sur le port ${PORT}`));
