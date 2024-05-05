const express = require("express");
const authMidlUser = require ("../midellware/authMidlUser")
const router = express.Router();

router.post("/", authMidlUser)

module.exports = router