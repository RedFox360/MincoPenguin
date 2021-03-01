module.exports = {
    name: 'rainbow',
    description: 'Returns the NEW rainbow!',
    execute(message, args, cmd, client, Discord) {
        message.channel.send("The NEW rainbow!");
        message.channel.send("```diff\n-red``````css\n[orange]``````fix\nyellow``````diff\n+green``````bash\n'cyan'``````ini\n[blue]```")
    }
}