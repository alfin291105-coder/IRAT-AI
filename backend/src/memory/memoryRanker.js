// =========================================
// Memory Ranker
// IRAT AI v0.6.0
// =========================================

function normalize(value, max = 10) {
    if (!value) return 0;

    return Math.min(
        Number(value),
        max
    );
}


function calculateMemoryScore(memory) {

    let score = 0;


    // Importance
    score +=
        normalize(memory.importance) * 10;


    // Confidence memory
    score +=
        normalize(memory.confidence) * 5;


    // Frequency penggunaan memory
    score +=
        normalize(memory.usageCount) * 2;


    // Category priority
    if (
        memory.category === "identity" ||
        memory.category === "preference"
    ) {
        score += 50;
    }


    return score;
}


function rankMemories(memories = []) {

    return memories
        .map(memory => ({
            ...memory,

            contextScore:
                calculateMemoryScore(memory)
        }))
        .sort(
            (a, b) =>
                b.contextScore -
                a.contextScore
        );
}


module.exports = {
    rankMemories,
    calculateMemoryScore,
    normalize
};