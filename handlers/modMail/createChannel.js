module.exports = async (client, message, guild, member) => {
    let validationCH = guild.channels.cache.find(ch => ch.name === `${member.user.username}_${member.user.discriminator}`);
    if (validationCH) return message.react('✔').then(() => {
        validationCH.send({
            embed: {
                color: 0x2f3136,
                title: 'Nouveau message !!',
                description: `**\`${message.content}\`**`
            }
        })
    })
    let channel = await guild.channels.create('' + member.user.username + '_' + member.user.discriminator, {
        type: 'text',
        parent: client.configuration.prentID,
        topic: message.content
    });
    channel.send({
        embed: {
            color: 0x2f3136,
            description: `**\`${member.user.tag}\`** a ouvert un ticket pour **\`${message.content}\`**`
        }
    });
};