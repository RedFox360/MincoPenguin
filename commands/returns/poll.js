module.exports = {
    name: 'poll',
    description: 'Sends a poll in the channel',
    aliases: ['spoll'],
    execute(message, args, cmd, client, Discord) {
        react = ['👍', '👎'];
        if (cmd == 'spoll') react.push('🤷')
        var msgArgs = args.join(' ')
        let pollEmbed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.member.displayName)
            .setTitle("Poll")
            .setDescription(msgArgs)
            .setThumbnail(message.author.avatarURL())
        message.delete();
        message.channel.send(pollEmbed).then(msg => {
            react.forEach(emoji => msg.react(emoji));
        })
    }
}