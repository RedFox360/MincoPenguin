module.exports = {
    name: 'candy',
    description: "This is a test command for Minco Penguin",
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
        } else if (args[0] == 'bear') {
            var msg = ""; 
            var times = 50;
            if (args[1] != null && args[1].toLowerCase().startsWith('decimate')) times = 100;
            for (let i = 0; i < times; i++) {
                msg += ":candy::bear:";
            }
            message.channel.send(msg);
        }
    }
}