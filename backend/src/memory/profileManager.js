// =========================================
// Profile Manager IRAT AI v0.4.0
// Mengelola profile user
// =========================================

const { PROFILE_CATEGORIES } = require("./config/profileCategories");
const longMemory = require("./longMemory");

async function saveProfileMemory(
    userId,
    category,
    content,
    importance = 1
) {

    const config = PROFILE_CATEGORIES[category];

    // kategori tidak ada di konfigurasi
    if (!config) {

        return await longMemory.saveMemory(
            userId,
            category,
            content,
            importance
        );

    }


    // kategori boleh memiliki banyak data
    if (config.multiple) {

        return await longMemory.saveMemory(
            userId,
            category,
            content,
            importance
        );

    }


    // kategori hanya satu data
    const latestMemory =
        await longMemory.getLatestMemoryByCategory(
            userId,
            category
        );


    // belum ada data → buat baru
    if (!latestMemory) {

        return await longMemory.saveMemory(
            userId,
            category,
            content,
            importance
        );

    }


    // sudah ada → update
    return await longMemory.updateMemory(
        latestMemory.id,
        content,
        importance
    );

}


module.exports = {
    saveProfileMemory
};