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
                if (args[1] == 'Sammy' || args[1] == 'Sameer') {
                    message.channel.send("Sage green");
                }
                else if (args[1] == 'Ishan') {
                    message.channel.send("Neon orange");
                }
                else if (args[1] == 'Annie') {
                    message.channel.send("Cyan");
                }
                else if (args[1] == 'Shriya') {
                    message.channel.send("Pink");
                }
            }
            else if (args[0] == 'animal') {
                if (args[1] == 'Sammy' || args[1] == 'Sameer') {
                    message.channel.send("Adélie Penguin");
                }
                else if (args[1] == 'Annie') {
                    message.channel.send("Bunny");
                }
                else if (args[1] == 'Ishan') {
                    message.channel.send("Lion");
                }
            } else {
                message.channel.send("Type in a valid argument: color or animal");
            }
        }
        else if (message.guild.id == '785642761814671381' || message.guild.id == "804079271986462811") {
            if (args[0] == 'color') {
                if (args[1] == 'Sameer') {
                    message.channel.send("Sage green");
                }
                else if (args[1] == 'Aiden') {
                    message.channel.send("Dark green");
                }
                else if (args[1] == 'Ethan') {
                    message.channel.send("Blue");
                }
                else if (args[1] == 'Claire') {
                    message.channel.send("ALL the colors! AKA, a rainbow! 🌈🌦");
                }
                else if (args[1] == 'Emma') {
                    message.channel.send("Tiffany Blue");
                }
                else if (args[1] == 'Xander') {
                    message.channel.send("Blue");
                }
            }
            else if (args[0] == 'animal') {
                if (args[1] == 'Sameer') {
                    message.channel.send("Adélie Penguin :penguin:");
                }
                else if (args[1] == 'Aiden') {
                    message.channel.send("Tiger :tiger:");
                }
                else if (args[1] == 'Ethan') {
                    message.channel.send("Elephant :elephant:");
                }
                else if (args[1] == 'Claire') {
                    message.channel.send("Bear :bear:");
                }
                else if (args[1] == 'Emma') {
                    message.channel.send("Shih tzu dog :dog:");
                }
                else if (args[1] == 'Xander') {
                    message.channel.send("Dog :dog:");
                }
            } else if (args[0] == 'food') {
                if (args[1] == 'Sameer' || args[1] == 'Aiden') {
                    message.channel.send("Nigiri Sushi :sushi:");
                } else if (args[1] == 'Claire') {
                    message.channel.send("Claire does not have a favorite food");
                } else if (args[1] == 'Emma') {
                    message.channel.send("Potato chips");
                } else if (args[1] == 'Xander') {
                    message.channel.send("Sushi :sushi:");
                }
            } else {
                message.channel.send("Type in a valid argument: color or animal");
            }
        }
    }
}
