const express = require("express")
const {getTuteurs, createTuteur} = require ("../controllers/tuteur")
const router = express.Router();

router.get("/", getTuteurs)
router.post("/", createTuteur);

module.exports= router