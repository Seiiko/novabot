module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:kissing_heart:  |  <@!` + message.author.id + `> wants to be noticed by <@!` + member.user.id + `>!`, {
        file: "http://24.media.tumblr.com/071c399ec79c91b0165c5a01ce2fb6dc/tumblr_mj9wk0hg7a1ra3xu6o1_500.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "notice me"

}