module.exports = (data, type) => {
	data = data["child"].filter(obj => obj !== undefined);
	
	let text = "", returned = [];
	for(let x = 1; x < data.length; x += 2){
		let newdata = data[x]["child"]
			if(!newdata) continue;

		let user = newdata[3]["child"][1];
			user = user["attr"]["class"] == "commentthread_comment_author" ? user["child"][1]["attr"] : user["attr"];

		let filtered;

		try {
			let sukazaebal = !newdata[5] ? newdata[3] : newdata[5];
				filtered = sukazaebal["child"][3]["child"].filter(x => x.node == "text" && x.text != "\t\t\t")
		} catch (err) {
			console.error("An error occurred while converting data to json. You can ignore the error or contact the developer. | " + err.message);
			continue;
		}


		for(let i = 0; i < filtered.length; i++){
			text += filtered[i]["text"] + " \n";
		}

		returned.push({
			user: user,

			commentID: data[x]["attr"]["id"],
			comment: text 
		});
			text = "";
	}

	return returned;
} 