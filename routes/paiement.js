const express = require("express")
const {  getPaiements,createPaiement} = require ("../controllers/paiement")
const router = express.Router();

router.get("/", getPaiements)
router.post("/", createPaiement);

module.exports= router