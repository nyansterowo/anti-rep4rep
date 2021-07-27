const { createWriteStream } = require("fs");
const SteamID = require('steamid');
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
				`\n> Author: ${new SteamID("[U:1:" + content.user["data-miniprofile"] + "]")} (${content.user["href"]})`,
				`> Content of the comment: \n${content.comment}`
			];

			content.user["href"]

			createWriteStream(`./logs/${id}.txt`, { flags: 'a' }).write(text.join("\n"));
		}
	}
}

module.exports = BeautifyLogger;