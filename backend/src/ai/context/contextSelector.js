// =========================================
// Context Selector
// IRAT AI v0.5.0
// =========================================

const { scoreMessages } = require("./contextScorer");

const DEFAULT_LIMIT = 10;

function selectContext(
    messages = [],
    currentQuestion = "",
    limit = DEFAULT_LIMIT
) {
    const scoredMessages = scoreMessages(
        messages,
        currentQuestion
    );

    return scoredMessages
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ score, ...message }) => message);
}

module.exports = {
    selectContext
};