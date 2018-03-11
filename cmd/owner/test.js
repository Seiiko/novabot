const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // Define the role variable.
    let owner = "★ Nova ★";

    // Limit it to the bot owner.
    if (!message.member.roles.some(r => [owner].includes(r.name))) // If user doesn't have the Admin, Moderator or Bot Owner role.
      return message.channel.send(":no_entry_sign:  |  Only Sei can perform the .test command!"); // Send message to the channel.

      const embedCommands = new Discord.RichEmbed() // Create a constant referring to the embed message.

      .setTitle('Check out Sei\'s YouTube channel.')
      .setAuthor('Nova   |   Help', 'https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png')
  
      .setColor('#7d4586')
      .setDescription('For help with a specific command, type \'.help [command]\'.')
  
      .setFooter('Nova, the universal magic bot. Made by Sei.', 'https://cdn.discordapp.com/attachments/419222687525896202/422352880985440257/luminus_bot_stars.png')
  
      .setURL('https://www.youtube.com/c/seiitunes')

      .addBlankField(true)
  
      .addField('Regular Commands',
      '.avatar   |   .help   |   .info   |   .ping   |   .report')

      .addBlankField(true)
  
      .addField('Fun Commands',
      '.8ball   |   .catfact  |   .coinflip   |   .dieroll   |   .dogfact  |   .repeat   |   .motiv   |   .potato   |   .puppy   |   .rate')

      .addBlankField(true)
  
      .addField('Interaction Commands',
      '.barf   |   .cuddle   |   .handhold   |   .hug   |   .kiss   |   .noticeme   |   .pat   |   .poke   |   .pout   |   .punch   |   .shrug   |   .slap   |   .tickle')

      .addBlankField(true)
  
      .addField('NSFW Commands',
      '.boobs   |   .butt   |   .e621   |   .gelbooru   |   .hentai   |   .konachan   |   .rule34   |   .vagina')

      .addBlankField(true)
  
      .addField('Admin Commands',
      '.ban   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute')

      .addBlankField(true)
      
      .addField('Bot Owner Commands',
      '.navatar   |   .nick   |   .status   |   .utag')

      .addBlankField(true)
  
    // Sending the messages.
    message.member.send(embedCommands);

  }

module.exports.info = {

    // Set the command name.
    name: "test"

}