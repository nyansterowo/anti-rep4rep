const Start = require("../plugins/CheakAllComments");

module.exports = async(client, _, pings) => {
	setTimeout(async() => { if(client.forRequest != null && pings > 0) Start(client) }, 6000)
};