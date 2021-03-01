module.exports = {
    name: 'army',
    description: "This is a test command for Minco Penguin",
    execute(message, args, cmd, client, Discord){
        if (args[0] != null && args[0].toLowerCase().startsWith('carl')) message.channel.send('Turtles🐢, Dolphins🐬, Lizards🦎, Monkeys🐵🐒, Birds🦜')
        else message.channel.send('Penguins🐧, Candy bears🍬🐻, Blobfish, Doges, Vibing Cats, Jellyfish')
    }
}