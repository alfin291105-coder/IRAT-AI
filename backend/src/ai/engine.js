// =========================================
// AI Engine IRAT AI v0.3.0
// =========================================

const provider = require("./providers/mock");
const contextBuilder = require("./context/contextBuilder");

exports.chat = async (
    message,
    context = {}
) => {

    const prompt = contextBuilder.buildContext({
        message,
        memories: context.memories || []
    });

    const reply = await provider.generate(prompt);

    return reply;
};