const { Requests, NormalizeData } = require("require-dir")("./", { extensions: [".js"] });
const { html2json } = require('html2json');
const chalk = require('chalk');
const ora = require("ora");


CheakAllComments = async(client) => {
	const load = ora(chalk.yellow("This may take a while, please do not close the console.\n")).start();
	for(let i = 0; i < client.config.manuals.length; i++){
		const req = new Requests(client, client.config.manuals[i]);

		await req.getData();

		const res = await req.get();
		if(!res["comments_html"]) continue;
		const json = html2json(res["comments_html"]);
		let object = NormalizeData(json);


		for(let b = 0; b < object.length; b++){
			let com = object[b].comment.match(client.config.fuckingRegexp);
				if(!com || com.length < 4) continue;


			let lastStep = await req.delete(object[b].commentID.match(client.config.numberRegexp)[0]);
				console.logInFile(lastStep["success"], object[b].commentID, object[b]);
		}

		load.succeed(chalk.green("| Verification was successful, please check your logs folder.\n"));
		delete req;
	}
}


module.exports = CheakAllComments;