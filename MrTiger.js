const Discord = require('discord.js');

const tpoints = {};

const prefix = "."

const vpoints = {};

const jimp = require("jimp");

const client = new Discord.Client();

client.on("ready", () => {

  console.log(

    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`

  );

  let statuses = [

   

    `Loding...`,

    `😈زؤلــــی بـــــرؤچــــــیـکت بــابـــبـرگــه وه ر بـــؤتــه کـــان`,

    `ئـــەوەریـــگـــاتــــۆدەبـــریــت مـــن لــی هـــاتــومــەتـــەو`,

    `ILOVE YOU BABY❤ `,

    `Bzhe Baxoma `,

  ];

  setInterval(function() {

    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(STREAMING, {      

    type:"Playing", 

    url: "https://www.twitch.tv/faith"

    });

  }, 2000);

});

client.on('ready' , () => {

var join = client.channels.get("id voice")/// ئاید ڤۆیس

if (join) join.join()

})

client.login("");

