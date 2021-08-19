function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

//const yoMama = [
const fat = [`she can't even jump to a conclusion.`, `it took me two buses and a train to get to her good side.`,
    `when she goes camping, the bears hide their food`, `she stepped on a scale and it said: "To be continued.`,
    `I swerved to miss her in my car and ran out of gas.`, `when she wears high heels, she strikes oil`,
    `her belt size is "equator".`
]

const stupid = [`she brought a spoon to the Super Bowl.`, `she put lipstick on her forehead to make up her mind.`,
    `when they said, "Order in the court," she asked for fries and a shake.`, `she got hit by a parked car.`,
    `when I told her that she lost her mind, she went looking for it`, `she went to the dentist to get a Bluetooth.`,
    `she took a ruler to bed to see how long she slept.`, `she got locked in the grocery store and starved to death.`,
    `when I said, "Drinks on the house," she got a ladder.`, `it takes her two hours to watch 60 Minutes.`,
    `she put airbags on her computer in case it crashed.`
]

const ugly = [`she threw a boomerang and it refused to come back.`, `, she made a blind kid cry.`,
        `her portraits hang themselves.`, `her birth certificate is an apology letter.`, `the government moved Halloween to her birthday`
    ]
    // ]

let returnedJoke = ''

//   let optionIndex = generateRandomNumber(fat.length)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Which Dumbo description do you want to see? \nEnter "fat","stupid" or "ugly": ',
    choice => {

        let optionIndex = 0
        switch (choice) {
            case 'fat':
                {
                    optionIndex = generateRandomNumber(fat.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${fat[optionIndex]}`
                }
                break
            case 'stupid':
                {
                    optionIndex = generateRandomNumber(stupid.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${stupid[optionIndex]}`
                }
                break
            case 'ugly':
                {
                    optionIndex = generateRandomNumber(ugly.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${ugly[optionIndex]}`
                }
                break
            default:
                returnedJoke = `Enter 'fat', 'stupid' or 'ugly'`
                break
        }

        function logDumboDesc(joke) {
            const logged = joke
            console.log(logged)
        }

        logDumboDesc(returnedJoke)

        readline.close();
    });