module.exports = {
    name: 'rules',
    description: 'sends the rules for the server in an Embed',
    execute(message, args, cmd, client, Discord) {
        if (message.guild.id == '785642761814671381' || message.guild.id == '804079271986462811') {
            if (!args.length) {
                let rules = new Discord.MessageEmbed()
                    .setColor("#80CED7")
                    .setTitle("Amendments to the Carrel Crew Discord Server")
                    .setDescription("Follow these rules when talking in the server. If you break these rules multiple times, you will be muted.")
                    .addFields({
                        name: 'Amendment 1',
                        value: 'Don\'t spam in any channel'
                    }, {
                        name: 'Amendment 2',
                        value: 'Do not text or spam during school hours\n(You are allowed if your conversation is school-related or you are sending links)'
                    }, {
                        name: 'Amendment 3',
                        value: 'Be appropriate'
                    }, {
                        name: 'Amendment 4',
                        value: 'Don\'t beg for roles or levels (mute)'
                    }, {
                        name: 'Amendment 5',
                        value: 'Act civil in voice chat'
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
        else if (message.guild.id == '818509629842522112') {
            let rules = new Discord.MessageEmbed()
            .setTitle("Blobfish Rules")
            .setColor('F564CF')
            .setDescription("Follow these rules when talking in the server. If you break these rules multiple times, you will be muted.")
            .addFields({
                name: 'Rule 1',
                value: 'No spamming or texting during school',
            }, {
                name: 'Rule 2',
                value: 'Don\'t send inappropriate messages',
            }, {
                name: 'Rule 3',
            }, {
                name: 'Rule 4',
                value: 'Only post memes in <#818513462258434098> (if you want to want to send more than one GIF, send them in <#818513462258434098>)',
            }, {
                name: 'Rule 5',
                value: 'Don\'t beg for roles/levels',
            }, {
                name: 'Rule 6',
                value: 'No one except Aiden may be a Supreme Blob',
            }, {
                name: 'Rule 7',
                value: 'If you disobey any rules, you will be muted',
            });
            message.channel.send(rules);
        }
    }
}