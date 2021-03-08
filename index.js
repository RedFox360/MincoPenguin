const Discord = require('discord.js');
const config = require('./config')

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require(`./handlers/command_handler`)(client, Discord);
require(`./handlers/event_handler`)(client, Discord);
require('./server')();

client.login(config.token);