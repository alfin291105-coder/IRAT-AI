// =========================================
// Intent Detector IRAT AI v0.3.0
// Mengenali intent dari pertanyaan user
// =========================================

const INTENTS = {
    identity: [
        "nama",
        "namaku",
        "siapa saya",
        "siapa namaku",
        "dipanggil",
        "identitas",
        "umur",
        "usia",
        "lahir",
        "tanggal lahir"
    ],

    preference: [
        "suka",
        "favorit",
        "kesukaan",
        "warna",
        "makanan",
        "minuman",
        "makanan favorit",
        "minuman favorit",
        "musik",
        "lagu",
        "film",
        "genre",
        "olahraga",
    ],

    project: [
        "project",
        "proyek",
        "aplikasi",
        "program",
        "backend",
        "frontend",
        "irat",
        "web",
        "mobile",
        "android",
        "ios",
        'software',
        "sistem",
        "aplikasi web",
        "aplikasi mobile"
    ],

    location: [
        "tinggal",
        "alamat",
        "rumah",
        "kota",
        "negara",
        "lokasi",
        "tempat",
        "di mana",
    ],

    schedule: [
        "jadwal",
        "deadline",
        "agenda",
        "rencana",
        "besok",
        "hari ini",
        "sekarang"
    ],

        work: [
        "kerja",
        "bekerja",
        "kantor",
        "profesi",
        "pekerjaan"
    ],

    hobby: [
        "hobi",
        "hobiku",
        "kegemaran"
    ]
};

function normalize(text = "") {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function detectIntent(message = "") {

    const text = normalize(message);

    let bestIntent = null;
    let bestScore = 0;

    for (const [intent, keywords] of Object.entries(INTENTS)) {

        let score = 0;

        for (const keyword of keywords) {

            if (text.includes(keyword)) {
                score++;
            }

        }

        if (score > bestScore) {
            bestIntent = intent;
            bestScore = score;
        }

    }

    return {
        intent: bestIntent,
        confidence: bestScore
    };

}

module.exports = {
    detectIntent
};