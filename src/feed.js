const RSS = require("rss-parser");
const { RSS_FEED_URL } = require("./env");

/**
 *
 * @returns {Promise<RSS.Output<unknown>['items']>}
 */
const getNews = () => {
    return new Promise((resolve, reject) => {
        new RSS().parseURL(RSS_FEED_URL, (err, feed) => {
            if (err) {
                return reject(err);
            }

            return resolve(feed.items);
        });
    });
};

module.exports = {
    getNews,
};
