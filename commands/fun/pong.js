module.exports = {
    name: 'pong',
    description: "This is a test command for Minco Penguin",
    execute(message, args, cmd, client, Discord){
        message.channel.send('ping!');
    }
}