// =========================================
// Context Manager
// IRAT AI v0.5.0
// =========================================

const { formatMessages } = require("./messageFormatter");
const { selectContext } = require("./contextSelector");
const { optimizeContext } = require("./contextOptimizer");
const conversationState = require("./conversationState");

const DEFAULT_LIMIT = 10;

function buildContext(
  messages = [],
  currentQuestion = "",
  limit = DEFAULT_LIMIT,
) {
  conversationState.updateState(
  currentQuestion,
  "user"
);

  const selectedMessages = selectContext(messages, currentQuestion, limit);

  const optimizedMessages = optimizeContext(selectedMessages);

  return formatMessages(optimizedMessages);
}

module.exports = {
  buildContext,
};
