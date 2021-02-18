module.exports = {
    name: 'laugh',
    description: 'Fun command: sends a random laugh',
    execute(message, args, cmd, client, Discord) {
        let laughs = ['MWAHAHAHA!', 'BHAHHAHAHAHHA', 'tEEHee', 'hehe', ':rofl:']
        let random = Math.floor(Math.random() * laughs.length);
        message.channel.send(laughs[random])
    }
}