const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

EventsLoader = async(client) => {
    const events = await readdir("src/events");
    events.forEach(file => {
        try {
            if (!file.endsWith(".js")) return;
            const event = require(`../events/${file.split(".")[0]}`);
            client.on(file.split(".")[0], event.bind(null, client));
        } catch (e) {
            console.error(`Event ${file} failed to load. When compiling, an error occurred: ${e.message}`);
        }
    });
}

module.exports = EventsLoader;