
const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if(message.author.id !== "363376578308210688") return message.channel.send('No, you are not wexris!').then(x => x.delete({timeout: 5000}));
	
let emote = client.emojis.cache.find(emojilist => emojilist.name == args[0])
if(!args[0]) return message.channel.send('**Dostum Böyle Bir Emoji Yoq**')
message.channel.send(`Hey ${message.author}! Çok Şanslısın Böyle Bir Emoji Buldum Buyur: ${emote.url}`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiinfo','e'],
    permLevel: 0
}

exports.help = {
    name: 'emojibilgi',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}
