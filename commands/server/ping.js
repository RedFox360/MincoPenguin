module.exports = {
    name: 'ping',
    aliases: ['p'],
    description: 'check if the bot is online',
    execute(message, args, cmd, client, Discord) {
        var status = "online";
        if (Math.round(client.ws.ping) > 200)
            status = "lagging"
        if (!args[0]) {
            var color;
            if (status == "lagging") color = "#ff0000"
            else color = "32E6C5"
            let pingEmbed = new Discord.MessageEmbed()
                .setTitle(":robot_face: Pong!")
                .setColor(color)
                .setThumbnail(message.author.avatarURL())
                .addFields(
                    { name: 'Status:', value: `**${status}**` },
                    { name: 'Execution Time:', value: `**${Date.now() - message.createdTimestamp}ms**`},
                    { name: 'Client Latency', value: `**${Math.round(client.ws.ping)}ms**` }
                )
            message.channel.send(pingEmbed)
        } else if (args[0] == 'raw') {
            message.channel.send(`pong!\nStatus: **${status}**\nExecution Time: **${Date.now() - message.createdTimestamp}ms**\nClient Latency: **${Math.round(client.ws.ping)}ms**`)
        }
    }
}