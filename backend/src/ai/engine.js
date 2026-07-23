const provider = require("./providers/mock");


exports.chat = async (message, context = {}) => {

    let prompt = message;


    if (context.memories && context.memories.length > 0) {

        const memoryText = context.memories
            .map(memory => memory.content)
            .join("\n");


        prompt = `
Memory pengguna:
${memoryText}


Pesan pengguna:
${message}
        `;
    }


    const reply = await provider.generate(prompt);


    return reply;

};