const PromisedSendRequest = require("./PromisedSendRequest");

class CustomRequest extends PromisedSendRequest {
	constructor(client, manualID) {
		super();

		this.client = client;
		this.data = null;
		this.path = {
			manual: `https://steamcommunity.com/comment/PublishedFile_Public/render/${client.steamID}/${manualID}/`,
			delete: `https://steamcommunity.com/comment/PublishedFile_Public/delete/${client.steamID}/${manualID}/`,
		};
	}

	async getData(){
		let res = await this.req(this.path.manual);
			this.data = `start=${res["start"]}&totalcount=${res["total_count"]}&count=10`;
	}

	async get(){
		let res = await this.req(this.path.manual, {
			method: "POST",
			headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": `${this.client.forRequest["cookies"].join("; ")}`,
            },

			body: `${this.data}&sessionid=${this.client.forRequest["sessionid"]}&feature2=-1`,
		});
		
		return res;
	};

	async delete(commentID){
		let res = await this.req(this.path.delete, {
			method: "POST",
			headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": `${this.client.forRequest["cookies"].join("; ")}`,
            },

            body: `gidcomment=${commentID}&${this.data}&sessionid=${this.client.forRequest["sessionid"]}&feature2=-1`,
		});

		return res;
	}
}


module.exports = CustomRequest;