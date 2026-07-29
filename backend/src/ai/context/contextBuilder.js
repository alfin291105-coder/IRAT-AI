// =========================================
// Context Builder IRAT AI v0.3.0
// Menyusun context untuk AI
// =========================================

const contextManager = require("./contextManager");
const { resolvePronoun } = require("./pronounResolver");

function buildContext({
  message,
  memories = [],
  conversationHistory = [],
  profile = [],
}) {
  const memorySection =
    memories.length > 0
      ? memories
          .map(
            (memory, index) => `
[Memory ${index + 1}]
Category: ${memory.category}
Importance: ${memory.importance}
Content: ${memory.content}
`,
          )
          .join("\n")
      : "Tidak ada memory yang relevan.";
      

  const conversationContext = contextManager.buildContext(
    conversationHistory,
    message,
  );

  console.log(conversationContext);

  const formattedMessages = conversationContext.messages || [];

  const contextMetadata = conversationContext.metadata || {};

  const pronounReference = resolvePronoun(formattedMessages);

  const historySection =
    formattedMessages.length > 0
      ? formattedMessages
          .map(
            (chat) => `
${chat.role}: ${chat.content}
`,
          )
          .join("\n")
      : "Tidak ada percakapan sebelumnya.";

  const profileSection =
    profile.length > 0
      ? profile
          .map(
            (item) => `
${item.category}: ${item.content}
`,
          )
          .join("\n")
      : "Tidak ada profile pengguna.";

  const prompt = `
SYSTEM

Kamu adalah IRAT AI.

=========================

USER PROFILE

${profileSection}

=========================

IMPORTANT MEMORIES

${memorySection} 

=========================

CONVERSATION HISTORY

${historySection}

=========================

CONVERSATION STATE

Follow Up:
${contextMetadata.followUp ? "Ya" : "Tidak"}

=========================

PRONOUN REFERENCE

${pronounReference
    ? `Kata ganti mengacu pada: ${pronounReference}`
    : "Tidak ada."
}

=========================

CURRENT QUESTION

${message}

=========================

INSTRUCTION

- Gunakan profile dan memory jika relevan.
- Gunakan riwayat percakapan jika membantu.
- Jangan membuat informasi yang tidak ada.
`;
  console.log(prompt);
  return prompt;
}

module.exports = {
  buildContext,
};
