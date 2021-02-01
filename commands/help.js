exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: 'Panneau d\'aide' },
            footer: { text: 'github.com/vivitougnou' },
            fields: [
                { name: 'Bot', value: '`ping`, `invite`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `Pour utiliser des filtres, ${client.config.prefix}filtre (le filtre). Exemple : ${client.config.prefix}filtre 8D.`,
        },
    });

};
