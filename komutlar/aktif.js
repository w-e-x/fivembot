const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');           
const AktifRolWex = "969688974463496272"

module.exports.run = async (client, message, args) => { 

  const darkbiat2 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setDescription(`Aktif vermek için <@&${AktifRolWex}> rolüne sahip olman gerekiyor!`)


 if(!message.member.roles.cache.has(AktifRolWex)){ 
 
 message.channel.send(darkbiat2).then(x => x.delete({timeout: 5000}));
 message.react(ayarlar.emojired)
 return;
 }


  const aktifwex = new Discord.MessageEmbed()
  .setAuthor("Giriş yapmak için tıkla!", client.user.avatarURL(), "https://cfx.re/join/v4m84q")
  .setColor('BLACK')
  .setTitle("Sunucu Aktif!")
  .setDescription(`**Sunucuya giriş yapabilirsiniz!**


  **Sunucu Adresi:** connect 213.142.148.135

  **Teamspeak Adresi:** 212.68.34.167:10070

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
    aliases: []
    };
    exports.help = {
    name: "aktif"
    };