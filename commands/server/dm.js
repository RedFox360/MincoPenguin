module.exports = {
    name: 'dm',
    description: 'SECRET: Dms a member',
    cooldown: 5,
    execute(message, args, cmd, client, Discord) {
        if (message.guild.id == '785642761814671381' || message.guild.id == '725560003569778689' || message.guild.id == '804079271986462811') {
            try {
                var mention = message.mentions.users.first();
            } catch(error) {
                return message.channel.send("That is not a valid mention");
            }
            let target = message.guild.members.cache.get(mention.id);
            if (target.user.bot) return message.channel.send("You can't send a message to a bot")
            var messageTo = "";
            for(let i = 1; i < args.length; i++) {
                messageTo+=args[i]+" ";
            }
            client.users.cache.get(target.id).send(`${message.author.toString()} sent a message to you:\n${messageTo}`);
            message.channel.send("Message sent");
        } else {
            message.channel.send("This command is invalid in this server");
        }
    }
}