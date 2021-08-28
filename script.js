function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}


const husband = [`Since the time I've met you`, `Every day with you is a wonderful addition to my life's journey.`,
    `laugh a little harder and smile all the more.`, `Just when I think that it is impossible to love you any more than I already do, you prove me wrong.`,
    `I swerved to miss her in my car and ran out of gas.`, `when she wears high heels, she strikes oil`,
    `her belt size is "equator".`
]

const wife = [`she brought a spoon to the Super Bowl.`, `she put lipstick on her forehead to make up her mind.`,
    `when they said, "Order in the court," she asked for fries and a shake.`, `she got hit by a parked car.`,
    `when I told her that she lost her mind, she went looking for it`, `she went to the dentist to get a Bluetooth.`,
    `she took a ruler to bed to see how long she slept.`, `she got locked in the grocery store and starved to death.`,
    `when I said, "Drinks on the house," she got a ladder.`, `it takes her two hours to watch 60 Minutes.`,
    `she put airbags on her computer in case it crashed.`
]

const child = [`she threw a boomerang and it refused to come back.`, `, she made a blind kid cry.`,
        `her portraits hang themselves.`, `her birth certificate is an apology letter.`, `the government moved Halloween to her birthday`
    ]
   

let returnedJoke = ''

//   let optionIndex = generateRandomNumber(fat.length)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Which Dumbo description do you want to see? \nEnter "husband","wife" or "child": ',
    choice => {

        let optionIndex = 0
        switch (choice) {
            case 'husband':
                {
                    optionIndex = generateRandomNumber(husband.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${husband[optionIndex]}`
                }
                break
            case 'wife':
                {
                    optionIndex = generateRandomNumber(wife.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${wife[optionIndex]}`
                }
                break
            case 'child':
                {
                    optionIndex = generateRandomNumber(child.length)
                    returnedJoke = `\nDumbo's so ${choice}, ${child[optionIndex]}`
                }
                break
            default:
                returnedJoke = `Choose message for 'Husband', 'Wife' or 'Child'`
                break
        }

        function logDumboDesc(message) {
            const logged = message
            console.log(logged)
        }

        logDumboDesc(returnedJoke)

        readline.close();
    });
