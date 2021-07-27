const { generateAuthCode } = require('steam-totp');

module.exports = {

	cheakWhenStart: true, // Check old comments when including a script? (only 10)
	reportAfterDelete: true, // Send complaints to users whose comments have been removed.

	manuals: [ // List of ID YOUR guides
	  	2537839098, 2541938934, // etc..
	],

	groups: [ // List of your groups | (Enter not the name of the group, but the end of the link) https://steamcommunity.com/groups/nevzorl
																																    // ^^
		"nevzorl", // etc..                            
	],


	statusSettings: { 
		status: "Online", // available status options: https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EPersonaState.js
		playingGame: "🤬 stop-rep4rep (by perssBest)" // the game that the account will play during the launch of the script (you can specify the id of the game so that the account will play the game)
	},


	loginSettings: {
		accountName: ' ', // ur steam account name.
  		password: ' ', // yes, here is the password.
  		rememberPassword: true, // ?
  		twoFactorCode: generateAuthCode('your_steam_shared_secret') //
	},





	// dont touch this, u can break this shitcode.
	fuckingRegexp: /(\+|)rep/gi, // \s maybe idk im retard.
	numberRegexp: /\d+/g, // number regex
} 