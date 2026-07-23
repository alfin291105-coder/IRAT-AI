const db = require("../database/db");
const aiEngine = require("../ai/engine");

exports.reply = async (message) => {

    const reply = await aiEngine.chat(message);

    db.run(
        `
        INSERT INTO messages(userId,message,reply)
        VALUES(?,?,?)
        `,
        [
            "guest",
            message,
            reply
        ]
    );

    return reply;

};