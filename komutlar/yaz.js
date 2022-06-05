const Discord = require('discord.js')
const discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
	
			if(message.author.id === "424640284543025153") { 

    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);

return
        }


        		if(message.author.id === "363376578308210688") { 

    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);

return
        }
	
	if(message.author.id !== "4246402845430251") return message.channel.send('No, you are not wexris&dark !').then(x => x.delete({timeout: 5000}));
	
} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "yaz"
    };