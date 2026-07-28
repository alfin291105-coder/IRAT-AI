// =========================================
// Memory Updater
// IRAT AI v0.5.0
// =========================================

const SINGLE_VALUE_CATEGORIES = [
    "identity",
    "work"
];

function canUpdate(category) {
    return SINGLE_VALUE_CATEGORIES.includes(category);
}

function findMemoryToUpdate(newMemory, memories = []) {
    if (!newMemory || !canUpdate(newMemory.category)) {
        return null;
    }

    return memories.find(memory =>
        memory.category === newMemory.category
    );
}

module.exports = {
    canUpdate,
    findMemoryToUpdate
};