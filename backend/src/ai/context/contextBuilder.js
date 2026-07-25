// =========================================
// Context Builder IRAT AI v0.3.0
// Menyusun context untuk AI
// =========================================

function buildContext({
    message,
    memories = []
}) {

    const memorySection =
        memories.length > 0
            ? memories
                .map(memory => `- ${memory.content}`)
                .join("\n")
            : "Tidak ada memory yang relevan.";

    return `
SYSTEM

Kamu adalah IRAT AI.

Asisten pribadi pengguna.

=========================

RELEVANT MEMORIES

${memorySection}

=========================

CURRENT QUESTION

${message}

=========================

INSTRUCTION

- Gunakan memory jika relevan.
- Jika memory tidak cukup, katakan kamu belum mengetahui jawabannya.
- Jangan membuat informasi yang tidak ada di memory.
`;

}

module.exports = {
    buildContext
};