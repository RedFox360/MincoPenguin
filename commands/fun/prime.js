module.exports = {
    name: 'prime',
    description: 'checks if a number is prime or not',
    execute(message, args, cmd, client, Discord) {
        try {
            var primeNumber = parseInt(args[0]);
        } catch(err) {
            message.channel.send("Enter a valid number");
        }
        message.channel.send(isPrime(primeNumber));
    }
}

function isPrime(number) {
    if (number == 1) return `${number} isn't prime`;
    if (number == 2) return `${number} is prime`;
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0) return `${number} isn't prime because it is divisible by ${i}`;
    }
    return `${number} is prime`;
}