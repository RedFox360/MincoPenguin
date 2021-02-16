const cooldowns = new Map()
const { prefixes } = require("../../config")
module.exports = (Discord, client, message) => {
    var count = 0;
    
    for (let i = 0; i < prefixes.length; i++) {
        let prefix = prefixes[i];
        if (message.author.id == client.user.id) return
        if (message.content.startsWith(prefix)) { 
          var currentPrefix = prefix; 
          break; 
        }
        else count++;
        if (count == prefixes.length) return;
    }
    if (message.author.id == '235148962103951360') return message.channel.send(`I won't listen to you, ${message.author.toString()}`)
    const args = message.content.slice(currentPrefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return message.react('❌'); 

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
        message.react('❌')
        message.channel.send("An error occured while trying to execute this command");
        console.log(error);
    }
}