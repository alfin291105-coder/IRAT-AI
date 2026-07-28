// =========================================
// Context Manager
// IRAT AI v0.5.0
// =========================================

const { formatMessages } = require("./messageFormatter");

const DEFAULT_LIMIT = 10;

function buildContext(messages = [], limit = DEFAULT_LIMIT) {
    const recentMessages = messages.slice(-limit);

    return formatMessages(recentMessages);
}

module.exports = {
    buildContext
};