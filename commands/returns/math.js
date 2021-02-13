module.exports = {
    name: 'math',
    description: "Usage: !math quiz <difficulty> <operation> or !math question <difficulty> <operation>",
    async execute(message, args, cmd, client, Discord) {
        var num1, num2, result, timeLimit;
        if (!args.length) return message.channel.send("Invalid usage. Correct usage: !math <easy/medium/hard> <operation>\n(Divions is not a permitted operation)")

        var oper;
        if (args[1] == 'add' || args[1] == 'addition' || args[1] == '+') oper = '+'
        else if (args[1] == 'subtract' || args[1] == 'minus' || args[1] == '-') oper = '-'
        else if (args[1] == 'multiply' || args[1] == 'mult' || args[1] == 'x' || args[1] == '*') oper = '*'
        else return message.channel.send("Invalid usage: Correct usage: !math <easy/medium/hard> <operation>\n(Division is not a permitted operation)")
        if (args[0] == 'easy') {
            timeLimit = 7;
            if (oper == '*') {
                num1 = random(1, 10)
                num2 = random(1, 10)
            } else {
                num1 = random(10, 100)
                num2 = random(10, 100)
            }
        } else if (args[0] == 'medium') {
            timeLimit = 15
            if (oper == '*') {
                num1 = random(4, 16)
                num2 = random(4, 16)
            } else {
                num1 = random(100, 250)
                num2 = random(75, 300)
            }
        } else {
            timeLimit = 25
            if (oper == '*') {
                num1 = random(10, 30)
                num2 = random(10, 30)
            } else {
                num1 = random(200, 500)
                num2 = random(200, 500)
            }
        }
        if (oper == '+') result = `${num1 + num2}`;
        else if (oper == '-') result = `${num1 - num2}`
        else if (oper == '*') result = `${num1 * num2}`
        message.channel.send(`What is ${num1} ${oper} ${num2}?`)


        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: (timeLimit * 1000) })

        let end = false
        var guessedCorrect = false;
        collector.on('collect', m => {
            let guess = m.content;
            if (guess == result) {
                message.channel.send("Correct!")
                guessedCorrect = true;
                collector.stop()
            }
            else message.channel.send(`Incorrect! Try again`)
        })
        collector.on('end', collected => {
            if (!guessedCorrect) message.channel.send(`Time's up! The correct answer is ${result}`)
        })
        return
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
