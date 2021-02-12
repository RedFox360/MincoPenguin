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
            if (args[0] == 'sammy' || args[0] == 'sameer') {
                message.channel.send('January 23, 2010')
            }
            else if (args[0] == 'ishan') {
                message.channel.send('February 20, 2010')
            }
            else if (args[0] == 'shriya') {
                message.channel.send('May 29, 2013')
            }
            else if (args[0] == 'neil') {
                message.channel.send('October 3, 2011')
            }
            else if (args[0] == 'annie') {
                message.channel.send('September 27, 2012')
            }
            else if (args[0] == 'shruti') {
                message.channel.send('July 1, 1978')
            }
            else if (args[0] == 'prachee') {
                message.channel.send('October 3, 1978')
            }
            else if (args[0] == 'rajat') {
                message.channel.send('May 15, 1976')
            }
            else if (args[0] == 'aamod') {
                message.channel.send('May 29, 1977')
            }
            else if (args[0] == 'reena') {
                message.channel.send('July 12, 2008')
            }
            else if (args[0] == 'niha') {
                message.channel.send('February 6, 2012')
            }
        }
        else if (message.guild.id == "785642761814671381" || message.guild.id == "804079271986462811") {
            if (args[0] == 'dana') {
                message.channel.send("July 23, 2010")
            }
            else if (args[0] == 'sameer') {
                message.channel.send("January 23, 2010")
            }
            else if (args[0] == 'mason' && args[1] == 'l') {
                message.channel.send("December 29, 2009")
            }
            else if (args[0] == 'meera') {
                message.channel.send("November 7, 2009")
            }
            else if (args[0] == 'xander') {
                message.channel.send("October 15, 2009")
            }
            else if (args[0] == 'jude') {
                message.channel.send("December 15, 2009")
            }
            else if (args[0] == 'claire') {
                message.channel.send("November 12, 2009")
            }
            else if (args[0] == 'aiden') {
                message.channel.send("February 18, 2010")
            }
            else if (args[0] == 'ethan') {
                message.channel.send("October 27, 2009")
            } 
            else if (args[0] == 'emma') {
                message.channel.send("May 26, 2010")
            }
            else if (args[0] == 'xander') {
                message.channel.send("October 15, 2009")
            } else if (args[0] == 'fajar') {
                message.channel.send("February 20, 2010")
            }
            else {
                message.channel.send("This user's birthday has not been added to the database.")
            }
        }
    }
}
