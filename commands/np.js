exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Vous n'êtes pas dans un canal vocal!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture!`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'github.com/vivitougnou' },
            fields: [
                { name: 'Chaîne', value: track.author, inline: true },
                { name: 'Demandé par', value: track.requestedBy.username, inline: true },
                { name: 'De la playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Vues', value: track.views, inline: true },
                { name: 'Durée', value: track.duration, inline: true },
                { name: 'Filtres activés', value: filters.length, inline: true },

                { name: 'Barre de progression', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
