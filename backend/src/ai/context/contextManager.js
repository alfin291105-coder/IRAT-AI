// =========================================
// Context Manager
// IRAT AI v0.5.0
// =========================================

const { formatMessages } = require("./messageFormatter");
const { selectContext } = require("./contextSelector");

const DEFAULT_LIMIT = 10;

function buildContext(
  messages = [],
  currentQuestion = "",
  limit = DEFAULT_LIMIT,
) {
  const selectedMessages = selectContext(messages, currentQuestion, limit);

  return formatMessages(selectedMessages);
}

module.exports = {
  buildContext,
};
