// =========================================
// Conversation State IRAT AI v0.5.0
// Menyimpan keadaan percakapan
// =========================================

let state = {
    topic: null,
    lastMessage: null,
    lastRole: null
};


function updateState(message, role = "user") {

    state.lastMessage = message;
    state.lastRole = role;

    return state;
}


function getState() {
    return state;
}


function resetState() {

    state = {
        topic: null,
        lastMessage: null,
        lastRole: null
    };

}


module.exports = {
    updateState,
    getState,
    resetState
};