
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents:[
        "GUILDS","GUILD_MESSAGES"
    ]
});
var repliesDrinking = [
    'https://tenor.com/view/why-dont-you-go-get-me-a-drink-zoe-levin-tiffany-chester-bonding-i-dare-you-gif-16541342',
    'https://tenor.com/view/oss117-oss-le-caire-nid-despions-fran%C3%A7ois-damiens-drink-gif-16938746',
    'https://tenor.com/view/alcool-belgrade-ptit-sifflet-fanta-gif-16824147',
    'https://tenor.com/view/beer-german-happy-hour-gif-4728652',
    'https://tenor.com/view/leonardo-dicaprio-drink-and-wink-wink-and-drink-cheers-gif-13397942',
    'https://tenor.com/view/liquor-oldman-gif-18480181',
    'https://tenor.com/view/drinking-cheers-old-drunk-gif-4497075',
    'https://tenor.com/view/pingu-drink-drunk-gif-5479987'
];
var repliesLanguage =[
    'https://tenor.com/view/captain-america-marvel-avengers-gif-14328153'
];

var textArray2=[
    "ducoup",
    "du coup",
    "Ducoup",
    "DUCOUP",
    "du Coup",
    "Du coup",
    "d u c o u p"
];

var textArray3=[
    "ptn",
    "putain",
    "PTN",
    "PUTAIN",
    "fuck",
    "FUCK",
    "Fuck"
];

var textArray4=[
    "Charles",
    "charles"
];


Client.login(process.env.token);
Client.on("ready", () => {
    console.log("bot operationnel");
});



Client.on("messageCreate",message => {
    for (let pas=0;pas<textArray2.length;pas++)
        if (message.content.includes(textArray2[pas])) {
            message.reply(repliesDrinking[Math.floor(Math.random()*repliesDrinking.length)]);
            
    }

    for (let pas=0;pas<textArray3.length;pas++)
        if (message.content.includes(textArray3[pas])) {
            message.reply(repliesLanguage[Math.floor(Math.random()*repliesLanguage.length)]);

    if (message.content.includes(textArray4)) {
        message.reply("https://tenor.com/view/our-god-is-an-awesome-god-avery-bailee-madison-a-week-away-our-god-is-great-god-gif-21138190");
                
    }

 }
});