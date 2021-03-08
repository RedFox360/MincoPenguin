module.exports = {
    name: 'laugh',
    description: 'Fun command: sends a random laugh',
    aliases: ['haha', 'hehe'],
    execute(message, args, cmd, client, Discord) {
        let laughs = ['MWAHAHAHA!', 'BHAHHAHAHAHHA', 'tEEHee', 'hehe', ':rofl:','Hahahaha']
        let random = Math.floor(Math.random() * laughs.length);
        message.channel.send(laughs[random])
    }
}