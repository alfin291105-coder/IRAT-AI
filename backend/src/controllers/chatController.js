const chatService = require("../services/chatService");

exports.chat = async (req, res) => {

    try {

        const { message } = req.body;

        const reply = await chatService.reply(message);

        res.json({
            success: true,
            reply
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};