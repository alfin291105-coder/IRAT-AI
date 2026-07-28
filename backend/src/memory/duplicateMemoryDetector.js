// =========================================
// Duplicate Memory Detector
// IRAT AI v0.5.0
// =========================================

function isDuplicate(newMemory, memories = []) {
  if (!newMemory) {
    return false;
  }

  return memories.some(
    (memory) =>
      memory.category === newMemory.category &&
      normalize(memory.content) === normalize(newMemory.content),
  );
}

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.!?,]+$/g, "");
}

module.exports = {
  isDuplicate,
  normalize,
};
