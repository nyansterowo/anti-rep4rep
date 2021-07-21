module.exports = (data) => {
	data = data["child"].filter(obj => obj !== undefined);
	
	let text = "", returned = [];
	for(let x = 1; x < data.length; x += 2){
		let newdata = data[x]["child"]
			if(!newdata) continue;

		try {
			let filtered = newdata[3]["child"][3]["child"].filter(x => x.node == "text" && x.text != "\t\t\t")
		} catch {
			console.error("An error occurred while converting data to json. You can ignore the error or contact the developer.");
			continue;
		}


		for(let i = 0; i < filtered.length; i++){
			text += filtered[i]["text"] + " \n";
		}

		returned.push({
			user: data[x]["child"][3]["child"][1]["child"][1]["child"][1]["child"][0]["text"],
			link: data[x]["child"][1]["child"][1]["attr"]["href"],

			commentID: data[x]["attr"]["id"],
			comment: text 
		});
			text = "";
	}

	return returned;
} 