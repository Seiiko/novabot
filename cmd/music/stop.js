const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    // DEFINE THE VARIABLES
    let voiceChannel = message.member.voiceChannel; // Voice channel variable.

    // Leave the voice channel.
    voiceChannel.leave();

}

module.exports.info = {

    // Set the command name.
    name: "stop"

}