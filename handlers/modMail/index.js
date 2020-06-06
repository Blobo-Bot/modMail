module.exports = async (client, message) => {
    await message.author.send('envoyé au serveur !').catch(e => {
        if (e) return;
        require('./createChannel')(client, message);
    });
};