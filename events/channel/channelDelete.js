/**
 * @author Sora
 * @param client
 * @param channel
 * @return {Promise<void>}
 */
module.exports = async (client, channel) => {
    try {
        if (!channel.guild) return;
        if (channel.type !== 'text') return;
        let member = channel.guild.members.cache.find(u => u.username+'_'+u.discriminator === channel.name);
    }
    catch (e) {
        console.error(e);
    }
};
