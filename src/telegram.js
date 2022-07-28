const sleepSecond = () => new Promise((resolve) => setTimeout(resolve, 1000));

/**
 *
 * @param {{guid: string, text: string}} messages
 * @param {string} botToken
 * @param {string} chatId
 * @param {boolean} isFirst
 */
const sendMessage = (message, botToken, chatId, isFirst) => {
    const data = JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
        disable_notification: !isFirst,
    });

    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then((response) => response.json())
        .then((response) => {
            if (!response.ok) {
                throw new Error(JSON.stringify(response));
            }
        });
};

/**
 *
 * @param {string[]} messages
 * @param {string} botToken
 * @param {string} chatId
 * @returns {Promise<string[]>} guids
 */
const sendMessages = (messages, botToken, chatId) => {
    return messages.reduce((acc, message, index) => {
        return acc
            .then(sleepSecond)
            .then(() => sendMessage(message, botToken, chatId, index === 0));
    }, Promise.resolve());
};

module.exports = {
    sendMessages,
};
