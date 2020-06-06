module.exports = async (client, message, guild, member) => {

    let err = []
    await message.author.send('envoyé au serveur !').catch(O_o => {
        if (O_o) err.push(O_o);
    });
    await message.react('✔')
    if(err.length !== 0) return;
    im('./handlers/modMail/createChannel')(client, message, guild, member)
};