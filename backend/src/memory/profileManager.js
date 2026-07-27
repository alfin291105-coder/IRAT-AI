// =========================================
// Profile Manager IRAT AI v0.4.0
// Mengelola profile user
// =========================================

const { PROFILE_CATEGORIES } = require("./config/profileCategories");
const memoryRepository = require("../repositories/memoryRepository");

async function saveProfileMemory(
    userId,
    category,
    content,
    importance = 1
) {

    const config = PROFILE_CATEGORIES[category];

    // kategori tidak ada di konfigurasi
    if (!config) {

        return await memoryRepository.saveMemory(
    userId,
    category,
    content,
    importance
);

    }


    // kategori boleh memiliki banyak data
    if (config.multiple) {

        return await memoryRepository.saveMemory(
            userId,
            category,
            content,
            importance
        );

    }


    // kategori hanya satu data
    const latestMemory =
    await memoryRepository.getLatestMemoryByCategory(
        userId,
        category
    );


    // belum ada data → buat baru
    if (!latestMemory) {

        return await memoryRepository.saveMemory(
            userId,
            category,
            content,
            importance
        );

    }


    // sudah ada → update
    return await memoryRepository.updateMemory(
        latestMemory.id,
        content,
        importance
    );

}


module.exports = {
    saveProfileMemory
};