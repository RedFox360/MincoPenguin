module.exports = {
    name: 'yeet',
    description: 'Returns "I don\'t like yeets"',
    execute(message, args, cmd, client, Discord) {
        message.channel.send("I don't like yeets. :thumbsdown:");
    }
}