module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:punch:  |  <@!` + message.author.id + `> is patting  <@!` + member.user.id + `>!`, {
        file: "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758"
    });

}

module.exports.info = {

    // Set the command name.
    name: "pat"

}