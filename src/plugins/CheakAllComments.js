const { Requests, NormalizeData, WhatsNeedToWatch } = require("require-dir")("./", { extensions: [".js"] });
const { html2json } = require('html2json');
const SteamID = require('steamid');
const chalk = require('chalk');
const ora = require("ora");


CheakAllComments = async(client) => {
	const load = ora(chalk.yellow("This may take a while, please do not close the console.\n")).start();

	let obj = WhatsNeedToWatch(client);
	if(obj.length == 0) return;

	for(let x = 0; x < obj.length; x++){
		let select = obj[x];
		for(let i = 0; i < client.config[select].length; i++){
			const req = new Requests(client, select, client.config[select][i]);

			if(select == "groups") await req.getClanID();
				await req.getData();

			const res = await req.get();
			if(!res["comments_html"]) continue;

			const json = html2json(res["comments_html"]);
			let object = NormalizeData(json, select);


			for(let b = 0; b < object.length; b++){
				let com = object[b].comment.match(client.config.fuckingRegexp);
					if(!com || com.length < 4) continue;

				let lastStep = await req.delete(object[b].commentID.match(client.config.numberRegexp)[0]);
					console.logInFile(lastStep["success"], object[b].commentID, object[b]);
						if(client.config.reportAfterDelete == true) req.report(new SteamID(`[U:1:${object[b]["user"]["data-miniprofile"]}]`));
			}

			delete req;
		}
	}
	load.succeed(chalk.green("| Verification was successful, please check your logs folder.\n"));
}


module.exports = CheakAllComments;