module.exports = {
    name: 'say',
    description: "This is a say command for Minco Penguin",
    cooldown: 3,
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
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
            let msg = args.join(' ')
            if (cmd == 'spacesay') {
                let msgSplit = msg.split('')
                for (let i = 0; i < msgSplit.length; i++) {
                    msgSplit[i] += " ";
                }
                msg = msgSplit.join('');
            }
            message.channel.send(args.join(' '))
        }
    }
}