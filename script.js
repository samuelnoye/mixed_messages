function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}


const husband = [`Since the time I've met you`, `Every day with you is a wonderful addition to my life's journey.`,
    `laugh a little harder and smile all the more.`, `Just when I think that it is impossible to love you any more than I already do, you prove me wrong.`,
    `I swerved to miss her in my car and ran out of gas.`, `when she wears high heels, she strikes oil`,
    `her belt size is "equator".`
]

const wife = [`If I could give you one thing in life.`, `I'd give you the ability to see yourself through my eyes.`,
    `Only then would you realize how special you are to me.`, `she got hit by a parked car.`,
    `when I told her that she lost her mind, she went looking for it`, `What on earth did I think about all the time before you?.`,
    `she took a ruler to bed to see how long she slept.`, `If you were a movie, I'd watch you over and over again.`,
    `when I said, "Drinks on the house," she got a ladder.`, `it takes her two hours to watch 60 Minutes.`,
    `she put airbags on her computer in case it crashed.`
]

const child = [`Stop making me think about you! I'm busy.`, `If nothing lasts forever, can I be your nothing?`,
        `I couldn't ignore you even if I wanted to.`, `Thank you for always making me feel like the most beautiful woman in the world .`, `the government moved Halloween to her birthday`
    ]
   

let returnedMessage = ''



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
                    returnedMessage = `\nDumbo's so ${choice}, ${husband[optionIndex]}`
                }
                break
            case 'wife':
                {
                    optionIndex = generateRandomNumber(wife.length)
                    returnedMessage = `\nDumbo's so ${choice}, ${wife[optionIndex]}`
                }
                break
            case 'child':
                {
                    optionIndex = generateRandomNumber(child.length)
                    returnedMessage = `\nDumbo's so ${choice}, ${child[optionIndex]}`
                }
                break
            default:
                returnedMessage = `Choose message for 'Husband', 'Wife' or 'Child'`
                break
        }

        function logDumboDesc(message) {
            const logged = message
            console.log(logged)
        }

        logDumboDesc(returnedMessage)

        readline.close();
    });
