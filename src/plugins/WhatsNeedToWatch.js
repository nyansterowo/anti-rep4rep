WhatsNeedToWatch = (client) => {
	let notNull = [], obj = ["manuals", "groups"];
	obj.forEach(x => {
		if(client.config[x]?.length > 0) notNull.push(x);
	})

	return notNull;
}

module.exports = WhatsNeedToWatch;