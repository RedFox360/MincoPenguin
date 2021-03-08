module.exports = {
    name: 'code',
    description: 'sends info about the code',
    execute(message, args, cmd, client, Discord) {
        let pingEmbed = new Discord.MessageEmbed()
            .setTitle(":robot_face: Code Info")
            .setColor('70E5FF')
            .addFields(
                { name: 'Node Version', value: 'v12.16.1' },
                { name: 'Discord.js Version', value: 'v12.5.1'},
                { name: 'Packages used', value: 'ms, discord.js, dotenv, express'},
            );
        message.channel.send(pingEmbed);
    }
}