const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['unmute'],
    description: 'ADMIN ONLY: Mutes a member',
    execute(message, args, cmd, client, Discord) {
        var roles;
        if (message.guild.id == "785642761814671381") roles = ['Student', 'Muted'];
        else if (message.guild.id == "804079271986462811") roles = ['Member', 'Muted'];
        else return message.channel.send("The mute command is invalid in this server");
        if (message.member.hasPermission("MANAGE_MESSAGES") && message.member.hasPermission("MANAGE_ROLES")) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === roles[0]);
                let muteRole = message.guild.roles.cache.find(role => role.name === roles[1]);
                let memberTarget = message.guild.members.cache.get(target.id);
                var description = `<@${memberTarget.user.id}> has been muted`
                if (args[1]) description += ` for ${args[1]}`
                let muteEmbed = new Discord.MessageEmbed()
                    .setColor('#F04747')
                    .setTitle("Mute Warning")
                    .setDescription(description)
                    .setAuthor(memberTarget.user.username)
                    .setThumbnail(memberTarget.user.avatarURL())
                if (cmd == 'mute') { 
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(muteEmbed);
                    if (!args[1]) return; 
                    setTimeout(function () {
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                        message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
                    }, ms(args[1]));
                } else if (cmd == 'unmute') {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
                    return;
                }
            } else {
                message.channel.send("Invalid user");
            }
        } else {
            message.channel.send("You don't have the right permissions to execute this command.");
        }
    }
}