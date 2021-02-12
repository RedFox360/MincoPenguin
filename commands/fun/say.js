module.exports = {
    name: 'say',
    description: "This is a test command for Minco Penguin",
    cooldown: 3,
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
        }
        else if (args[0] == 'empty-message' && message.channel.id == "785897734276251679") {
            message.channel.send("** **\n\n\n\n\n\n\n\n\n\n\n\n** **")
        }
        else {
            message.delete()
            message.channel.send(args.join(' '))
        }
    }
}