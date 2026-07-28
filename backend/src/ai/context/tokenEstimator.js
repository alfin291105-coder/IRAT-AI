// =========================================
// Token Estimator
// IRAT AI v0.5.0
// =========================================

function estimateTokens(text = "") {
    if (!text) {
        return 0;
    }

    // Estimasi sederhana:
    // 1 token ≈ 4 karakter
    return Math.ceil(text.length / 4);
}

function estimateMessages(messages = []) {
    return messages.reduce((total, message) => {
        const content = message.content || "";

        return total + estimateTokens(content);
    }, 0);
}

module.exports = {
    estimateTokens,
    estimateMessages
};