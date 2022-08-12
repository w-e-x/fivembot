const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');           
const AktifRolWex = "969688974463496272"

module.exports.run = async (client, message, args) => { 

  const darkbiat2 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`Bakım duyurusu geçmek için <@&${AktifRolWex}> rolüne sahip olman gerekiyor!`)

  const wexbiat = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`Bakım duyurusu geçmek için geçerli bir saat belirtmen gerekiyor!`)


 if(!message.member.roles.cache.has(AktifRolWex)){ 
 
 message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
 message.react(ayarlar.emojired)
 return;
 }
 
 let saat = args[0] 
 
 if(!saat){ 
  message.channel.send(wexbiat).then(x => x.delete({timeout: 5000}));
  message.react(ayarlar.emojired)
  return;
  }

  const aktifwex = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`Sunucumuz Bakıma Alınmıştır!`)
  .setDescription(`**Sunucumuz bakıma alınmıştır!** Bu süre zarfında sunucuya giriş yapmanız dahilinde çıkıcak sorunları Reborn Zombie Apocalypse olarak desteklemiyeceğimizi belirtmek isteriz.Bizden haber alana kadar beklemenizi rica ederiz.

  Planlanan bakım sonlanma saati **${saat}**'dir, bizden haber alana kadar sunucuya giriş sağlamayınız!  

**Discord sunucumuzun sınırsız davet linki:** https://discord.gg/thorrp`)
.setImage("https://cdn.discordapp.com/attachments/969333568205647872/969692112469758022/thor.gif")
.setFooter(message.author.tag, message.author.avatarURL())
  message.delete()
message.channel.send(`@everyone`, { embed: aktifwex })


} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: ["bak"]
    };
    exports.help = {
    name: "bakım"
    };