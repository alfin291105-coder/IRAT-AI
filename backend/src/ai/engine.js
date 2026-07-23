const provider = require("./providers/mock");

exports.chat = async (message) => {

    const reply = await provider.generate(message);

    return reply;

};