const express = require("express")
const {  getCaissiers,createCaissier} = require ("../controllers/caissier")
const router = express.Router();

router.get("/", getCaissiers)
router.post("/", createCaissier);

module.exports= router