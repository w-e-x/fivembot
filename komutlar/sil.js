const Discord = require('discord.js')
const discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const moment = require("moment");
require("moment-duration-format");
exports.run = async(client, message, args) => {
  var tarih = [moment().format('DD-MM-YYYY | H:mm:ss')]
  if (!message.member.hasPermission("ADMINISTRATOR")) return 
const silinecekmiktar = args.slice(0).join('');
if(silinecekmiktar .length < 1) { return message.reply("Silinecek mesaj miktarını belirt") } 
message.channel.bulkDelete(silinecekmiktar);

const sildim = new Discord.MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`<#${message.channel.id}> kanalında **${silinecekmiktar}** mesaj silindi!`)
.setColor("BLUE")


const embed = new discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setDescription(`  <@${message.author.id}> tarafından <#${message.channel.id}> kanalında **${silinecekmiktar}** mesaj silindi!




Mesajı Silen Yetkili : <@${message.author.id}>  - ${message.author.tag} (${message.author.id})
Mesaj Silinen Kanal : <#${message.channel.id}> (${message.channel.id})
Silinen Mesaj Sayısı : ${silinecekmiktar}  
Mesaj Silinen Tarihi : **${tarih}***


`)
client.channels.cache.get(ayarlar.messagelog).send(embed)

message.channel.send(sildim).then(x => x.delete({timeout: 5000}));

} 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "sil"
    };