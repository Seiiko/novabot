const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // General help command, no command specified.
    if (!args) {

        const embedHelp = new Discord.RichEmbed()
  
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

          .addField('Music Commands',
          '.play   |   .stop   |   .pause   |   .resume   |   .skip   |   .volume   |   .queue   |   .clearqueue')

          .addBlankField(true)
          
          .addField('NSFW Commands',
          '.boobs   |   .butt   |   .e621   |   .gelbooru   |   .hentai   |   .konachan   |   .rule34   |   .vagina')

          .addBlankField(true)
  
          .addField('Admin Commands',
          '.ban   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute')

          .addBlankField(true)
      
          .addField('Bot Owner Commands',
          '.bavatar   |   .nick   |   .status   |   .utag')

          .addBlankField(true)
  
        message.member.send(embedHelp);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!");
  
    } else if (args[0] !== cmd) {

        message.channel.send('That is not a valid command!');

    } else {

        message.channel.send('A valid command was input!');

    }

    // RESOURCES
    /* if (args[0] === "help") {
  
        const embedHelpCm = new Discord.RichEmbed()
  
          .setTitle("The .help command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command allows you to see a full list of all the bot's commands or get help for a specific command. That's how you got here!")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".help [command]")
  
        message.member.send(embedHelpCm);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "info") {
  
        const embedInfo = new Discord.RichEmbed()
  
          .setTitle("The .info command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Use this command to check out some information about the bot, including its current version.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".info")
  
        message.member.send(embedInfo);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "ping") {
  
        const embedPing = new Discord.RichEmbed()
  
          .setTitle("The .ping command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Use this command to calculate your current ping.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".ping")
  
        message.member.send(embedPing);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "report") {
  
        const embedReport = new Discord.RichEmbed()
  
          .setTitle("The .report command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command allows you to report another member for misbehavior. Your message will be deleted afterwards, to keep your privacy, and the mods will get an alert of your report.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".report [member] [reason]")
  
        message.member.send(embedReport);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "catfact") {
  
        const embedCat = new Discord.RichEmbed()
  
          .setTitle("The .catfact command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Use this command to get a random cat fact.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".catfact")
  
        message.member.send(embedCat);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "coinflip") {
  
        const embedCoin = new Discord.RichEmbed()
  
          .setTitle("The .coinflip command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command will give you one of two results: heads or tails.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".coinflip")
  
        message.member.send(embedCoin);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "dieroll") {
  
        const embedDie = new Discord.RichEmbed()
  
          .setTitle("The .dieroll command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command will give you a random number from 1 to six.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".dieroll")
  
        message.member.send(embedDie);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "motiv" || args[0] === "mq") {
  
        const embedMotiv = new Discord.RichEmbed()
  
          .setTitle("The .motiv command.")
          .setAuthor("Nova  |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Feeling down? This command will give you a random motivational quote.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".motiv")
  
          .addField("Aliases",
          ".mq")
  
        message.member.send(embedMotiv);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "potato") {
  
        const embedPotato = new Discord.RichEmbed()
  
          .setTitle("The .potato command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Potatoes for everyone. Specify a number from 1 to 250 and you'll get potatoes.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".potato [number of potatoes]")
  
        message.member.send(embedPotato);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "puppy" || args[0] === "puppies") {
  
        const embedPuppy = new Discord.RichEmbed()
  
          .setTitle("The .puppy command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command will give you a random puppy picture.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".puppy")
  
          .addField("Aliases",
          ".puppies")
  
        message.member.send(embedPuppy);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "dogfact") {
  
        const embedDog = new Discord.RichEmbed()
  
          .setTitle("The .dogfact command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("This command will give you a random dog fact.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".dogfact")
  
        message.member.send(embedDog);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "rate") {
  
        const embedRate = new Discord.RichEmbed()
  
          .setTitle("The .rate command.")
          .setAuthor("Nova  |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("The bot will give its opinion about anything you want to. It'll rate it from 0 to 10 out of 10.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".rate [what to rate]")
  
        message.member.send(embedRate);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "ban") {
  
        const embedBan = new Discord.RichEmbed()
  
          .setTitle("The .ban command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Ban a member.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".ban [member] [reason]")
  
        message.member.send(embedBan);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "kick") {
  
        const embedKick = new Discord.RichEmbed()
  
          .setTitle("The .kick command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Kick a member.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".kick [member] [reason]")
  
        message.member.send(embedKick);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "purge") {
  
        const embedPurge = new Discord.RichEmbed()
  
          .setTitle("The .purge command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Clean a set number of messages (maximum of 100, minimum of 2).")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".purge")
  
        message.member.send(embedPurge);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "say") {
  
        const embedSay = new Discord.RichEmbed()
  
          .setTitle("The .say command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Makes the bot say whatever you want.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".say")
  
        message.member.send(embedSay);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "bavatar") {
  
        const embedAvatar = new Discord.RichEmbed()
  
          .setTitle("The .bavatar command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[BOT OWNER ONLY] Changes the bot's profile picture.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".avatar")
  
        message.member.send(embedAvatar);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "nick") {
  
        const embedNick = new Discord.RichEmbed()
  
          .setTitle("The .nick command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[BOT OWNER ONLY] Changes the bot's nickname.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".nick")
  
        message.member.send(embedNick);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "status") {
  
        const embedStatus = new Discord.RichEmbed()
  
          .setTitle("The .status command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[BOT OWNER ONLY] Changes the bot's playing status.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".status")
  
        message.member.send(embedStatus);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "test") {
  
        const embedTest = new Discord.RichEmbed()
  
          .setTitle("The .test command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[BOT OWNER ONLY] Tests various bot functions.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".test")
  
        message.member.send(embedTest);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "utag") {
  
        const embedTag = new Discord.RichEmbed()
  
          .setTitle("The .utag command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[BOT OWNER ONLY] Changes the bot's user tag.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".utag")
  
        message.member.send(embedTag);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "mute") {
  
        const embedMute = new Discord.RichEmbed()
  
          .setTitle("The .mute command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Mute a member by giving them the Muted role.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".mute")
  
        message.member.send(embedMute);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "unmute") {
  
        const embedUnmute = new Discord.RichEmbed()
  
          .setTitle("The .unmute command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("[MODERATORS ONLY] Unmute a member by removing their Muted role.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".unmute")
  
        message.member.send(embedUnmute);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else if (args[0] === "avatar") {
  
        const embedUnmute = new Discord.RichEmbed()
  
          .setTitle("The .avatar command.")
          .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .setColor("#95dbdb")
          .setDescription("Get a member's profile picture.")
  
          .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")
  
          .addField("Usage",
          ".avatar [member]")
  
        message.member.send(embedUnmute);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!")
  
    } else {
        message.channel.send(":interrobang:  |  That command doesn't exist!\n:interrobang:  |  **Usage:** .help [command name]")
    } */
    
}

module.exports.info = {

    // Set the command name.
    name: "help"

}