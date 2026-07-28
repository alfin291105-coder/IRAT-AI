// =========================================
// Context Scorer
// IRAT AI v0.5.0
// =========================================

function calculateScore(message, currentQuestion) {
    if (!message || !currentQuestion) {
        return 0;
    }

    const content = (message.content || "").toLowerCase();
    const keywords = (currentQuestion || "")
    .toLowerCase()
    .split(" ");;

    let score = 0;

    keywords.forEach(keyword => {
        if (keyword && content.includes(keyword)) {
            score += 1;
        }
    });

    return score;
}

function scoreMessages(messages = [], currentQuestion = "") {
    return messages.map(message => ({
        ...message,
        score: calculateScore(message, currentQuestion)
    }));
}

module.exports = {
    calculateScore,
    scoreMessages
};