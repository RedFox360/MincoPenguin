module.exports = {
    name: 'birthday',
    aliases: ['bday', 'b'],
    cooldown: 5,
    description: "View everyone's birthday. Usage: birthday <name>",
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
        }
        else if (message.guild.id == '725560003569778689') {
            if (args[0] == 'Sammy' || args[0] == 'Sameer') {
                message.channel.send('January 23, 2010')
            }
            else if (args[0] == 'Ishan') {
                message.channel.send('February 20, 2010')
            }
            else if (args[0] == 'Shriya') {
                message.channel.send('May 29, 2013')
            }
            else if (args[0] == 'Neil') {
                message.channel.send('October 3, 2011')
            }
            else if (args[0] == 'Annie') {
                message.channel.send('September 27, 2012')
            }
            else if (args[0] == 'Shruti') {
                message.channel.send('July 1, 1978')
            }
            else if (args[0] == 'Prachee') {
                message.channel.send('October 3, 1978')
            }
            else if (args[0] == 'Rajat') {
                message.channel.send('May 15, 1976')
            }
            else if (args[0] == 'Aamod') {
                message.channel.send('May 29, 1977')
            }
            else if (args[0] == 'Reena') {
                message.channel.send('July 12, 2008')
            }
            else if (args[0] == 'Niha') {
                message.channel.send('February 6, 2012')
            }
        }
        else if (message.guild.id == "785642761814671381" || message.guild.id == "804079271986462811") {
            if (args[0] == 'Dana') {
                message.channel.send("July 23, 2010")
            }
            else if (args[0] == 'Sameer') {
                message.channel.send("January 23, 2010")
            }
            else if (args[0] == 'Mason' && args[1] == 'L') {
                message.channel.send("December 29, 2009")
            }
            else if (args[0] == 'Meera') {
                message.channel.send("November 7, 2009")
            }
            else if (args[0] == 'Xander') {
                message.channel.send("October 15, 2009")
            }
            else if (args[0] == 'Jude') {
                message.channel.send("December 15, 2009")
            }
            else if (args[0] == 'Claire') {
                message.channel.send("November 12, 2009")
            }
            else if (args[0] == 'Aiden') {
                message.channel.send("February 18, 2010")
            }
            else if (args[0] == 'Ethan') {
                message.channel.send("October 27, 2009")
            } 
            else if (args[0] == 'Emma') {
                message.channel.send("May 26, 2010")
            }
            else if (args[0] == 'Xander') {
                message.channel.send("October 15, 2009")
            } else if (args[0] == 'Fajar') {
                message.channel.send("February 20, 2010")
            }
            else {
                message.channel.send("This user's birthday has not been added to the database.")
            }
        }
    }
}
