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
        else if (args[0].startsWith('<#')) {
            var channel = args[0]
            channel = channel.replace('<', '').replace('>', '').replace('#', '')
            let msg = "";
            for (let i = 1; i < args.length; i++) {
                msg += args[i] + " ";
            }
            const chnl = client.channels.cache.get(channel);
            chnl.send(msg);
            message.react('✅');
        }
        else {
            if (message.author.id == '724786310711214118') message.delete()
            message.channel.send(args.join(' '))
        }
    }
}