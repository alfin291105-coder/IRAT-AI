require("dotenv").config();

require("./database/schema");

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 IRAT AI Backend berjalan di http://localhost:${PORT}`);
});