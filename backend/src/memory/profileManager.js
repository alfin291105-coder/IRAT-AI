// =========================================
// Profile Manager IRAT AI v0.4.0
// Mengelola profile user
// =========================================

const longMemory = require("./longMemory");

async function saveProfileMemory(
  userId,
  category,
  content,
  importance = 1
) {

  return await longMemory.saveMemory(
    userId,
    category,
    content,
    importance
  );

}

module.exports = {
  saveProfileMemory
};