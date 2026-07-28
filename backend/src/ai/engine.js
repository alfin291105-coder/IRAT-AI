// =========================================
// AI Engine IRAT AI v0.3.0
// =========================================

const provider = require("./providers/mock");
const contextBuilder = require("./context/contextBuilder");
const { buildMemoryContext } = require("./context/memoryContext");

exports.chat = async (message, context = {}) => {
  const memories = buildMemoryContext(
    context.memories || []
);

const prompt = contextBuilder.buildContext({
    message,

    memories,

    conversationHistory:
        context.conversationHistory || [],

    profile:
        context.profile || []
});
  
  const reply = await provider.generate(prompt);

  return reply;
};
