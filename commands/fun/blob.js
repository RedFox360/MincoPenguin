module.exports = {
    name: 'blob',
    description: 'Sends the BLOBFISH!',
    aliases: ['blobfish'],
    execute(message, args, cmd, client, Discord) {
        message.channel.send('BLOBFISH!!!!')
    }     
}