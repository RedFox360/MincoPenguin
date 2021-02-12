module.exports = {
    name: 'ubuntu',
    description: "Use ubuntu name <person> to get someone's ubuntu name.",
    execute(message, args, cmd, client, Discord) {
        if (message.guild.id == '725560003569778689') {
            if (!args.length) {
                message.channel.send("You didn't provide any arguments.")
            }
            else if (args[0] == 'name'){
                if(args[1] == 'Sammy'){
                    message.channel.send('Kirabo the Wizard')
                }
                else if(args[1] == 'Shriya'){
                    message.channel.send('Queen Adelaide')
                }
                else if(args[1] == 'Ishan'){
                    message.channel.send('King Asgard')
                }
                else if (args[1] == 'Annie'){
                    message.channel.send('General Jamilla')
                }
                else if (args[1] == 'Neil'){
                    message.channel.send('Mokuku')
                }
            }
        }
    }
}
