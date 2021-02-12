module.exports = {
    name: 'curse',
    description: 'Curses someone with a Harry Potter curse',
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        let personCursed = message.guild.members.cache.get(target.id)
        var curse = "";
        for (let i = 1; i < args.length; i++){
            curse+=" "+args[i];
        }
        message.channel.send(`<@${personCursed.id}> was cursed by ${message.author.toString()} using the${curse} curse`)
    }
}