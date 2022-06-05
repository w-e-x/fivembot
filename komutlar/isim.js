const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {



    if(message.channel.id !== ayarlar.botkomut) { 
	
	message.channel.send(`<@${message.author.id}>, komutları sadece <#${ayarlar.botkomut}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 5000}));
    message.react(ayarlar.emojired)
	return
	}


    const darkbiat2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`İsim değiştirmek için <@&${ayarlar.BotCommandsRole}> rolüne sahip olman gerekiyor!`)


   if(!message.member.roles.cache.has(ayarlar.BotCommandsRole)){ 
   
   message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
   message.react(ayarlar.emojired)
   return
   }


    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let isim = args.slice(1).join(' ');

    const gecersiz = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`Geçerli bir kişi belirtilmedi!`)

if(!user) { 
message.channel.send(gecersiz).then(x => x.delete({timeout: 6000}))
message.react(ayarlar.emojired)
return
}


    const gecersiz2 = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`Geçerli bir şekilde isim belirtilmedi!`)


if(!isim) { 
message.channel.send(gecersiz2).then(x => x.delete({timeout: 6000}))
message.react(ayarlar.emojired)
return
}

if(isim.length > 32) { 
    message.channel.send(gecersiz2).then(x => x.delete({timeout: 6000}))
    message.react(ayarlar.emojired)
    return
    }

    const darkbiat = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${user} kullanıcısının ismi **${isim}** olarak değiştirildi!`)




let emoji = ayarlar.emojionay
    const wexris = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`${user} (${user.user.id}) kişisinin ismi değiştirildi!

Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})

Yeni İsim : **${isim}** 
`)




client.channels.cache.get(ayarlar.rollog).send(wexris)
message.react(ayarlar.emojionay)
message.guild.members.cache.get(user.id).setNickname(`${isim}`)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "isim"
};
