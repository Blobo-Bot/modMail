require('./utils/im');
const {Client,Collection} = require('discord.js'),
modmail = new Client({
    ws: {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_PRESENCES"]}
}),
Tools = require('./utils/database/Tools');

modmail.credentials = require('./settings/credentials');
modmail.configuration = require('./settings/config');
modmail.logger = require('./utils/logger').log;
modmail.Tools = new Tools(modmail);


start = async() => {
    // Events handler
    im('./handlers/Events')(modmail);
    im('./utils/database')({
        client: modmail
    });
    await modmail.login(modmail.credentials.base.token)
};
(async () => {
    await start();
})();