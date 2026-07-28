// =========================================
// Memory Ranker IRAT AI v0.3.0
// Menghitung relevansi memory
// =========================================

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateScore(memory, message, detectedIntent) {
  let score = 0;

  const content = normalize(memory.content);
  const messageText = normalize(message);

  // Intent / category cocok
  if (detectedIntent && memory.category === detectedIntent) {
    score += 100;
  }

  // Keyword matching
  const words = messageText.split(" ").filter((word) => word.length >= 3);

  let keywordMatches = 0;

  for (const word of words) {
    if (content.includes(word)) {
      keywordMatches++;
      score += 10;
    }
  }

  // Importance & Recency hanya jika memory memang relevan
  if (keywordMatches > 0 || memory.category === detectedIntent) {
    score += (memory.importance || 0) * 5;
    score += calculateRecency(memory);
  }
  return score;
}

function calculateRecency(memory) {
  const timestamp = memory.updatedAt || memory.createdAt;

  if (!timestamp) {
    return 0;
  }

  const age = Date.now() - new Date(timestamp).getTime();

  const days = age / (1000 * 60 * 60 * 24);

  if (days <= 7) {
    return 20;
  }

  if (days <= 30) {
    return 10;
  }

  return 0;
}

function rankMemories(memories, message, detectedIntent) {
  return memories
    .map((memory) => ({
      ...memory,
      score: calculateScore(memory, message, detectedIntent),
    }))
    .sort((a, b) => b.score - a.score);
}

module.exports = {
  rankMemories,
};
