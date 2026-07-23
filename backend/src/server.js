require("dotenv").config();

require("./database/schema");

const app = require("./app");

const config = require("./config");

app.listen(config.port, () => {
    console.log(`🚀 IRAT AI berjalan di http://localhost:${config.port}`);
});