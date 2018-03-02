const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    // Define the VC variable.
    let voiceChannel = message.member.voiceChannel; // Voice channel variable.

    // CHECK CONDITIONS
    if(!voiceChannel) // Check if the member is connected to a voice channel.
        return message.channel.send(":sound:  |  You need to be in a Voice Channel to play music!");

    // Define the server queue and the song variables for the music bot.
    let serverQueue = queue.get(message.guild.id);
    const song = {

        title: mPlay.songInfo.title,
        url: mPlay.songInfo.video_url

    };

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

    // Play function.
    function play(guild, song) {
  
        if (!song) {
  
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
  
        }
  
        console.log(serverQueue.songs);
  
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url)) // Player variable.
            .on("end", () => {
  
                console.log("Song ended!");
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
  
            })
            .on("error", error => console.error(error));
  
        dispatcher.setVolumeLogarithmic(5 / 5);
  
    }

}

module.exports.info = {

    // Set the command name.
    name: "play"

}