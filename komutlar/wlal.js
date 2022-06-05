const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const wexrislog = new Discord.WebhookClient("932305604029087825", "to1r7g6Pmipv-gWXD8x4fRQQ3r3oTlh90LL8f-WJunSHP1JcrTEDCT40YkLoAoKecl6p")

exports.run = async(client, message, args) => {

    const darkbiat2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`Whitelist almak için <@&${ayarlar.wlyetkili}> rolüne sahip olman gerekiyor!`)

   if(!message.member.roles.cache.has(ayarlar.wlyetkili)) {
	   message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
	   message.react(ayarlar.emojired)
   }
      if(!message.member.roles.cache.has(ayarlar.wlyetkili)) return

    if(message.channel.id !== ayarlar.wlbotkomut) { 
	message.react(ayarlar.emojired)
	message.channel.send(`${message.author}, Bu Komut Sadece Bu Kanalda Kullanabilirsin. <#${ayarlar.wlbotkomut}> `).then(x => x.delete({timeout: 5000})); 

	}
	  if(message.channel.id !== ayarlar.wlbotkomut) return 


    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);



    const darkbiat = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`${user} üyesi, ${message.author} tarafından **whitelist** alındı.`)


    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Whitelist alınıcak kişi belirtilmedi.`)

    const wexris = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`
    
    ${user} (${args[0]}) kişisine whitelisted **alındı**!
    
    **Alan Kişi**
    ${message.author} - (${message.author.id})

    `)
    .setFooter(ayarlar.footer, client.user.avatarURL())




if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

wexrislog.send(wexris)
client.channels.cache.get(ayarlar.wllog).send(wexris)
user.roles.remove(ayarlar.wlrol1)
user.roles.remove(ayarlar.wlrol2)
message.react(ayarlar.emojionay)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 5000}));
};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "wlal"
};