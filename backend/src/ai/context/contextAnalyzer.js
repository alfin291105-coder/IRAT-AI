// =========================================
// Context Analyzer IRAT AI v0.6.0
// =========================================

const analyzeContext = (message) => {

    const text = message.toLowerCase();

    return {
        hasQuestion: text.includes("?"),

        hasMemoryReference:
            text.includes("aku") ||
            text.includes("saya") ||
            text.includes("punya") ||
            text.includes("ingat"),

        intentType:
            detectIntent(text)
    };
};


function detectIntent(text) {

    if (
        text.includes("siapa") ||
        text.includes("nama")
    ) {
        return "identity";
    }

    if (
        text.includes("suka") ||
        text.includes("hobi")
    ) {
        return "preference";
    }

    if (
        text.includes("kerja") ||
        text.includes("project")
    ) {
        return "work";
    }

    return "general";
}


module.exports = {
    analyzeContext
};