module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args, cmd, client, Discord) {
        let helpEmbed = new Discord.MessageEmbed()
        .setAuthor('Minco Penguin')
        .setColor('#1C448E')
        .setTitle('Command Manual')
        .setDescription("PREFIXES: '!', ';', and 'minco '\nDon't include < > in the actual command\nParentheses ( ) show optional arguments\nAccess the Minco Penguin help page here: https://mincopenguin.redfox360.repl.co/")
        .addFields({
            name: '!ping',
            value: 'Check if the bot is online',
        }, {
            name: '!poll <Question>',
            value: 'Sends a poll with thumbs up/thumbs down reactions'
        }, {
           name: '!spoll <Question>',
           value: 'Sends a poll with thumbs up/thumbs down/shrug reactions' 
        }, {
            name: '!birthday <Person>',
            value: 'Returns the birthday of the person you include',
        }, {
            name: '!rainbow',
            value: 'Returns the NEW rainbow!'  
        }, {
            name: '!favorite color <Person>',
            value: 'Returns the favorite color of the person you include',
        }, {
           name: '!curse <person> <Harry Potter curse>',
           value: 'curses someone with a harry potter curse' 
        }, {
            name: '!laugh',
            value: 'Sends a random laugh'
        }, {
            name: '!favorite animal <Person>',
            value: 'Returns the favorite animal of the person you include',
        }, {
            name: '!favorite food <Person>',
            value: 'Returns the favorite food of the person you include',
        }, {
            name: '!hello',
            value: 'Sends a random hello message',
        }, {
            name: '!bye',
            value: 'Sends a random goodbye message'
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
            name: '!magic8ball <Question>',
            value: 'returns a random magic 8 ball answer to the question\nAliases: !8ball, !magic8b, !8b'
        }, {
            name: '!prime <Number>',
            value: 'Checks if a number is prime or not'
        }, {
            name: '!army (Carl)',
            value: 'Returns the army of Minco Penguin or Carl-bot'
        })
        .setThumbnail('https://cdn.shopify.com/s/files/1/2040/0303/products/Simple_Cute_Kawaii_Nursery_Animal_Cartoon_-_Penguin_696545712_1024x1024@2x.jpg?v=1499733886')
        if (!args.length) return message.channel.send(helpEmbed)
        
        command = client.commands.get(args[0])
        if(command) message.channel.send(command.description)
        else message.channel.send(`Invalid command ${args[0]}`)
    }
}
