// =========================================

// Chat Service IRAT-AI v0.4.0

// =========================================

const aiEngine = require("../ai/engine");

const memoryManager = require("../memory/memoryManager");
const memoryRetriever = require("../memory/memoryRetriever");
const memoryExtractor = require("../memory/memoryExtractor");

const conversationRepository = require("../repositories/conversationRepository");


exports.reply = async (
    message,
    sessionId = "default",
    userId = "guest"
) => {

    // Simpan pesan user ke memory
    memoryManager.addConversation(
        sessionId,
        "user",
        message
    );

    // Extract memory penting dari pesan user
const extractedMemory = memoryExtractor.extractMemory(message);

if (extractedMemory) {

    await memoryManager.saveLongMemory(
        userId,
        extractedMemory.category,
        extractedMemory.content,
        extractedMemory.importance
    );

}


    // Ambil memory yang relevan
    const memories = await memoryRetriever.retrieveMemory(
    userId,
    message
);

console.log("MESSAGE:", message);
console.log("MEMORIES:", memories);



    // Simpan percakapan user
    await conversationRepository.saveConversation(
        sessionId,
        "user",
        message
    );


    // Kirim pesan + memory ke AI
    const reply = await aiEngine.chat(
        message,
        {
            memories
        }
    );


    // Simpan balasan AI ke memory
    memoryManager.addConversation(
        sessionId,
        "assistant",
        reply
    );


    // Simpan balasan AI
    await conversationRepository.saveConversation(
        sessionId,
        "assistant",
        reply
    );


    return reply;

};