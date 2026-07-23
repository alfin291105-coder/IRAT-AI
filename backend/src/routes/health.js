const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        project: "IRAT AI",
        version: "1.0.0",
        status: "running"
    });
});

router.get("/health", (req, res) => {
    res.json({
        status: "online",
        uptime: process.uptime()
    });
});

module.exports = router;