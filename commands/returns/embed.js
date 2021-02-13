module.exports = {
  name: 'embed',
  description: 'Sends an embed to a channel',
  async execute(message, args, cmd, client, Discord) {
    let td = args.join(' ').split('|');
    let embed = new Discord.MessageEmbed()
      .setTitle(td[0])
      .setDescription(td[1])
    message.channel.send(embed);
  }
}