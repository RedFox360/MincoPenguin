module.exports = {
    name: 'ping',
    aliases: ['p'],
    description: 'check if the bot is online',
    execute(message, args, cmd, client, Discord) {
        var status = "online";
        if (Math.round(client.ws.ping) > 200)
            status = "lagging"
        var color;
        if (status == "lagging") color = "ff0000"
        else color = "32E6C5"
        let pingEmbed = new Discord.MessageEmbed()
            .setTitle(":robot_face: Pong!")
            .setColor(color)
            .addFields(
                { name: 'Status:', value: status },
                { name: 'Execution Time:', value: `${Date.now() - message.createdTimestamp}ms`},
                { name: 'Client Latency', value: `${Math.round(client.ws.ping)}ms`}
            );
        message.channel.send(pingEmbed);
    }
}