const { Requests, CheakAllComments } = require("require-dir")("../plugins/", { extensions: [".js"] });

module.exports = async(client, sessionid, cookies) => {
	client.forRequest = {sessionid, cookies};

	if(!Object.keys(client.myGroups).find(x => x == "103582791469244054")) new Requests(client).joinGroup();
		if(client.config.cheakWhenStart == true) CheakAllComments(client);
};