require('./utils/im');
const {Client,Collection} = require('discord.js'),
modmail = new Client({
    ws: {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_PRESENCES"]}
});

modmail.credentials = require('./settings/credentials').credentials;
modmail.configuration = require('./settings/config');

start = async() => {
    // Events handler
    im('./handlers/Events')(modmail);
    await modmail.login(modmail.credentials.base.token)
};
(async () => {
    await start();
})();