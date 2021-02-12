module.exports = {
    name: 'hello',
    description: "When you use this command, it will send back a random response.  )",
    execute(message, args, cmd, client, Discord) {
        let hellos = ["Hi :)", "Hai!", "Hello! :)", `Salutations, ${message.author.toString()}`, "Bonjour!", `Greetings, ${message.author.toString()}`, "Howdy! :cowboy:"]
        let random = Math.floor(Math.random() * hellos.length)
        message.channel.send(hellos[random])
    }
}