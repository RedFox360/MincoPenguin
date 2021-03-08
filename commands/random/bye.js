module.exports = {
    name: 'bye',
    description: 'Sends a random goodbye message',
    execute(message, args, cmd, client, Discord) {
        let byes = ['Goodbye', 'Adios!', 'Cheerio!', 'Later!', 'I\'m out.']
        let random = Math.floor(Math.random() * byes.length);
        message.channel.send(byes[random])
    }
}