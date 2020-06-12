require('./utils/im');
const {Client,Collection} = require('discord.js'),
modmail = new Client({
    ws: {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_PRESENCES"]}
}),
dataUTILS = require('./settings/credentials').db;

modmail.credentials = require('./settings/credentials').credentials;
modmail.configuration = require('./settings/config');
modmail.logger = require('./utils/logger').log;
modmail.dataUTILS = new dataUTILS();


start = async() => {
    // Events handler
    im('./handlers/Events')(modmail);
    im('./utils/database')(modmail);
    await modmail.login(modmail.credentials.base.token)
};
(async () => {
    await start();
})();