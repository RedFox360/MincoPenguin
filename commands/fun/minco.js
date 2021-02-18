module.exports = {
    name: 'minco',
    aliases: ['penguin'],
    description: 'Returns "I am Minco Penguin!"',
    execute(message, args, cmd, client, Discord) {
        message.channel.send("I am MINCO PENGUIN!")
    }
}

