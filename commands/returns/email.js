module.exports = {
    name: 'email',
    description: "See everyone's email with this command. Usage: email <name>",
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
        }
        else if (message.guild.id == '725560003569778689') {
            if (args[0] == 'Sammy'|| args[0] == 'Sameer') {
                message.channel.send('sameerprakash100@gmail.com')
            }
            else if (args[0] == 'Reena'){
                message.channel.send('reenapandit@icloud.com')
            }
            else if (args[0] == 'Ishan') {
                message.channel.send('ishankhandekar614@gmail.com')
            }
            else if (args[0] == 'Neil') {
                message.channel.send('panditneil09@gmail.com')
            }
            else if (args[0] == 'Annie') {
                message.channel.send('anikaprakash100@gmail.com')
            }
            else if (args[0] == 'Prachee') {
                message.channel.send('prachee.prakash@gmail.com')
            }
            else if (args[0] == 'Rajat') {
                message.channel.send('rprakash25@yahoo.com')
            }
            else if (args[0] == 'Aamod') {
                message.channel.send('aamodkhandekar@gmail.com')
            }
            else if (args[0] == 'Shriya') {
                message.channel.send('shriyakhandekar270@gmail.com')
            }
        }
    }
}