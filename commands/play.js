exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Vous n'êtes pas dans un canal vocal!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Veuillez indiquer le titre d'une chanson!`);

    client.player.play(message, args.join(" "));

};
