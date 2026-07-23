const express = require("express");

const router = express.Router();

router.use("/", require("./health"));
router.use("/chat", require("./chat"));

module.exports = router;