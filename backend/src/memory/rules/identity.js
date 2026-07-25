// =========================================
// Identity Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (text.startsWith("nama saya")) {

    return {
      category: "identity",
      content: message,
      importance: 10
    };

  }

  if (text.includes("umur saya")) {

    return {
      category: "identity",
      content: message,
      importance: 9
    };

  }

  return null;

}

module.exports = {
  extract
};