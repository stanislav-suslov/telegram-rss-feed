const { readFile, writeFile } = require("node:fs/promises");

const storagePath = "./storage.json";

/**
 * @returns {Promise<string[]>}
 */
const getStorage = () =>
    readFile(storagePath, "utf-8")
        .then(JSON.parse)
        .catch(() => []);

/**
 *
 * @param {string[]} guids
 */
const saveStorage = (guids) => writeFile(storagePath, JSON.stringify(guids));

module.exports = {
    getStorage,
    saveStorage,
};
