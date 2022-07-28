# Create your scheduled posting bot in Telegram which will be free for you for a lifetime

## ⭐ How does it works?

In general, the pipeline job is more than just build/test, it’s an environment where you can run any code. Technically, there is no problem with running a simple task, where you receive data from any source on the web and then send it to another API, but when you need a state (in this project it’s just for storing news ids that were sent), you can use artifacts. That’s all, lol!

Storing NPM dependencies as ignored files in Git is overused because it affects our pipeline stages and takes more time to execute. The same is for other tools like TypeScript, but, of course, you can create a production build and then commit it. Anyway, this project is only for concept demonstration.

## 🧑‍💻 I want the same! How to use it?

Nothing special, just clone/fork this repo and configure environment variables (you can see theirs in Github Actions workflow file). Then just wait for the next scheduled run! You can customize [src/telegram.js](src/telegram.js#L11) for more beautiful posted messages, like images, etc., and even change the source from RSS to any else!
