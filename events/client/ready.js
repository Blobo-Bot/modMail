module.exports = async function(client) {
  await client.user.setActivity('Dm me for help !')
  client.logger('Bot is now ready !!', 'ready')
};