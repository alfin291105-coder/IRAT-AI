// =========================================
// Preference Memory Rule IRAT AI v0.4.0
// =========================================

function extract(message, text) {

  if (
    text.includes("saya suka"),
    text.includes("makanan favorit saya"),
    text.includes("minuman favorit saya"),
    text.includes("warna favorit saya")
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