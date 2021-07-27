const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const ora = require("ora");

EventsLoader = async(client) => {
    const load = ora(chalk.yellow("The process of loading events is in progress.\n")).start();

    const events = await readdir("src/events");
    events.forEach(file => {
        if (!file.endsWith(".js")) return;
        const name = file.split(".")[0];

        try {
            client.on(file.split(".")[0], require(`../events/${name}`).bind(null, client));
            console.log(` | The \'${name}\' event was loaded successfully.`); 
        } catch (e) {
            console.error(` | Event \'${name}\' failed to load. When compiling, an error occurred: ${e.message}`);
        }
    });

    load.succeed(chalk.green(`Loading events was successful.\n`));
}

module.exports = EventsLoader;