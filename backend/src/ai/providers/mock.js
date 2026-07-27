// =========================================
// Mock AI Provider IRAT AI v0.3.0
// Smart Mock AI
// =========================================

exports.generate = async (prompt) => {
  const text = prompt.toLowerCase();

  // Ambil CURRENT QUESTION
  const questionMatch = prompt.match(
    /CURRENT QUESTION\s*([\s\S]*?)=========================/i,
  );

  const question = questionMatch ? questionMatch[1].trim() : "";

  const questionText = question.toLowerCase();

  console.log("QUESTION:", question);

  if (questionText.startsWith("nama saya")) {
    return "Baik, saya akan mengingat nama kamu.";
  }

  if (questionText.startsWith("hobi saya")) {
    return "Baik, saya akan mengingat hobi kamu.";
  }

  if (questionText.startsWith("saya bekerja")) {
    return "Baik, saya akan mengingat pekerjaan kamu.";
  }

  // ==========================
  // Nama
  // ==========================
  if (questionText.includes("siapa nama saya")) {
    const match = prompt.match(/Nama saya ([^\n]+)/i);

    if (match) {
      return `Nama kamu ${match[1].trim()}.`;
    }

    return "Maaf, saya belum mengetahui nama kamu.";
  }

  // ==========================
  // Warna favorit
  // ==========================
  if (questionText.includes("warna") && questionText.includes("saya suka")) {
    const match = prompt.match(/Saya suka (.+)/i);

    if (match) {
      return `Kamu menyukai ${match[1].trim()}.`;
    }
  }

  // ==========================
  // Pekerjaan
  // ==========================
  if (
    questionText.includes("pekerjaan saya") ||
    questionText.includes("saya bekerja")
  ) {
    const match = prompt.match(/Saya bekerja sebagai ([^\n]+)/i);

    if (match) {
      return `Pekerjaan kamu adalah ${match[1].trim()}.`;
    }
  }

  // ==========================
  // Hobi
  // ==========================
  if (questionText.includes("hobi saya")) {
    const match = prompt.match(/Hobi saya (.+)/i);

    if (match) {
      return `Hobi kamu adalah ${match[1].trim()}.`;
    }
  }

  // ==========================
  // Default
  // ==========================
  return "Maaf, saya belum mengetahui jawabannya.";
};
