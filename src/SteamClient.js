const { EventsLoader } = require("require-dir")("./plugins/", { extensions: [".js"] });
const SteamUser = require('steam-user');
const config = require("../config.js");

class SteamClient extends SteamUser {
	constructor(){
		super();

		this.config = config;
			this.logOn(this.config.loginSettings);

		this.forRequest = null;

		EventsLoader(this);
	}
}

module.exports = SteamClient;