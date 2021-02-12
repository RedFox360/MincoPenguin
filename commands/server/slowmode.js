module.exports = {
    name: 'slowmode',
    description: "Changes slowmode",
    execute(message, args, cmd, client, Discord) {
        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            if (!args.length) {
                message.channel.send("You didn't provide any arguments.")
            } else {
                message.channel.setRateLimitPerUser(args[0], null)
                let confirmEmbed = new Discord.MessageEmbed()
                    .setColor('#7E78D2')
                    .setTitle("Slowmode")
                    .setDescription(`Slowmode set to ${args[0]} seconds`)
                message.channel.send(confirmEmbed)
            }
        } else {
            message.channel.send("You don't have permissions to change slowmode.")
        }
    }
}