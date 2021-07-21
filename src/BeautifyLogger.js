const { createWriteStream } = require("fs");
const chalk = require('chalk');

class BeautifyLogger {
	constructor(){
		this.log = console.log;

		console.log = (text) => this.log(chalk.bgGreen("[✓]") + chalk.green.bold(` ` + text))
		console.warn = (warn) => this.log(chalk.bgYellow("[!]") + chalk.yellow.bold(` ` + warn))
		console.error = (error) => this.log(chalk.bgRed("[!!!]") + chalk.red.bold(` ` + error))


		console.logInFile = (status, id, content) => {
			let text = [
				status == true ? "✔ | Successful removal of the next spam." : "✖ | An error occurred while deleting a spam comment.",
				`\n> Author: ${content.user} (${content.link})`,
				`> Content of the comment: \n${content.comment}`
			];

			createWriteStream(`./logs/${id}.txt`, { flags: 'a' }).write(text.join("\n"));
		}
	}
}

module.exports = BeautifyLogger;