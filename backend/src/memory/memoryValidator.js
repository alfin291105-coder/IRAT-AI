// =========================================
// Memory Validator
// IRAT AI v0.6.0
// Validasi memory sebelum digunakan AI
// =========================================


function validateMemory(memory) {

    if (!memory) {
        return false;
    }


    // Content wajib ada
    if (
        !memory.content ||
        typeof memory.content !== "string"
    ) {
        return false;
    }


    // Category wajib ada
    if (
        !memory.category ||
        typeof memory.category !== "string"
    ) {
        return false;
    }


    return true;
}



function filterValidMemories(memories = []) {

    return memories.filter(
        memory =>
            validateMemory(memory)
    );

}



module.exports = {
    validateMemory,
    filterValidMemories
};