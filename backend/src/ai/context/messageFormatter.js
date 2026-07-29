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

function formatMessages(
    messages = [],
    metadata = {}
) {
    return {
        messages: messages.map(message => ({
            role: message.role,
            content: message.content
        })),
        metadata
    };
}

module.exports = {
    formatMessage,
    formatMessages
};