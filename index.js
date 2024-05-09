const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes")
const user = require("./routes/userRoutes")
const tuteur = require("./routes/tuteur")
const eleve = require("./routes/eleve")
const frais = require("./routes/frais")
const caissier = require("./routes/caissier")
const notification = require("./routes/notification")
const login = require("./routes/authRoutes")
const configPassport = require("./auth/usAuth")
const passport = require("passport");
const paiement = require("./routes/paiement");
const cors = require("cors")

passport.use(configPassport)
dotenv.config()
const PORT = process.env.PORT;
const back = express();
back.use(passport.initialize())
back.use(express.json());
back.use(cors())
back.use(express.urlencoded({extended : true}))



back.get("/", (req, res) => {
  console.log("Requête GET reçue sur la route '/'");
  res.send("Yo");
});
back.use("/user",user)
back.use("/register",userRoutes)
back.use("/tuteur",tuteur)
back.use("/eleve", eleve)
back.use("/frais", frais)
back.use("/caissier", caissier)
back.use("/notification", notification)
back.use("/notification", notification)
back.use("/paiement", paiement)
back.use("/login", login)

back.listen(PORT, () => console.log(`Le serveur est en écoute sur le port ${PORT}`));
