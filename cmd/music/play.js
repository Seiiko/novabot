const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {
    

    // CHECK CONDITIONS
    if(!voiceChannel) // Check if the member is connected to a voice channel.
        return message.channel.send(":sound:  |  You need to be in a Voice Channel to play music!");

    const songInfo = await ytdl.getInfo(args[0]);

    // PLAY THE SONG
    if(!serverQueue) { // Create queue if there's none.

        const queueConstruct = {

            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true

        };

        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        // Join the voice channel.
        try {

            var connection = await voiceChannel.join(); // Connect the bot to the voice channel.     
            queueConstruct.connection = connection;
            
            play(message.guild, queueConstruct.songs[0]);
    
        } catch(error) {
    
            console.log(`I could not join the Voice Channel: ${error}.`);
            queue.delete(message.guild.id);
            return message.channel.send(`:no_entry_sign:  |  I could not join the Voice Channel: ${error}.`);
    
        }

    } else {

        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send(`:musical_note:  |  **${song.title}** Has been added to the queue!`);

    }

    return undefined;

}

module.exports.info = {

    // Set the command name.
    name: "play"

}

module.exports.songInfo = songInfo;