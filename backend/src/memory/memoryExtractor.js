// =========================================
// Memory Extractor IRAT AI v0.4.0
// Rule-Based Memory Extractor
// =========================================

const hobby = require("./rules/hobby");
const identity = require("./rules/identity");
const preference = require("./rules/preference");
const work = require("./rules/work");

const rules = [
  hobby,
  identity,
  preference,
  work
];

function extractMemory(message) {

  const text = message.toLowerCase();

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