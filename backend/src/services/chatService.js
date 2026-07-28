// =========================================

// Chat Service IRAT-AI v0.4.0

// =========================================

const aiEngine = require("../ai/engine");

const memoryManager = require("../memory/memoryManager");
const memoryRetriever = require("../memory/memoryRetriever");
const memoryExtractor = require("../memory/memoryExtractor");
const intentDetector = require("../memory/intentDetector");

const conversationRepository = require("../repositories/conversationRepository");

exports.reply = async (message, sessionId = "default", userId = "guest") => {
  // Simpan pesan user ke memory
  memoryManager.addConversation(sessionId, "user", message);

  // Extract memory penting dari pesan user
  const extractedMemory = memoryExtractor.extractMemory(message);

  if (extractedMemory) {

  const duplicate =
    await memoryManager.hasDuplicateMemory(
      userId,
      extractedMemory
    );

  if (!duplicate) {

    const existingMemory =
      await memoryManager.findMemoryForUpdate(
        userId,
        extractedMemory
      );

    if (existingMemory) {

      await memoryManager.updateLongMemory(
        existingMemory.id,
        extractedMemory
      );

    } else {

      await memoryManager.saveLongMemory(
        userId,
        extractedMemory.category,
        extractedMemory.content,
        extractedMemory.importance
      );

    }

  }

}

  // Ambil memory yang relevan
  const memories = await memoryRetriever.retrieveMemory(userId, message);

  const conversationHistory = memoryManager.getConversation(sessionId);

  const profile = await memoryManager.getLongMemory(userId);


  // Simpan percakapan user
  await conversationRepository.saveConversation(sessionId, "user", message);

  // Kirim pesan + memory ke AI
  const reply = await aiEngine.chat(message, {
    memories,
    conversationHistory,
    profile,
  });

  // Simpan balasan AI ke memory
  memoryManager.addConversation(sessionId, "assistant", reply);
  const detectedIntent = intentDetector.detectIntent(message);  

  // Simpan balasan AI
  await conversationRepository.saveConversation(sessionId, "assistant", reply);

  return reply;
};
