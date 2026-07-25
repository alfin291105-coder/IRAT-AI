// =========================================
// Hobby Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (
    text.includes("hobi saya")
  ) {

    return {
      category: "hobby",
      content: message,
      importance: 6
    };

  }

  return null;

}

module.exports = {
  extract
};