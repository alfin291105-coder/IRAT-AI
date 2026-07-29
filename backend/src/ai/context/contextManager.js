// =========================================
// Context Manager
// IRAT AI v0.5.0
// =========================================

const { formatMessages } = require("./messageFormatter");
const { selectContext } = require("./contextSelector");
const { optimizeContext } = require("./contextOptimizer");
const conversationState = require("./conversationState");
const { isFollowUp } = require("./followUpDetector");
const { containsPronoun } = require("./pronounResolver");

const DEFAULT_LIMIT = 10;

function buildContext(
  messages = [],
  currentQuestion = "",
  limit = DEFAULT_LIMIT,
) {
  conversationState.updateState(currentQuestion, "user");
  const followUp =
    isFollowUp(currentQuestion) || containsPronoun(currentQuestion);

  let contextMessages = messages.filter((message) => message.content);

  if (followUp) {
    contextMessages = [...messages.slice(-5)];
  }

  const selectedMessages = followUp
    ? contextMessages
    : selectContext(contextMessages, currentQuestion, limit);

  const optimizedMessages = optimizeContext(selectedMessages);

  console.log("optimizedMessages =", optimizedMessages);
  
  return formatMessages(optimizedMessages, {
    followUp,
  });
}

module.exports = {
  buildContext,
};
