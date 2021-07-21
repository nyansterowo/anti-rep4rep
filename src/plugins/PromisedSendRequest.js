const request = require('node-fetch');

class PromisedSendRequest {
	constructor() {
		// ?
	}
	req(url, params) {
		return new Promise((resolve, reject) => {
			let req = request(url, params).then(x => 
				x.json()
					.then(res => 
						resolve(JSON.parse(JSON.stringify(res)))
						)
					);
		})
	}
}


module.exports = PromisedSendRequest;