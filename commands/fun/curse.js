module.exports = {
    name: 'curse',
    description: 'Curses someone with a Harry Potter curse',
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        var curse = "";
        for (let i = 1; i < args.length; i++){
            curse+=" "+args[i];
        }
        let checkCurse = curse.toLowerCase();
        if (checkCurse.includes('avada kedavra') || checkCurse.includes('crucio') || checkCurse.includes('imperio') || checkCurse.includes('imperius') || checkCurse.includes('Cruciatus')) return message.channel.send("HEY! No dark magic here.");
        message.channel.send(`<@${target.id}> was cursed by ${message.author.toString()} using the${curse} curse`)
    }
}