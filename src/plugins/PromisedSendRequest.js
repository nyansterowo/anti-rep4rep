const request = require('node-fetch');

class PromisedSendRequest {
	constructor() {
		// ?
	}
	req(url, params, json = true) {
		return new Promise((resolve, reject) => {
			let req = request(url, params, json).then(x => {
				x = json ? x.json() : x.text()
					x.then(res => 
						resolve(json ? JSON.parse(JSON.stringify(res)) : res)
						)
					});
		})
	}
}


module.exports = PromisedSendRequest;