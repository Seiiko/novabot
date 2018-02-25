// SETUP THE BOT
const Discord = require('discord.js');
const client = new Discord.Client();

// SETUP THE DEPENDENCIES
const fs = require("fs");

// DEFINE THE PREFIX
const prefix = ".";

// CREATE THE SPAM COLLECTIONS
const talkedRecently = new Set();
const talkedRecently1 = new Set(); 
const talkedRecently2 = new Set(); 
const talkedRecently3 = new Set(); 

// SETUP THE COMMANDS COLLECTION
client.commands = new Discord.Collection();

// READ THE REGULAR COMMANDS FOLDER
fs.readdir("./cmd/regular", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} regular commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/regular/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE ADMIN COMMANDS FOLDER
fs.readdir("./cmd/admin", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} admin commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/admin/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE BOT OWNER COMMANDS FOLDER
fs.readdir("./cmd/owner", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} bot owner commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/owner/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE FUN COMMANDS FOLDER
fs.readdir("./cmd/fun", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} fun commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/fun/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE NSFW COMMANDS FOLDER
fs.readdir("./cmd/nsfw", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} NSFW commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/nsfw/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// SET BOT STATUS
client.on('ready', () => { // When the bot is ready.
    client.user.setPresence({ game: { name: 'with your Universe', type: 0 } }); // Set the bot's status.
});
    
// WELCOME NEW MEMBERS
client.on("guildMemberAdd", member => { // Listener event: user joining the server.

  let wRole = member.guild.roles.find("name", "★ Casual ★");
    
  // Defining the variables.
  const welcomeChannel = client.channels.find("name", "welcome") // Create a variable referring to the selected channel.
  const embedCommands = new Discord.RichEmbed() // Create a constant referring to the embed message.

    .setTitle("Check out Seii's YouTube channel.")
    .setAuthor("Nova   |   Help", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")

    .setColor("#95dbdb")
    .setDescription("For help with a specific command, type \".help [command]\".")

    .setFooter("Nova, the universal magic bot. Made by Sei.", "https://cdn.discordapp.com/attachments/394292753330339840/408696752489627668/luminus_bot_icon.png")

    .setURL("https://www.youtube.com/c/seiitunes")

    .addField("Regular Commands",
    ".help   |   .info   |   .ping   |   .report")

    .addField("Fun Commands",
    ".catfact   |   .coinflip   |   .dieroll   |   .dogfact   |   .motiv   |   .potato   |   .puppy   |   .rate")

    .addField("NSFW Commands",
    ".boobs   |   .butt   |   .e621   |   .gelbooru   |  .hentai  |   .konachan   |   .rule34   |   .vagina")

    .addField("Admin Commands", ".ban   |   .kat   |   .kick   |   .mute   |   .purge   |   .say   |   .unmute", true)
    .addField("Bot Owner Commands", ".avatar   |   .nick   |   .status   |   .test   |   .utag", true)

  // Sending the messages.
  welcomeChannel.send("<@!"+member.user.id+"> || **Welcome to Luminus!** \nBe sure to introduce yourself, before the fun starts. We're happy to have you here, and we hope you have a nice time here.");
  member.send("**Welcome to Luminus!** \nBe sure to introduce yourself, before the fun starts. We're happy to have you here, and we hope you have a nice time here.");
  member.send(":white_check_mark:  |  Here's a list of all the commands of the bot! Write \".help [command name]\" to get specific help with that command.");
  member.send(embedCommands);

  // Giving member role.
  member.addRole(wRole);
    
});

// COMMAND HANDLER
client.on("message", async message => {

   // Ignore other bots, including itself.
   if(message.author.bot) return;
  
   // Ignore messages without prefix.
   if(message.content.indexOf(prefix) !== 0) return;
   
   // Separate the "command" name, and our "arguments" for the command.
   let raw = message.content.split(/ +/g);
   let command = raw[0];
   let args = raw.slice(1);

  // Spam prevention.
  if (talkedRecently.has(message.author.id)) {

    talkedRecently1.add(message.author.id); setTimeout(() => { 
    talkedRecently1.delete(message.author.id); }, 2500);

  } else if (talkedRecently1.has(message.author.id)) {

    talkedRecently2.add(message.author.id); setTimeout(() => { 
    talkedRecently2.delete(message.author.id); }, 2500);

  } else if (talkedRecently2.has(message.author.id)) {

    talkedRecently3.add(message.author.id); setTimeout(() => { 
    talkedRecently3.delete(message.author.id); }, 2500);

  } else if (talkedRecently3.has(message.author.id)) {

    return message.channel.send(":no_mouth:  |  Whoa there, cowboy. Slow down! You can type again in 2.5 seconds.");

  } else {

    // Add the member to the set so that they can't talk for 2.5 seconds.
    talkedRecently.add(message.author.id); setTimeout(() => { 
    talkedRecently.delete(message.author.id); }, 2500);

  }  

   // Define the command variable.
   let cmd = client.commands.get(command.slice(prefix.length));

   // Check if the command exists.
   if (cmd)
    cmd.run(client, message, args);

});

// SPAM PREVENTION
client.on("message", async message => {

  // Ignore other bots, including itself.
  if(message.author.bot) return;

 // Spam prevention.
 if (talkedRecently.has(message.author.id)) {

   talkedRecently.delete(message.author.id);
   talkedRecently1.add(message.author.id); setTimeout(() => { 
   talkedRecently1.delete(message.author.id); }, 2500);

 } else if (talkedRecently1.has(message.author.id)) {

   talkedRecently1.delete(message.author.id);
   talkedRecently2.add(message.author.id); setTimeout(() => { 
   talkedRecently2.delete(message.author.id); }, 2500);

 } else if (talkedRecently2.has(message.author.id)) {

   talkedRecently2.delete(message.author.id);
   talkedRecently3.add(message.author.id); setTimeout(() => { 
   talkedRecently3.delete(message.author.id); }, 5000);

 } else if (talkedRecently3.has(message.author.id)) {

   talkedRecently2.delete(message.author.id);
   message.channel.send(":no_mouth:  |  Whoa there, cowboy. Slow down! You can type again in 5 seconds.");
   message.member.addRole(message.guild.roles.find("name", "★ Muted ★"));

   function callback(){
    return function(){
      message.guild.roles.find("name", "★ Muted ★");
      }
   }

   setTimeout(message.member.removeRole(callback(), 5000));
   return;

 } else {

   // Add the member to the set so that they can't talk for 2.5 seconds.
   talkedRecently.add(message.author.id); setTimeout(() => { 
   talkedRecently.delete(message.author.id); }, 2500);

 }

});

// GET THE BOT'S TOKEN, DON'T CHANGE
client.login(process.env.BOT_TOKEN);