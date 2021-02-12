const Discord = require('discord.js');
require('dotenv').config();
const keepAlive = require('./server');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

let handlers = ['command_handler', 'event_handler'];

handlers.forEach(f => {
    require(`./handlers/${f}`)(client, Discord);
})

keepAlive();
client.login(process.env.TOKEN);