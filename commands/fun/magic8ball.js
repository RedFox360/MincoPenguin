module.exports = {
    name: 'magic8ball',
    description: 'A magic 8 ball in Discord',
    cooldown: 3,
    aliases: ['8b','magic8b', '8ball'],
    execute(message, args, cmd, client, Discord) {
        let answers = ['Yes', 'No', 'I am not completely sure', 'It is decidedly so', 'OBVIOUSLY', 'OBVIOUSLY No', 'Doubtful', 'Undoubtedly','SERIOUSLY? NO','Ya think so?','Ofc','Why did you even ask that?', 'Nah', 'Meh','No question!','Sorry, I was confunded. Try again.','Probably not.','eh','Of course!!!!', 'Are you kidding me? Definitely not.','Really?','Ya think so?','Totally!','YES', 'YESSSS', 'Yea','Seriously? YES', 'Yes, DUH'];
        let random = Math.floor(Math.random() * answers.length);
        const allArgs = args.join(' ').toLowerCase();

        if (allArgs.includes('evil')) {
            message.channel.send("No I am not!")
        }
        if (allArgs.includes('sameer') && allArgs.includes('create')) {
            message.channel.send("Of course Sameer created me.")
        }
        else {
            message.channel.send(answers[random]);
        }
    }
}