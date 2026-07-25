// =========================================
// Work Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (
    text.includes("saya bekerja")
  ) {

    return {
      category: "work",
      content: message,
      importance: 8
    };

  }

  return null;

}

module.exports = {
  extract
};