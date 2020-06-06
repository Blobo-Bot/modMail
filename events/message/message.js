module.exports = async function(client, message) {
    if(message.author.bot) return;
    if(message.channel.type === 'dm'){
        return im('./handlers/PrivateMessage')(client, message);
    }
    console.log(message.channel.type)
};