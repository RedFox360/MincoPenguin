module.exports = {
    name: 'yee',
    description: 'Yee!',
    cooldown: 1,
    execute(message, args, cmd, client, Discord) {

        let yees = ['https://tenor.com/view/yee-yeedinasour-dinasour-gif-4930781', 'https://tenor.com/view/yeet-yee-yeee-meme-gif-13537661'];
        let random = Math.floor(Math.random() * yees.length);
        message.channel.send(yees[random])
    }
}