
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents:[
        "GUILDS","GUILD_MESSAGES"
    ]
});
var textArray = [
    'Tu bois',
    'https://tenor.com/view/why-dont-you-go-get-me-a-drink-zoe-levin-tiffany-chester-bonding-i-dare-you-gif-16541342',
    'https://tenor.com/view/oss117-oss-le-caire-nid-despions-fran%C3%A7ois-damiens-drink-gif-16938746',
    'https://tenor.com/view/alcool-belgrade-ptit-sifflet-fanta-gif-16824147'
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

Client.on("ready", () => {
    console.log("bot operationnel");
});

Client.login(process.env.token);

Client.on("messageCreate",message => {
    for (let pas=0;pas<textArray2.length;pas++)
        if (message.content.includes(textArray2[pas])) {
            message.reply(textArray[Math.floor(Math.random()*textArray.length)]);
            console.log("il boit");
    }

});