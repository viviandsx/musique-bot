module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Vous devez envoyer un numéro valide entre ** 1 ** et**${tracks.length}** !`);

};