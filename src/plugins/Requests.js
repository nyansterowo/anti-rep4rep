const PromisedSendRequest = require("./PromisedSendRequest");
const { xml2json } = require('xml-js');

class CustomRequest extends PromisedSendRequest {
	constructor(client = {}, type = null, id) {
		super();

		this.client = client;

		this.type = type;

		this.data = null;
		this.path = {
			manuals: `https://steamcommunity.com/comment/PublishedFile_Public/render/${client.steamID}/${id}/`,
			delete_manuals: `https://steamcommunity.com/comment/PublishedFile_Public/delete/${client.steamID}/${id}/`,

			report: `https://steamcommunity.com/actions/ReportAbuse/`,
			getClanID: `https://steamcommunity.com/groups/${id}/memberslistxml/?xml=1`,
			joinToGroup: `https://steamcommunity.com/groups/`,
		};

		this.headers = { "Content-Type": "application/x-www-form-urlencoded", "Cookie": `${this.client.forRequest["cookies"].join("; ")}` }
	}

	async getData(){
		let res = await this.req(this.path[this.type]);
			this.data = `start=${res["start"]}&totalcount=${res["total_count"]}&count=10`;
	}

	async getClanID(){
		let res = await this.req(this.path.getClanID, {
			method: "GET",
			headers: this.headers,
		}, false);

		let { memberList: { groupID64: { _text: id } } } = await JSON.parse(xml2json(res, { compact: true, spaces: 4 }));

			this.path.groups = `https://steamcommunity.com/comment/Clan/render/${id}/-1/`;
			this.path.delete_groups = `https://steamcommunity.com/comment/Clan/delete/${id}/-1/`

		return true;
	}

	async get(){
		let res = await this.req(this.path[this.type], {
			method: "POST",
			headers: this.headers,

			body: `${this.data}&sessionid=${this.client.forRequest["sessionid"]}&feature2=-1`,
		});
		
		return res;
	};

	async delete(commentID){
		let res = await this.req(this.path[`delete_${this.type}`], {
			method: "POST",
			headers: this.headers,

            body: `gidcomment=${commentID}&${this.data}&sessionid=${this.client.forRequest["sessionid"]}&feature2=-1`,
		});

		return res;
	}


	async report(profileID){
		let res = await this.req(this.path.report, {
			method: "POST",
			headers: this.headers,

            body: `sessionid=${this.client.forRequest["sessionid"]}&json=1&abuseID=${profileID}&eAbuseType=3&abuseDescription=spam+in+comments&ingameAppID=`,
		}, false);

		return res;
	}


	async joinGroup(name = "nevzorl"){
		let res = await this.req(this.path.joinToGroup + name, {
			method: "POST",
			headers: this.headers,

            body: `action=join&sessionid=${this.client.forRequest["sessionid"]}`,
		}, false)

		return true;
	}
}


module.exports = CustomRequest;