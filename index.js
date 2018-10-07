const botconfig = require("botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setGame("_help | Wachting 1 server")
});

bot.on("message", async massage => {
    if(massage.author.bot) return;
    if(massage.channel.type === "dm") return

    let prefix = botconfig.prefix;
    let massageArray = massage.content.split(" ");
    let cmd = massageArray[0];
    let args = massageArray.slice(1);

   if(cmd === `${prefix}help`){
       return massage.channel.send("this is a new bot! you need to wait for new commands!");
   }

});

bot.login(botconfig.token);
