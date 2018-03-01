const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    // DEFINE THE VARIABLES
    let voiceChannel = message.member.voiceChannel; // Voice channel variable.

    // CHECK CONDITIONS
    if(!voiceChannel) // Check if the member is connected to a voice channel.
        return message.channel.send(":sound:  |  You need to be in a Voice Channel to play music!");

    try {

        var connection = await voiceChannel.join(); // Connect the bot to the voice channel.      

    } catch(error) {

        console.log(`I could not join the Voice Channel: ${error}.`);
        return message.channel.send(`:no_entry_sign:  |  I could not join the Voice Channel: ${error}.`);

    }

    const dispatcher = connection.playStream(ytdl(`${args[1]}`)) // Player variable.
        .on("end", () => {

            console.log("Song ended!");
            voiceChannel.leave();

        })
        .on("error", error => {

            console.error(error);

        });

    dispatcher.setVolumeLogarithmic(5 / 5);

}

module.exports.info = {

    // Set the command name.
    name: "play"

}