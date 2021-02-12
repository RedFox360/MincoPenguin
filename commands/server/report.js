module.exports = {
    name: 'report',
    description: 'Report someone for breaking the rules. USAGE: !report <@person> reason',
    async execute(message, args, cmd, client, Discord) {
        if (!args.length) return message.channel.send("You didn't provide any arguments");
        if (!args[1]) return message.channel.send("You didn't provide a reason");
        const target = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(target.id);
        var reason = "";
        var endMsg = true;
        for (let i = 1; i < args.length; i++){
            reason+=" "+args[i];
        }
        const ticket = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(message.author.username)
            .setTitle(`Ticket for ${memberTarget.user.username}`)
            .setDescription(`Reason: ${reason}`)
            .setThumbnail(memberTarget.user.avatarURL())
        message.channel.send(ticket)
        message.channel.send(`Are you sure you want to report <@${memberTarget.id}>? (y/n)`)
        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: (15000) })
        await collector.on('collect', m => {
            if (m.content == 'y') {
                message.channel.send("Ticket sent");
                client.users.cache.get('724786310711214118').send(ticket.setColor('GREEN'));
                endMsg = false;
                collector.stop();
            }
            else {
                if (m.content == 'n') message.channel.send("Cancelling...")
                else message.channel.send("Terminating...")
                endMessage = false;
                collector.stop();
            }
        })
        collector.on('end', m=> {
            if(endMsg) message.channel.send("You have been inactive for too long... terminating")
        }) 
    }
}