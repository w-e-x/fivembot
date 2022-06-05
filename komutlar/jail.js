const discord = require('discord.js')
const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const ms = require("ms");
const matthe = require('../wexris.json')

exports.run = async(client, message, args) => {

    if(message.channel.id !== ayarlar.botkomut) { 
	
	message.channel.send(`<@${message.author.id}>, komutları sadece <#${ayarlar.botkomut}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 5000}));
    message.react(ayarlar.emojired)
	
	}
if(message.channel.id !== ayarlar.botkomut) return


  //  if(message.author.id !== "424640284543025153") return message.channel.send(`Komut kullanım dışı!`).then(x => x.delete({timeout: 5000}));
   var tarih = [moment().format('DD-MM-YYYY | H:mm:ss')]

    const darkbiat34 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Kara listeye alınıcak kişi belirtilmedi.`)
	
	const darkbiat346 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Geçerli bir sebep belirtilmedi.`)
	
  const karalistede = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Belirtilen kişi zaten karalistede!`)
	
	 const yuksekrol = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor('BLACK')
  .setDescription(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`)

let log = ayarlar.jaillog
let rol = ayarlar.karantinarol
let engin = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
let sebep = args.slice(1).join(' ')

/////////////////////////////////////////// 
if(message.member.roles.cache.has(ayarlar.headadmin)) {
	
if(!engin){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

  if(engin.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(engin.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }


if(!sebep){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat346).then(x => x.delete({timeout: 6000}));
return;
};

engin.roles.cache.forEach(r => {
engin.roles.remove(r.id)})
message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${engin.id}> - (${engin.id}) adlı kişi jaillenmiştir!



Karalisteye Alınan Üye: <@${engin.id}> - (${engin.id}) 
Karalisyete Alan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Karaliste Tarihi : **${tarih}***
Karaliste Sebebi : **${sebep}**

`)
client.channels.cache.get(log).send(embed)

    const oldu = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`<@${engin.id}> (${engin.id}) karalisteye eklendi!`)
message.channel.send(oldu).then(x => x.delete({timeout: 6000}));
 message.react(ayarlar.emojionay)
return; 
} 
/////////////////////////////////////////////

/////////////////////////////////////////// 
if(message.member.roles.cache.has(ayarlar.admin)) {
	
if(!engin){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

  if(engin.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(engin.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

if(!sebep){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat346).then(x => x.delete({timeout: 6000}));
return;
};

engin.roles.cache.forEach(r => {
engin.roles.remove(r.id)})
message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${engin.id}> - (${engin.id}) adlı kişi jaillenmiştir!



Karalisteye Alınan Üye: <@${engin.id}> - (${engin.id}) 
Karalisyete Alan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Karaliste Tarihi : **${tarih}***
Karaliste Sebebi : **${sebep}**

`)
client.channels.cache.get(log).send(embed)

    const oldu = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`<@${engin.id}> (${engin.id}) karalisteye eklendi!`)
message.channel.send(oldu).then(x => x.delete({timeout: 6000}));
 message.react(ayarlar.emojionay)
return; 
} 
/////////////////////////////////////////////

/////////////////////////////////////////// 
if(message.member.roles.cache.has(ayarlar.directör)) {
	
if(!engin){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

  if(engin.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(engin.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

if(!sebep){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat346).then(x => x.delete({timeout: 6000}));
return;
};

engin.roles.cache.forEach(r => {
engin.roles.remove(r.id)})
message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${engin.id}> - (${engin.id}) adlı kişi jaillenmiştir!



Karalisteye Alınan Üye: <@${engin.id}> - (${engin.id}) 
Karalisyete Alan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Karaliste Tarihi : **${tarih}***
Karaliste Sebebi : **${sebep}**

`)
client.channels.cache.get(log).send(embed)

    const oldu = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`<@${engin.id}> (${engin.id}) karalisteye eklendi!`)
message.channel.send(oldu).then(x => x.delete({timeout: 6000}));
 message.react(ayarlar.emojionay)
return; 
} 
/////////////////////////////////////////////

/////////////////////////////////////////// 
if(message.member.roles.cache.has(ayarlar.management)) {
	
if(!engin){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

  if(engin.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(engin.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

if(!sebep){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat346).then(x => x.delete({timeout: 6000}));
return;
};

engin.roles.cache.forEach(r => {
engin.roles.remove(r.id)})
message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${engin.id}> - (${engin.id}) adlı kişi jaillenmiştir!



Karalisteye Alınan Üye: <@${engin.id}> - (${engin.id}) 
Karalisyete Alan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Karaliste Tarihi : **${tarih}***
Karaliste Sebebi : **${sebep}**

`)
client.channels.cache.get(log).send(embed)

    const oldu = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`<@${engin.id}> (${engin.id}) karalisteye eklendi!`)
message.channel.send(oldu).then(x => x.delete({timeout: 6000}));
 message.react(ayarlar.emojionay)
return; 
} 
/////////////////////////////////////////////

/////////////////////////////////////////// 
if(message.member.roles.cache.has(ayarlar.cofounder)) {
	
if(!engin){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat34).then(x => x.delete({timeout: 6000}));
return;
};

  if(engin.roles.highest.position > message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }
  
    if(engin.roles.highest.position === message.member.roles.highest.position) {
	  message.channel.send(yuksekrol).then(x => x.delete({timeout: 5000}))
	  message.react(ayarlar.emojired)
  return;
  }

if(!sebep){
  message.react(ayarlar.emojired)
message.channel.send(darkbiat346).then(x => x.delete({timeout: 6000}));
return;
};

engin.roles.cache.forEach(r => {
engin.roles.remove(r.id)})
message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${engin.id}> - (${engin.id}) adlı kişi jaillenmiştir!



Karalisteye Alınan Üye: <@${engin.id}> - (${engin.id}) 
Karalisyete Alan Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Karaliste Tarihi : **${tarih}***
Karaliste Sebebi : **${sebep}**

`)
client.channels.cache.get(log).send(embed)

    const oldu = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`<@${engin.id}> (${engin.id}) karalisteye eklendi!`)
message.channel.send(oldu).then(x => x.delete({timeout: 6000}));
 message.react(ayarlar.emojionay)
return; 
} 
/////////////////////////////////////////////
    const darkbiat2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('BLUE')
    .setDescription(`Karalisteye kişi ekleme/kaldırma yapacak yetkiye sahip değilsiniz.`)
	
   if(!message.member.roles.cache.has("908878820881358")) {
  message.react(ayarlar.emojired)
 message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
   }

   if(!message.member.roles.cache.has("908878820881358")) return 

} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "jail"
    };