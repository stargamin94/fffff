const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(669273905592139800)
setInterval(function() {
channel.send(`ahmed ahmed ahmed ahmed ahmed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);