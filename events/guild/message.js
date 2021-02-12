const cooldowns = new Map()

module.exports = (Discord, client, message) => {
    const prefixes = ['!', ';', 'minco ']
    var count = 0;
    var prefixMsg;
    for (let i = 0; i < prefixes.length; i++) {
        let prefix = prefixes[i];
        if (message.author.bot) return;

        if (message.content.startsWith(prefix)) { prefixMsg = prefix; break; }
        else count += 1;
        if (count == prefixes.length) return;
    }

    const args = message.content.slice(prefixMsg.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd != "say" && cmd != "poll" && cmd != 'curse' && cmd != 'report') {
       for (let i = 0; i < args.length; i++) {
            args[i] = args[i].toLowerCase();
        }
    }
    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return message.channel.send("Invalid command");

    if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Discord.Collection());

    const currentTime = Date.now();
    const timeStamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;

    if (timeStamps.has(message.author.id)) {
        const expTime = timeStamps.get(message.author.id) + cooldownAmount;
        if (currentTime < expTime) {
            const timeLeft = (expTime - currentTime) / 1000;
            let timeEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle("Cooldown")
                .setDescription(`Please wait ${timeLeft.toFixed(1)} more seconds before using command ${command.name}`)
            message.channel.send(timeEmbed);
            return;
        }
    }

    timeStamps.set(message.author.id, currentTime);
    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (error) {
        message.channel.send("An error occured while trying to execute this command");
        console.log(error);
    }
}
