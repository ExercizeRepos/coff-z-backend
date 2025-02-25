const express = require("express");
const { getConfig, updateConfig } = require("../controllers/configController");

const router = express.Router();

// Get config data for page
router.get("/", getConfig);
// Update config data for page
router.put("/", updateConfig);

module.exports = router;
