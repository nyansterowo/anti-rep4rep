const Start = require("../plugins/CheakAllComments");

module.exports = async(client, sessionid, cookies) => {
	client.forRequest = {sessionid, cookies};
		if(client.config.cheakWhenStart == true) Start(client);
};
