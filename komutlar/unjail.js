const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = async(client, message, args) => {

    if(message.channel.id !== ayarlar.botkomut) { 
	
	message.channel.send(`<@${message.author.id}>, komutları sadece <#${ayarlar.botkomut}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 5000}));
    message.react(ayarlar.emojired)
	
	}
if(message.channel.id !== ayarlar.botkomut) return
/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.admin)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////

/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.headadmin)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////

/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.directör)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////

/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.management)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////

/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.cofounder)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////

/////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.founder)) {
    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeden silinicek kişi belirtilmedi.`)

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};


    const darkbiat = new Discord.MessageEmbed()
	 .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
    .setDescription(`${user} kullanıcısının jaili başarıyla açıldı!`)
    .setTimestamp()


    const darkbiat3 = new Discord.MessageEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLACK')
     .setDescription(`  <@${user.id}> - (${user.id}) adlı kişinin ismi karantinadan silindi!
     
     
     
     Karalisteden Silinen Üye: <@${user.id}> - (${user.id}) 
     Karalisteden Kaldıran Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})     
     `)
    .setTimestamp()

user.roles.remove(ayarlar.karantinarol)
 message.react(ayarlar.emojionay)
db.delete(`jaillikişi_${message.guild.id}.${user.id}`, user.id)
client.channels.cache.get(ayarlar.jailkaldırmalog).send(darkbiat3)
return message.channel.send(darkbiat).then(x => x.delete({timeout: 6000}));
}
//////////////////////////////////
    const darkbiat2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Karalisteye kişi ekleme/kaldırma yapacak yetkiye sahip değilsiniz.`)
	
   if(!message.member.roles.cache.has("908878820881358")) {
  message.react(ayarlar.emojired)
 message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
   }

   if(!message.member.roles.cache.has("908878820881358")) return 

};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "unjail"
};