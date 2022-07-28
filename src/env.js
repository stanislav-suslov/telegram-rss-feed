const env = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    RSS_FEED_URL: process.env.RSS_FEED_URL,
};

let emptyCount = 0;

Object.keys(env).forEach((key) => {
    if (typeof env[key] === "undefined") {
        emptyCount++;
        console.error(`Environment variable "${key} not set!"`);
    }
});

if (emptyCount > 0) {
    process.exit(1);
}

module.exports = env;
