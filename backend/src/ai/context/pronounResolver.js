// =========================================
// Pronoun Resolver
// IRAT AI v0.5.0
// =========================================

const PRONOUNS = [
    "dia",
    "ia",
    "beliau",
    "itu",
    "tersebut",
    "yang tadi"
];

function containsPronoun(text = "") {
    const lower = text.toLowerCase();

    return PRONOUNS.some(pronoun =>
        lower.includes(pronoun)
    );
}

function resolvePronoun(messages = []) {
    for (let i = messages.length - 1; i >= 0; i--) {

        const message = messages[i];

        // Hanya lihat pesan user
        if (message.role !== "user") {
            continue;
        }

        const content = message.content || "";

        // Lewati kalimat yang berisi kata ganti
        if (containsPronoun(content)) {
            continue;
        }

        const matches = content.match(/\b[A-Z][a-zA-Z0-9_-]+\b/g);

        if (!matches) {
            continue;
        }

        const entities = matches.filter(word =>
            ![
                "Saya",
                "Aku",
                "Dia",
                "Ia",
                "Beliau",
                "Itu",
                "Tersebut"
            ].includes(word)
        );

        if (entities.length > 0) {
            return entities[entities.length - 1];
        }
    }

    return null;
}

module.exports = {
    containsPronoun,
    resolvePronoun
};