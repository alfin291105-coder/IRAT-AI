// =========================================
// Preference Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (
    text.includes("saya suka")
  ) {

    return {
      category: "preference",
      content: message,
      importance: 7
    };

  }

  return null;

}

module.exports = {
  extract
};