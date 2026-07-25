const chatService = require("../services/chatService");

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message required",
      });
    }

    const reply = await chatService.reply(message);

    res.json({
      success: true,
      reply,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
