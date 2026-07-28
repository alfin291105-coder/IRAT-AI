// =========================================
// Context Manager
// IRAT AI v0.5.0
// =========================================

const { formatMessages } = require("./messageFormatter");
const { selectContext } = require("./contextSelector");
const { optimizeContext } = require("./contextOptimizer");
const conversationState = require("./conversationState");
const { isFollowUp } = require("./followUpDetector");

const DEFAULT_LIMIT = 10;

function buildContext(
  messages = [],
  currentQuestion = "",
  limit = DEFAULT_LIMIT,
) {
  conversationState.updateState(currentQuestion, "user");
  const followUp = isFollowUp(currentQuestion);

  let contextMessages = messages.filter(
  message => message.content
);
  
  if (followUp) {
    contextMessages = [
        ...messages.slice(-5)
    ];
}

  const selectedMessages = selectContext(contextMessages, currentQuestion, limit);

  const optimizedMessages = optimizeContext(selectedMessages);

  return formatMessages(optimizedMessages, {
    followUp,
  });
}

module.exports = {
  buildContext,
};
