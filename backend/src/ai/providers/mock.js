// =========================================
// Mock AI Provider IRAT AI v0.3.0
// Smart Mock AI
// =========================================

exports.generate = async (prompt) => {

    const text = prompt.toLowerCase();

    // ==========================
    // Nama
    // ==========================
    if (
        text.includes("siapa nama saya") &&
        text.includes("nama saya")
    ) {

        const match = prompt.match(/Nama saya ([^\n]+)/i);

        if (match) {
            return `Nama kamu ${match[1].trim()}.`;
        }

        return "Maaf, saya belum mengetahui nama kamu.";
    }

    // ==========================
    // Warna favorit
    // ==========================
    if (
        text.includes("warna") &&
        text.includes("saya suka")
    ) {

        const match = prompt.match(/Saya suka (.+)/i);

        if (match) {
            return `Kamu menyukai ${match[1].trim()}.`;
        }

    }

    // ==========================
    // Pekerjaan
    // ==========================
    if (
        text.includes("pekerjaan saya") ||
        text.includes("saya bekerja")
    ) {

        const match = prompt.match(/Saya bekerja sebagai ([^\n]+)/i);

        if (match) {
            return `Pekerjaan kamu adalah ${match[1].trim()}.`;
        }

    }

    // ==========================
    // Hobi
    // ==========================
    if (
        text.includes("hobi saya")
    ) {

        const match = prompt.match(/Hobi saya (.+)/i);

        if (match) {
            return `Hobi kamu adalah ${match[1].trim()}.`;
        }

    }

    // ==========================
    // Default
    // ==========================
    return "Maaf, saya belum mengetahui jawabannya.";
};