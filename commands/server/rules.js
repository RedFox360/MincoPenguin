module.exports = {
    name: 'rules',
    description: 'sends the rules for the server in an Embed',
    execute(message, args, cmd, client, Discord) {
        if (message.guild.id == '785642761814671381' || message.guild.id == '804079271986462811') {
            if (!args.length) {
                let rules = new Discord.MessageEmbed()
                    .setColor("#80CED7")
                    .setTitle("Amendments to the Carrel Crew Discord Server")
                    .setDescription("Please follow these rules when talking in the server")
                    .addFields({
                        name: 'Amendment 1',
                        value: 'Don\'t spam'
                    }, {
                        name: 'Amendment 2',
                        value: 'Include everyone'
                    }, {
                        name: 'Amendment 3',
                        value: 'Be appropriate'
                    })
                    .setFooter('You have the right to stand trial in a voice channel if you break any of these rules')
                message.channel.send(rules)
            }
            else if (args[0] == 'im' || args[0] == 'important') {
                let rulesEmbed = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle(':exclamation: Important Announcement:')
                    .setDescription("People have been too focused on the Discord server recently, and it's stopping us from focusing on class since people are getting a lot of Discord notifications.")
                    .addFields(
                        {
                            name: ':bulb: Tips',
                            value: '* change your status to **do not disturb** during class hours (click on your profile icon in the bottom left to change it)\n* close the Discord window when you aren\'t using it\n* do not talk in Discord during class hours unless you have a school-related question'
                        }
                    )
                    .setFooter('because of these problems, I will only be online after school hours')
                message.channel.send(rulesEmbed)
            }
        }
    }
}