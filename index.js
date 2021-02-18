const Discord = require('discord.js');
const config = require('./config')

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command', 'event'].forEach(f => {
    require(`./handlers/${f}_handler`)(client, Discord);
})

require('./server')();
client.login(config.token);