const { EPersonaState } = require('steam-user');

module.exports = async(client) => {
    console.log("The script has been successfully launched on the account and starts tracking spammers!");

    client.setPersona(EPersonaState[client.config.statusSettings.status]);
    client.gamesPlayed(client.config.statusSettings.playingGame);
};