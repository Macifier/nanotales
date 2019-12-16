const express = require("express");
const wordFrequencyController = require("../controllers/wordFrequency");
const router = express.Router();
router.get("/get", wordFrequencyController.getFrequentWords);
module.exports = router;
