// =========================================
// Message Formatter
// IRAT AI v0.5.0
// =========================================

function formatMessage(role, content) {
    return {
        role,
        content
    };
}

function formatMessages(messages = []) {
    return messages.map(message => ({
        role: message.role,
        content: message.content
    }));
}

module.exports = {
    formatMessage,
    formatMessages
};