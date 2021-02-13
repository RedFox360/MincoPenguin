const fs = require('fs');
module.exports = (client, Discord) => {
    ['fun', 'returns', 'server'].forEach(path => {
        const commandFiles = fs.readdirSync(`./commands/${path}/`).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = require(`../commands/${path}/${file}`);

            if(command.name) client.commands.set(command.name, command);
            else continue;
        }
    });
}