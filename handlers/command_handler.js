const fs = require('fs')

module.exports = (client, Discord) => {
    const loadCommand = (path) => {
      //path = ./commands/ or ./commands/fun/
    const commandFiles = fs.readdirSync(path).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`.${path}${file}`)

        if(command.name) client.commands.set(command.name, command)
        else continue
    }
    }

    commandFolders = ['./commands/fun/', './commands/server/', './commands/returns/']
    commandFolders.forEach(path => loadCommand(path));
}