module.exports = {
    name: 'prime',
    description: 'checks if a number is prime or not',
    aliases: ['composite'], 
    execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.channel.send("Please enter an argument (valid usage: !prime <Number>)")
        if (isNaN(args[0])) return message.channel.send("Enter a valid number")
        var primeNumber = parseInt(args[0]);
        if (primeNumber <= 0) return message.channel.send("Please enter a positive number")
        if (cmd == 'prime') {
            message.channel.send(isPrime(primeNumber, false));
        }
        else if (cmd == 'composite') {
            message.channel.send(isPrime(primeNumber, true));
        }
    }
}

function isPrime(number, useComposite) {
    var isPrimeText, isntPrimeText;
    if (useComposite) {
        isPrimeText = "isn't composite";
        isntPrimeText = "is composite";
    } else {
        isPrimeText = "is prime";
        isntPrimeText = "isn't prime";
    }
    if (number == 1) return `${number} ${isntPrimeText}`;
    if (number == 2) return `${number} ${isPrimeText}`;
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0) return `${number} ${isntPrimeText} because it is divisible by ${i}`;
    }
    return `${number} ${isPrimeText}`;
}