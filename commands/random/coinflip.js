module.exports = {
    name: 'coinflip',
    aliases: ['flip'],
    description: 'Returns "heads" or "tails" based on a random outcome.',
    execute(message, args, cmd, client, Discord) {
        let random = Math.floor(Math.random() * 2);
        var options = [];
        if (args[0] == 'yn') options = [':thumbsup: Yes', ':thumbsdown: No'];
        else options = [':coin: Heads', ':coin: Tails'];
        message.channel.send(options[random])
    }
}