module.exports = {
    name: 'favorite',
    aliases: ['fav', 'f'],
    description: "See everyone's favorite color with this command.",
    execute(message, args, cmd, client, Discord) {
        if (!args.length) {
            message.channel.send("You didn't provide any arguments.")
        }
        else if (message.guild.id == '725560003569778689') {
            if (args[0] == 'color') {
                if (args[1] == 'sammy' || args[1] == 'sameer') {
                    message.channel.send("Sage green");
                }
                else if (args[1] == 'ishan') {
                    message.channel.send("Neon orange");
                }
                else if (args[1] == 'annie') {
                    message.channel.send("Cyan");
                }
                else if (args[1] == 'shriya') {
                    message.channel.send("Pink");
                }
            }
            else if (args[0] == 'animal') {
                if (args[1] == 'sammy' || args[1] == 'sameer') {
                    message.channel.send("Adélie Penguin");
                }
                else if (args[1] == 'annie') {
                    message.channel.send("Bunny");
                }
                else if (args[1] == 'ishan') {
                    message.channel.send("Lion");
                }
            } else {
                message.channel.send("Type in a valid argument: color or animal");
            }
        }
        else if (message.guild.id == '785642761814671381' || message.guild.id == "804079271986462811") {
            if (args[0] == 'color') {
                if (args[1] == 'sameer') {
                    message.channel.send("Sage green");
                }
                else if (args[1] == 'aiden') {
                    message.channel.send("Dark green");
                }
                else if (args[1] == 'ethan') {
                    message.channel.send("Blue");
                }
                else if (args[1] == 'claire') {
                    message.channel.send("Gold");
                }
                else if (args[1] == 'emma') {
                    message.channel.send("Tiffany Blue");
                }
                else if (args[1] == 'xander') {
                    message.channel.send("Blue");
                }
            }
            else if (args[0] == 'animal') {
                if (args[1] == 'sameer') {
                    message.channel.send("Adélie Penguin");
                }
                else if (args[1] == 'aiden') {
                    message.channel.send("Tiger");
                }
                else if (args[1] == 'ethan') {
                    message.channel.send("Elephant");
                }
                else if (args[1] == 'claire') {
                    message.channel.send("Bear");
                }
                else if (args[1] == 'emma') {
                    message.channel.send("Shih tzu dog");
                }
                else if (args[1] == 'xander') {
                    message.channel.send("Dog");
                }
            } else if (args[0] == 'food') {
                if (args[1] == 'sameer' || args[1] == 'Aiden') {
                    message.channel.send("Nigiri Sushi");
                } else if (args[1] == 'claire') {
                    message.channel.send("Claire does not have a favorite food");
                } else if (args[1] == 'emma') {
                    message.channel.send("Potato chips");
                } else if (args[1] == 'xander') {
                    message.channel.send("Sushi");
                }
            } else {
                message.channel.send("Type in a valid argument: color or animal");
            }
        }
    }
}
