// =========================================
// Follow Up Detector
// IRAT AI v0.5.0
// Deteksi pertanyaan lanjutan
// =========================================

const FOLLOW_UP_KEYWORDS = [
    "apa",
    "bagaimana",
    "yang mana",
    "itu",
    "tersebut",
    "dia",
    "mereka",
    "yang tadi",
    "yang sebelumnya"
];


function isFollowUp(message) {

    if (!message) {
        return false;
    }

    const text = message.toLowerCase();

    return FOLLOW_UP_KEYWORDS.some(
        keyword => text.includes(keyword)
    );
}


module.exports = {
    isFollowUp
};