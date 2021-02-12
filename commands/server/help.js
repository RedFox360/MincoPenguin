module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args, cmd, client, Discord) {
        let helpEmbed = new Discord.MessageEmbed()
        .setColor('#1C448E')
        .setTitle('Command Manual')
        .setDescription("PREFIXES: '!', ';', and 'minco '\nDon't include < > in the actual command\nParentheses ( ) show optional arguments")
        .addFields({
            name: '!ping',
            value: 'Check if the bot is online',
        }, {
            name: '!birthday <Person>',
            value: 'Returns the birthday of the person you include',
        }, {
            name: '!favorite color <Person>',
            value: 'Returns the favorite color of the person you include',
        }, {
           name: '!curse <person> <Harry Potter curse>',
           value: 'curses someone with a harry potter curse' 
        }, {
            name: '!favorite animal <Person>',
            value: 'Returns the favorite animal of the person you include',
        }, {
            name: '!favorite food <Person>',
            value: 'Returns the favorite food of the person you include',
        }, {
            name: '!candy bear (DECIMATE)',
            value: 'Sends in the CANDY BEARS!',
        }, {
            name: '!hello',
            value: 'Sends a random hello message',
        }, {
            name: '!say <message>',
            value: 'Returns the message you wrote',
        }, {
            name: '!minco',
            value: 'Returns "I am Minco Penguin!"'
        }, {
            name: '!math <easy/medium/hard> <operation>',
            value: 'Asks a math question based on your arguments\nNote: (division: / is not a permitted operation)'
        }, {
            name: '!coinflip',
            value: 'Returns "Heads" or "Tails" based on a random outcome'
        }, {
            name: '!fortune',
            value: 'Returns a fortune'
        }, {
           name: '!report <@person> <reason>',
           value: 'Reports someone for breaking the rules' 
        }, {
            name: '!army (Carl)',
            value: 'Returns the army of Minco Penguin or Carl-bot'
        })
        .setThumbnail('https://cdn.shopify.com/s/files/1/2040/0303/products/Simple_Cute_Kawaii_Nursery_Animal_Cartoon_-_Penguin_696545712_1024x1024@2x.jpg?v=1499733886')
        if (!args.length) return message.channel.send(helpEmbed)
        command = client.commands.get(args[0])
        if(command) message.channel.send(command.description)
    }
}
