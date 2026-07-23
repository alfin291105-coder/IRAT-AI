require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,

    ai: {
        provider: process.env.AI_PROVIDER || "mock"
    }
};