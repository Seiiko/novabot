const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // Limit it to the bot owner.
    if (!message.member.roles.some(r => [owner].includes(r.name))) // If user doesn't have the Admin, Moderator or Bot Owner role.
      return message.channel.send(":no_entry_sign:  |  Only Sei can perform the .phelp command!"); // Send message to the channel.



    if (args == 0) {

      const embedHP = new Discord.RichEmbed()

        .setTitle("Check out what the Miscat Squad has to offer!")
        .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")

        .setColor("#95dbdb")
        .setDescription("For help with a specific command, type \".help [command]\".")

        .setFooter("Nova, the Miscat Squad bot! Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")

        .setURL("https://www.youtube.com/c/miscatsquad")

        .addField("Regular Commands",
        ".avatar  |  .help   |   .info   |   .katseries   |   .ping   |   .report")

        .addField("Fun Commands",
        ".catfact   |   .coinflip   |   .dieroll   |   .dogfact   |   .katgif   |   .motiv   |   .potato   |   .puppy   |   .rate   |   .seisfave")

        .addField("Admin Commands", ".ban   |   .kat   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute", true)
        .addField("Bot Owner Commands", ".bavatar   |   .nick   |   .status   |   .test   |   .utag", true)

      message.channel.send(embedHP);

    }

}

module.exports.info = {

    // Set the command name.
    name: "phelp"

}