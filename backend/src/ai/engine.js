// =========================================
// AI Engine IRAT AI v0.3.0
// =========================================

const provider = require("./providers/mock");
const contextBuilder = require("./context/contextBuilder");
const { buildMemoryContext } = require("./context/memoryContext");

exports.chat = async (message, context = {}) => {
  console.log("AI Engine: sebelum buildContext");

  const prompt = contextBuilder.buildContext({
    message,
    memories: buildMemoryContext(context.memories || []),
    conversationHistory: context.conversationHistory || [],
    profile: context.profile || [],
  });

  console.log("AI Engine: sesudah buildContext");

  const reply = await provider.generate(prompt);

  return reply;
};
