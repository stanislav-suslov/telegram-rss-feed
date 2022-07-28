const { getNews } = require("./feed");
const { getStorage, saveStorage } = require("./storage");
const { sendMessages } = require("./telegram");
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = require("./env");

(async () => {
    const news = await getNews();
    console.log(`Received ${news.length} news.`);

    const storage = await getStorage();

    const freshNews = news.filter((i) => !storage.includes(i.guid));
    console.log(`Found ${freshNews.length} fresh news.`);

    if (freshNews.length > 0) {
        await sendMessages(
            freshNews.map(
                (i) => `<a href="${i.link}">${i.title}</a>\n${i.content}`
            ),
            TELEGRAM_BOT_TOKEN,
            TELEGRAM_CHAT_ID
        );

        await saveStorage(news.map((i) => i.guid));
        console.log(`Successfully sent ${freshNews.length} fresh news!`);
    } else {
        console.log("There's nothing to send. Successfully shutdown.");
    }

    process.exit(0);
})();
