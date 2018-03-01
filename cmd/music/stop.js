const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    // DEFINE THE VARIABLES
    let voiceChannel = message.member.voiceChannel; // Voice channel variable.

    // CHECK CONDITIONS
    if(!voiceChannel) // Check if the member is connected to a voice channel.
        return message.channel.send(":sound:  |  You need to be in a Voice Channel to play music!");

    // Leave the voice channel.
    voiceChannel.leave();

}

module.exports.info = {

    // Set the command name.
    name: "stop"

}