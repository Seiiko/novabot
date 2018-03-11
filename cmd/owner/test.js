module.exports.run = async (client, message, args) => {

    // Define the role variable.
    let owner = "★ Nova ★";

    // Limit it to the bot owner.
    if (!message.member.roles.some(r => [owner].includes(r.name))) // If user doesn't have the Admin, Moderator or Bot Owner role.
      return message.channel.send(":no_entry_sign:  |  Only Sei can perform the .test command!"); // Send message to the channel.

      const embedCommands = new Discord.RichEmbed() // Create a constant referring to the embed message.

      .setTitle('Check out Sei\'s YouTube channel.')
      .setAuthor('Nova   |   Help', 'https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png')
  
      .setColor('#95dbdb')
      .setDescription('For help with a specific command, type \'.help [command]\'.')
  
      .setFooter('Nova, the universal magic bot. Made by Sei.', 'https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png')
  
      .setURL('https://www.youtube.com/c/seiitunes')
  
      .addField('Regular Commands',
      '.avatar  |  .help  |  .info  |  .ping  |  .report')
  
      .addField('Fun Commands',
      '.8ball  |  .catfact  |  .coinflip  |  .dieroll  |  .dogfact  |  .repeat  |  .motiv  |  .potato  |  .puppy  |  .rate')
  
      .addField('Interaction Commands',
      '.barf  |  .cuddle  |  .handhold  |  .hug  |  .kiss  |  .noticeme  |  .pat  |  .poke  |  .pout  |  .punch  |  .shrug  |  .slap  |  .tickle')
  
      .addField('NSFW Commands',
      '.boobs  |  .butt  |  .e621  |  .gelbooru  |  .hentai  |  .konachan  |  .rule34  |  .vagina')
  
      .addField('Admin Commands',
      '.ban  |  .kick  |  .mute  |  .purge  |  .say  |  .unmute')
      
      .addField('Bot Owner Commands',
      '.navatar  |  .nick  |  .status  |  .utag')
  
    // Sending the messages.
    message.member.send(embedCommands);

  }

module.exports.info = {

    // Set the command name.
    name: "test"

}