const Discord = require("discord.js");
const discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const ayarlar2 = require('../wexris.json');
const moment = require("moment");
require("moment-duration-format");             

module.exports.run = async (client, message, args) => {


  var tarih = [moment().format('DD-MM-YYYY | H:mm:ss')]
  client.channels.cache.get(ayarlar.komutlog).send(`<@${message.author.id}> (${message.author.id}) kullanıcısı <#${message.channel.id}> kanalında ${message} komutunu kullandı.`)
  
  const darkbiat2 = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`Ban atmak için yeterli yetkiye sahip değilsin!`)
  .setTimestamp()

  var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let guild = message.guild;
  let sebep = args.slice(1).join(" ")
 


  const yuksekrol = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`)

  const bantrue = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`${member} **${sebep}** sebebiyle banlandı!`)

//  const banlogsal = new discord.MessageEmbed()
//.setAuthor(message.author.tag, message.author.avatarURL())
//.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!
//
//
//
// Yasaklanan Üye: <@${member.id}> - (${member.id}) 
// Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
// Ban Tarihi : **${tarih}***
// Yasaklama Sebebi : **${sebep}**
//
//`)

const darkbiat223 = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor('BLACK')
.setDescription(`Geçerli bir üye/kişi belirt!`)


const darkbiat3131 = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor('BLACK')
.setDescription(`Geçerli bir sebep belirt!`)

////////////////////////////////////////////
if(message.author.id === '424640284543025153') {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Yasaklanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

      if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
  
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.directör)) {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Yasaklanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

    if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

  if(member.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(member.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////////////////////////////////////////

 ////////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.management)) {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Yasaklanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

  if(member.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
      if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
      if(member.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.cofounder)) {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Yasaklanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

    if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

  if(member.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
      if(member.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.founder)) {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Banlanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

  if(member.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
      if(member.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
if(message.member.roles.cache.has(ayarlar.sgs)) {

  if(!member) { 
  message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}))
  message.react(ayarlar.emojired)
  return;
  }
  const banlogsal = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${member.id}> - (${member.id}) adlı kişi sunucumuzdan yasaklanmıştır!



Banlanan Üye: <@${member.id}> - (${member.id}) 
Banlayan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Ban Tarihi : **${tarih}***
Yasaklama Sebebi : **${sebep}**

`)

    if(member.id === "424640284543025153") {
	  message.channel.send("wexfix abimi banlayamazsın.").then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

  if(member.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
      if(member.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  if(!sebep) {
	  message.channel.send(darkbiat3131).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
	 return;
  }  
  
  guild.members.ban(member)
message.react(ayarlar.emojionay)
  message.channel.send(bantrue).then(x => x.delete({timeout: 5000}));
  client.channels.cache.get(ayarlar.yasaklog).send(banlogsal)
  return;
 }


////////////////////////////////////////////////////////////////////////////////



   if(!message.member.roles.cache.has("9088788208813588")) {

 message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
message.react(ayarlar.emojired)
   }

   if(!message.member.roles.cache.has("9088788208813588")) return 




  



  if(!member) return message.channel.send(darkbiat223).then(x => x.delete({timeout: 5000}));






  if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send(darkbiat22);

    const umutsalproblem = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Geçerli bir sebep belirtmelisiniz!`)
	
  if(!sebep) return message.channel.send(umutsalproblem).then(x => x.delete({timeout: 5000}));
  
  guild.members.ban(member)
  message.react(ayarlar.emojionay)



  message.channel.send(darkbiat3)
  



} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "ban"
    };