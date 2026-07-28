// =========================================
// Context Optimizer
// IRAT AI v0.5.0
// =========================================

const { estimateMessages } = require("./tokenEstimator");

const DEFAULT_TOKEN_LIMIT = 500;

function optimizeContext(
    messages = [],
    tokenLimit = DEFAULT_TOKEN_LIMIT
) {
    let optimizedMessages = [...messages];

    while (
        estimateMessages(optimizedMessages) > tokenLimit &&
        optimizedMessages.length > 1
    ) {
        optimizedMessages.shift();
    }

    return optimizedMessages;
}

module.exports = {
    optimizeContext
};