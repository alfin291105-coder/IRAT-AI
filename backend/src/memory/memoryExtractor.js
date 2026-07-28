// =========================================
// Memory Extractor IRAT AI v0.4.0
// Rule-Based Memory Extractor
// =========================================

const hobby = require("./rules/hobby");
const identity = require("./rules/identity");
const preference = require("./rules/preference");
const project = require("./rules/project");
const work = require("./rules/work");

const rules = [
  hobby,
  identity,
  preference,
  project,
  work
];

function isQuestion(text) {
  const questionWords = [
    "apa",
    "siapa",
    "kapan",
    "di mana",
    "dimana",
    "kenapa",
    "mengapa",
    "bagaimana"
  ];

  if (text.includes("?")) {
    return true;
  }

  return questionWords.some(word => text.startsWith(word));
}

function extractMemory(message) {

  const text = message.toLowerCase();

  // Jangan simpan jika ini pertanyaan
  if (isQuestion(text)) {
    return null;
  }

  for (const rule of rules) {

    const memory = rule.extract(
      message,
      text
    );

    if (memory) {
      return memory;
    }

  }

  return null;

}

module.exports = {
  extractMemory
};