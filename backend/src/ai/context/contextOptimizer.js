// =========================================
// Context Optimizer
// IRAT AI v0.5.0
// =========================================

const { estimateMessages } = require("./tokenEstimator");

const DEFAULT_TOKEN_LIMIT = 500;

function isImportantContext(item) {
    return (
        item.category === "identity" ||
        item.category === "preference" ||
        item.importance >= 8
    );
}

function optimizeContext(
    messages = [],
    tokenLimit = DEFAULT_TOKEN_LIMIT
) {
    let optimizedMessages = [...messages];

    while (
        estimateMessages(optimizedMessages) > tokenLimit &&
        optimizedMessages.length > 1
    ) {
        const removableIndex = optimizedMessages.findIndex(
            item => !isImportantContext(item)
        );

        if (removableIndex === -1) {
            break;
        }

        optimizedMessages.splice(
            removableIndex,
            1
        );
    }

    return optimizedMessages;
}

module.exports = {
    optimizeContext
};