module.exports = async (client, message) => {
    if (!client.configuration.modMailEnabled) return;
    let guild = client.guilds.cache.get(client.configuration.guildID);
    if (!guild) return;
    let member = guild.members.cache.find(u => u.id === message.author.id);
    if (!member) return;
    let mainCategorie = guild.channels.cache.find(p=> p.id === client.configuration.prentID);
    if (!mainCategorie) return;
    if (mainCategorie.type !== 'category') return;
    im('./handlers/modMail')(client, message, guild, member);

};