exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Vous n'êtes pas dans un canal vocal!`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune chanson en cours de lecture!`);

    message.channel.send(`**File d'attente du serveur - ${message.guild.name} ${client.emotes.queue}**\nActuel : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Et **${queue.tracks.length - 5}** d'autres chansons ...` : `Dans la playlist **${queue.tracks.length}** chanson(s)...`}`));

};
