const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  await message.delete()
  return message.reply("Hi! I'm an example command").then(m => m.delete(10000))
}

module.exports.help = {
  // naam van je command in discord type je dan !example om hem te activeren
  name: "example"
}
