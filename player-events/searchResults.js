module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Voici vos résultats de recherche pour ${query}` },
            footer: { text: 'github.com/vivitougnou' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};
