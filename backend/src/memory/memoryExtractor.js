// =========================================
// Memory Extractor IRAT AI v0.2.0
// Mengekstrak fakta penting dari pesan user
// =========================================

function extractMemory(message) {

    const text = message.toLowerCase();

    // Nama
    if (text.startsWith("nama saya")) {

        return {
            category: "identity",
            content: message,
            importance: 10
        };

    }

    // Umur
    if (text.includes("umur saya")) {

        return {
            category: "identity",
            content: message,
            importance: 9
        };

    }

    // Suka
    if (text.includes("saya suka")) {

        return {
            category: "preference",
            content: message,
            importance: 7
        };

    }

    // Pekerjaan
    if (text.includes("saya bekerja")) {

        return {
            category: "work",
            content: message,
            importance: 8
        };

    }

    // Hobi
    if (text.includes("hobi saya")) {

        return {
            category: "hobby",
            content: message,
            importance: 6
        };

    }

    return null;
}

module.exports = {
    extractMemory
};