// =========================================
// Project Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (
    text.includes("project") ||
    text.includes("proyek") ||
    text.includes("irat ai")
  ) {

    return {
      category: "project",
      content: message,
      importance: 8
    };

  }

  return null;

}

module.exports = {
  extract
};