const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');           

module.exports.run = async (client, message, args) => {


  client.channels.cache.get(ayarlar.komutlog).send(`<@<@${message.author.id}>> (${message.author.id}) kullanıcısı <#${message.channel.id}> kanalında ${message} komutunu kullandı.`)

  const darkbiat2 = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`Ban atmak için yeterli yetkiye sahip değilsin!`)



  const kullanıcı = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`Geçerli bir kullanıcı belirtmelisin!`)



  let member = args[0]
  let guild = message.guild;




 if(message.member.roles.cache.has(ayarlar.directör)) { 
  if(!member) {
	  message.channel.send(kullanıcı).then(x => x.delete({timeout: 5000}));
	  message.react(ayarlar.emojired)
	  return;
  }  
  
  guild.members.unban(member)

  const wexris = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`<@${member}> 'ın banı başarıyla açıldı!`)
  .setTimestamp()


  message.channel.send(wexris).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojionay)
  
  
  const ban = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RANDOM')
.setDescription(` ${member} üyesinin yasağı kaldırıldı! 

Yetkili : ${message.author} <@${message.author.id}> (${message.author.id} 

`)
  .setTimestamp()
  client.channels.cache.get(ayarlar.yasaklog).send(ban)
  return;
 }

 if(message.member.roles.cache.has(ayarlar.management)) { 
  if(!member) {
	  message.channel.send(kullanıcı).then(x => x.delete({timeout: 5000}));
	  message.react(ayarlar.emojired)
	  return;
  }  
  
  guild.members.unban(member)

  const wexris = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`${member} 'ın banı başarıyla açıldı!`)
  .setTimestamp()


  message.channel.send(wexris).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojionay)
  
  
  const ban = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RANDOM')
.setDescription(` ${member} üyesinin yasağı kaldırıldı! 

Yetkili : ${message.author} <@${message.author.id}> (${message.author.id} 

`)
  .setTimestamp()
  client.channels.cache.get(ayarlar.yasaklog).send(ban)
  return;
 }
 
 
  if(message.member.roles.cache.has(ayarlar.cofounder)) { 
  if(!member) {
	  message.channel.send(kullanıcı).then(x => x.delete({timeout: 5000}));
	  message.react(ayarlar.emojired)
	  return;
  }  
  
  guild.members.unban(member)

  const wexris = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`<@${member}> 'ın banı başarıyla açıldı!`)
  .setTimestamp()


  message.channel.send(wexris).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojionay)
  
  
  const ban = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RANDOM')
.setDescription(` ${member} üyesinin yasağı kaldırıldı! 

Yetkili : ${message.author} <@${message.author.id}> (${message.author.id} 

`)
  .setTimestamp()
  client.channels.cache.get(ayarlar.yasaklog).send(ban)
  return;
 }

 if(message.member.roles.cache.has(ayarlar.founder)) { 
  if(!member) {
	  message.channel.send(kullanıcı).then(x => x.delete({timeout: 5000}));
	  message.react(ayarlar.emojired)
	  return;
  }  
  
  
  
  guild.members.unban(member)

  const wexris = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`<@${member}> 'ın banı başarıyla açıldı!`)
  .setTimestamp()


  message.channel.send(wexris).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojionay)
  
  
  const ban = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RANDOM')
.setDescription(` ${member} üyesinin yasağı kaldırıldı! 

Yetkili : ${message.author} <@${message.author.id}> (${message.author.id} 

`)
  .setTimestamp()
  client.channels.cache.get(ayarlar.yasaklog).send(ban)
  return;
 }
 
  if(message.member.roles.cache.has(ayarlar.sgs)) { 
  if(!member) {
	  message.channel.send(kullanıcı).then(x => x.delete({timeout: 5000}));
	  message.react(ayarlar.emojired)
	  return;
  }  
  
  
  
  guild.members.unban(member)

  const wexris = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`<@${member}> 'ın banı başarıyla açıldı!`)
  .setTimestamp()


  message.channel.send(wexris).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojionay)
  
  
  const ban = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('RANDOM')
.setDescription(` ${member} üyesinin yasağı kaldırıldı! 

Yetkili : ${message.author} <@${message.author.id}> (${message.author.id} 

`)
  .setTimestamp()
  client.channels.cache.get(ayarlar.yasaklog).send(ban)
  return;
 }






 if(!message.member.roles.cache.has("90887882088135886")) {

  message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojired)
 }

 if(!message.member.roles.cache.has("90887882088135886")) return 

} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "unban"
    };