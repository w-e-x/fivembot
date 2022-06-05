const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const wexrislog = new Discord.WebhookClient("932305604029087825", "to1r7g6Pmipv-gWXD8x4fRQQ3r3oTlh90LL8f-WJunSHP1JcrTEDCT40YkLoAoKecl6p")

exports.run = async(client, message, args) => {

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   var rol = message.mentions.roles.first()








    if(message.channel.id !== ayarlar.botkomut) { 
	
	message.channel.send(`<@${message.author.id}>, komutları sadece <#${ayarlar.botkomut}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 5000}));
    message.react(ayarlar.emojired)
	
	}
if(message.channel.id !== ayarlar.botkomut) return

    const darkbiat2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`Rol vermek için <@&${ayarlar.BotCommandsRole}> rolüne sahip olman gerekiyor!`)


   if(!message.member.roles.cache.has(ayarlar.BotCommandsRole)){ 
   
   message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
   message.react(ayarlar.emojired)
   }
 if(!message.member.roles.cache.has(ayarlar.BotCommandsRole)) return



    const gecersiz = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`Geçerli bir kişi belirtilmedi!`)

if(!user) { 
message.channel.send(gecersiz).then(x => x.delete({timeout: 6000}))
message.react(ayarlar.emojired)
}
if(!user) return 

    const gecersiz2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`Geçerli bir şekilde rol belirtilmedi!`)


if(!rol) { 
message.channel.send(gecersiz2).then(x => x.delete({timeout: 6000}))
}
if(!rol) return message.react(ayarlar.emojired)


    const darkbiat = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${user} kullanıcısına başarıyla ${rol} rolü verildi!`)




let emoji = ayarlar.emojionay
    const wexris = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${user} (${user.user.id}) kişisine rol eklendi!
Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Verilen Rol : <@&${rol.id}> 
`)

    const wexrislogs = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${user} (${user.user.id}) kişisine rol eklendi!
Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Verilen Rol : **${rol.name}** (${rol.id})
`)





if(rol.id === ayarlar.founder) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 


if(rol.id === ayarlar.cofounder) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 


if(rol.id === ayarlar.etiket) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 

if(rol.id === ayarlar.sgs) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 

if(rol.id === ayarlar.management) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 


if(rol.id === ayarlar.directör) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 


if(rol.id === ayarlar.verilemez2) { 
 message.channel.send(gecersiz2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
return;
} 



wexrislog.send(wexrislogs)

client.channels.cache.get(ayarlar.rollog).send(wexris)
message.react(ayarlar.emojionay)
user.roles.add(rol.id)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "rolver"
};
