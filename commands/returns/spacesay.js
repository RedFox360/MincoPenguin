module.exports = {
    name: 'spacesay',
    description: 'puts spaces between characters in the say command',
    cooldown: 3,
    execute(message, args, cmd, client, Discord) {
        let msgSplit = args.join(' ').split('');
        for (let i = 0; i < msgSplit.length; i++) {
            if (msgSplit[i] != '_' && msgSplit[i] != '*' && msgSplit[i] != '~') {
                if (msgSplit[i+1] != '*' && msgSplit[i+1] != '_' && msgSplit[i+1] != '~') msgSplit[i] += " ";
            }
        }
        var msg = msgSplit.join('');
        message.channel.send(msg)
    }
}