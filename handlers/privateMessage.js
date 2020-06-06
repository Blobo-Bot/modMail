module.exports = async (client, message) => {
    if (!client.configuration.modMailEnabled) return;
    let guild = client.guilds.cache.get(client.configuration.guildID);
    if (!guild) return;
    let member = guild.members.cache.get(message.author.id);
    if (!member) return;
    let mainCategorie = guild.channels.cache.get(client.configuration.prentID);
    if (!mainCategorie) return;
    if (mainCategorie.type !== 'text') return;
    im('./handlers/modMail')(client, message);
};