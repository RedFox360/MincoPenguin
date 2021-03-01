module.exports = {
    name: 'minco',
    aliases: ['penguin'],
    description: 'Returns "I am Minco Penguin the ruler of all bots!!!"',
    execute(message, args, cmd, client, Discord) {
        message.channel.send("I am Minco Penguin the ruler of all bots!!!")
    }
}

