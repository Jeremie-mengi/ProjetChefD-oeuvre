const express = require("express")
const {getFraisS,createFrais} = require ("../controllers/frais")
const router = express.Router();

router.get("/", getFraisS)
router.post("/", createFrais);

module.exports= router