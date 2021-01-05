import http from "http";
import discord from "discord.js";


http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Discord bot is active now \n');
}).listen(3000);

const client = new discord.Client();


client.on('message', message => {
    if (message.author.bot || client.user == null) {
        return;
    }
    if (message.mentions.has(client.user)) {
        message.reply('呼びましたか？');
        return;
    }
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
    console.log('please set ENV: DISCORD_BOT_TOKEN');
    process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);