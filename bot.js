const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const ayarlar1 = require('./ayarlar.json');
const ayarlar2 = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const Database = require("plasma-db");
const db = require("quick.db")
const matthe = require('./wexris.json')
const matthe1 = require('./wexris.json')
const matthe2 = require('./wexris.json')

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "yeniden bağlandım kral");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

let danger = false

 client.on("guildMemberAdd", async member => {
 let engin = db.fetch(`jaillikişi_${member.guild.id}.${member.id}`)
 if(engin == member.id) {
 let enginar = ayarlar.karantinarol
 if(!enginar) return;
 let log = ayarlar.jaillog
member.guild.members.cache.get(member.id).roles.add(enginar)
const embed = new Discord.MessageEmbed()
.setAuthor('RedBots - Log')
.setDescription(`<@${member.id}> karalistede olduğu için karantinaya atıldı!`)
client.channels.cache.get(log).send(embed)
};
})

const wexriswashere = new Discord.MessageEmbed()
.setTitle(`İzinler Kapatıldı!`)
.setDescription(`Bütün rollerdeki yetkiler kapatıldı!`)
.setFooter(`wexris#6423 was here!`)
.setTimestamp()

client.on("guildBanAdd", async function (guild, user) {
    const entry = await guild
        .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
        .then(audit => audit.entries.first());
    const yetkili = await guild.members.cache.get(entry.executor.id);
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    guild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    guild.members.ban(entry.executor.id, { reason: "izinsiz kullanıcı yasaklama - RedBot's" })
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Ban Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
		.setTitle(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!**`)
        .setColor(ayarlar.color)
       .setFooter(ayarlar.footer)
        .setDescription(`**${user.tag}** (**${user.id}**) üyesi, **${yetkili.user.tag}** (**${yetkili.id}**) tarafından sunucudan sağ tık ile banlandı! **Yetkili sunucudan yasaklandı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!** \n**Yasaklıyan Ve Yasaklanan Kişilerin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\`\n**Kullanıcın Adı :** \`\`${user.tag}\`\` **Kullanıcının İdsi :** \`\`${user.id}\`\``)
});

client.on("guildMemberRemove", async kickhammer => {
    const guild = kickhammer.guild;
    const entry = await guild
        .fetchAuditLogs()
        .then(audit => audit.entries.first());
    if (entry.action == `MEMBER_KICK`) {
        let yetkili = await guild.members.cache.get(entry.executor.id);
        
        if (matthe.bots.includes(entry.executor.id)) return;
        if (matthe.owners.includes(entry.executor.id)) return;
        if (matthe.guvenlid.includes(entry.executor.id)) return;
        kickhammer.guild.roles.cache.forEach(async function (jahky) {
            if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                jahky.setPermissions(0).catch(err => { });
            }
        });
        kickhammer.guild.members.ban(yetkili.id, { reason: "izinsiz kullanıcı Kickleme! - RedBot's" })
        let channel = client.channels.cache.get(ayarlar.log1)
        if (!channel) return console.log('Kick Koruma Logu Yok!');
        const jahky = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(ayarlar.color)
			.setTitle(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!**`)
            .setFooter(ayarlar.footer)
            .setDescription(`**${yetkili.user.tag}** (**${yetkili.id}**) tarafından sunucudan sağ tık ile bir kullanıcı sunucudan atıldı! **Yetkili sunucudan yasaklandı!**`)
        channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
		channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
        return client.users.cache.get(ayarlar.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!** \n**Kickleyen Kişinin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\``)
    }
});

client.on("guildMemberAdd", async member => {
    const entry = await member.guild
        .fetchAuditLogs({ type: "BOT_ADD" })
        .then(audit => audit.entries.first());
    const xd = entry.executor;
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    if (member.user.bot) {
        member.guild.roles.cache.forEach(async function (jahky) {
            if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                jahky.setPermissions(0).catch(err => { });
            }
        });
        member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
        member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
        let channel = client.channels.cache.get(ayarlar.log1)
        if (!channel) return console.log('Bot Koruma Logu Yok!');
        const jahky = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(ayarlar.color)
			.setTitle(`**Sunucuya İzinsiz Bot Eklendi!**`)
            .setFooter(ayarlar.footer)
            .setDescription(`**${member.user.tag}** (**${member.id}**) botu, **${xd.tag}** (**${xd.id}**) adlı yetkili tarafından sunucumuza eklendi! **Yetkili sunucudan yasaklandı!**`)
        channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	  channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
        return client.users.cache.get(ayarlar.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
    }
});

client.on('guildUpdate', async (oldGuild, newGuild) => {
    const request = require('request');
    const moment = require('moment');
    let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
    if (!entry.executor || entry.executor.id === client.user.id || Date.now() - entry.createdTimestamp > 10000) return;

    moment.locale('tr');
    if (newGuild.vanityURLCode === null) return; // URL yoksa bişi yapmasın.  
    if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return; // URL'ler aynıysa bişi yapmasın.                                                
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;// Youtube: Matthe             
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    newGuild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    newGuild.members.ban(entry.executor.id, { reason: "URL Koruma Sistemi!" })
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('URL Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
		.setTitle(` **Sunucu Ayarlarıyla Oynandı!**`)
        .setFooter(ayarlar.footer)
        .setDescription(` **${entry.executor.tag}** (**${entry.executor.id}**) isimli yetkili sunucunun ayarlarıyla oynadı! **Yetkili sunucudan yasaklandı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
    client.users.cache.get(ayarlar.sahip).send(`**Sunucu URL'si değiştirildi! Değiştiren kişinin bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdisi :** \`\`${entry.executor.id}\`\``)
    request({
        method: 'PATCH',
        url: `https://discord.com/api/v8/guilds/${newGuild.id}/vanity-url`,
        body: {
            code: ayarlar.url
        },
        json: true,
        headers: {
            "Authorization": `Bot ${ayarlar.token}`
        }
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
    });
});

client.on("guildUpdate", async (oldGuild, newGuild) => {
    let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    if (newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
    newGuild.setIcon(oldGuild.iconURL({ dynamic: true, size: 2048 }));
    newGuild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    newGuild.members.ban(entry.executor.id, { reason: `Sunucuyu izinsiz güncellemek. - RedBot's` });
    const moment = require('moment');
    moment.locale('tr');
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Sunucu Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
	  .setTitle(` **Sunucu Ayarlarıyla Oynandı!**`)
        .setFooter(ayarlar.footer)
		  .setDescription(` **${entry.executor.tag}** (**${entry.executor.id}**) isimli yetkili sunucunun ayarlarıyla oynadı! **Yetkili sunucudan yasaklandı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucu ayarlarıyla Oynandı! Oynıyan Kişinin Bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
});

client.on("roleDelete", async role => {
    let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    role.guild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol silme! - RedBot's` });
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Rol Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
        .setFooter(ayarlar.footer)
		.setTitle(`**Sunucuda Rol Silindi!**`)
        .setDescription(` **${entry.executor.tag}** (**${entry.executor.id}**) adlı yetkili **${role.name}** rolünü silmeye çalıştı! **Yetkili sunucudan yasaklandı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol silindi! silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :** \`\`${role.name}\`\` **Rol İdsi :** \`\`${role.id}\`\``)
});

client.on("roleCreate", async role => {
    let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    if (matthe.roleguvenlid.includes(entry.executor.id)) return;
    role.guild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol oluşturma!` });
    role.delete({ reason: "Rol Koruma Sistemi" });
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Rol Açma Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
		.setTitle(`**Sunucuda Rol Açıldı!**`)
        .setColor(ayarlar.color)
        .setFooter(ayarlar.footer)
        .setDescription(` **${entry.executor.tag}** **${entry.executor.id}** isimli yetkili, rol açmaya çalıştı! **Yetkili sunucudan yasaklandı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
 channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol açıldı! açan kişinin bilgileri :** \n**Kullanıcı Adıı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
});

client.on("roleUpdate", async (oldRole, newRole) => {
    let entry = await newRole.guild.fetchAuditLogs({ type: 'ROLE_UPDATE' }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    if (matthe.roleguvenlid.includes(entry.executor.id)) return;
    if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
        newRole.setPermissions(oldRole.permissions);
        newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
    };
    newRole.edit({
        name: oldRole.name,
        color: oldRole.hexColor,
        hoist: oldRole.hoist,
        permissions: oldRole.permissions,
        mentionable: oldRole.mentionable
    });
    newRole.guild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    newRole.guild.members.ban(entry.executor.id, { reason: `İzinsiz Rol Güncelleme!` });
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Rol Günceleme Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
        .setFooter(ayarlar.footer)
        .setDescription(`**${entry.executor.tag}** (**${entry.executor.id}**) **${oldRole.name}** rolünü güncellemeye çalıştı! **Yetkili sunucudan yasaklandı!**`)
  channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :**\`\`${oldRole.name}\`\` **Rol İdsi :** \`\`${oldRole.id}\`\``)
});

const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
client.on("guildMemberUpdate", async (oldMember, newMember) => {
    if (newMember.roles.cache.size > oldMember.roles.cache.size) {
        let entry = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE' }).then(audit => audit.entries.first());
        
        if (matthe.bots.includes(entry.executor.id)) return;
        if (matthe.owners.includes(entry.executor.id)) return;
        if (matthe.guvenlid.includes(entry.executor.id)) return;
        const uyecik = newMember.guild.members.cache.get(entry.executor.id);
        if (yetkiPermleri.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
            newMember.roles.set(oldMember.roles.cache.map(r => r.id));
            uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
            let channel = client.channels.cache.get(ayarlar.log1)
            if (!channel) return console.log('Rol Verme Koruma Logu Yok!');
            const jahky = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(ayarlar.color)
				.setTitle(`**İzinsiz Yönetici Rolü Verildi!**`)
                .setFooter(ayarlar.footer)
                .setDescription(`<@${entry.executor.id}> (**${entry.executor.id}**) adlı yetkili, <@${newMember.id}> (**${newMember.id}**) adlı üyeye yönetici rolü vermeye çalıştı! **Yetkilinin yetkileri alınıp karantinaya atıldı!** `)
            channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
        };
    };
});



client.on("channelDelete", async channel => {
    let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    channel.guild.roles.cache.forEach(async function (jahky) {
        if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
            jahky.setPermissions(0).catch(err => { });
        }
    });
    channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Silme!` });
    await channel.clone({ reason: "Kanal Korum Sistemi!" }).then(async kanal => {
        if (channel.parentID != null) await kanal.setParent(channel.parentID);
        await kanal.setPosition(channel.position);
        if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));
    });
    let channel2 = client.channels.cache.get(ayarlar.log1)
    if (!channel2) return console.log('Kanal Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
		.setTitle(`**İzinsiz Kanal Sildi!**`)
        .setFooter(ayarlar.footer)
        .setDescription(`**${entry.executor.tag}** (**${entry.executor.id}**) adlı yetkili, **${channel.name}** adlı kanalı silmeye çalıştı! **Yetkili sunucudan yasaklandı!**`)
    channel2.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	  channel2.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
    return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda kanal silindi! Silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Kanal Adı :**\`\`${channel.name}\`\` **Kanal İdsi :** \`\`${channel.id}\`\``)
});



client.on("emojiDelete", async (emoji, message) => {
    const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
    const uyecik = emoji.guild.members.cache.get(entry.executor.id);
    uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Emoji Silme Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
		.setTitle(`**İzinsiz Emoji Silindi!**`)
        .setFooter(ayarlar.footer)
        .setDescription(`<@${entry.executor.id}> (**${entry.executor.id}**) adlı yetkili **${emoji.name}** isimli emojiyi silmeye çalıştı! **Emoji yeniden yüklendi yetkili jaile atıldı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
});

client.on("emojiCreate", async (emoji, message) => {
    const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    emoji.delete({ reason: "Emoji Koruma Sistemi!" });
    const uyecik = emoji.guild.members.cache.get(entry.executor.id);
    uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Emoji Yükleme Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
		.setTitle(`**İzinsiz Emoji Yüklendi!**`)
        .setColor(ayarlar.color)
        .setFooter(ayarlar.footer)
        .setDescription(`<@${entry.executor.id}> (**${entry.executor.id}**) adlı yetkili, izinsiz emoji yükledi! **Emoji silindi ve yetkili jaile atıldı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
    if (oldEmoji === newEmoji) return;
    const entry = await oldEmoji.guild.fetchAuditLogs({ type: "EMOJI_UPDATE" }).then(audit => audit.entries.first());
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    await newEmoji.setName(oldEmoji.name);
    const uyecik = oldEmoji.guild.members.cache.get(entry.executor.id);
    uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
    let channel = client.channels.cache.get(ayarlar.log1)
    if (!channel) return console.log('Emoji Güncelleme Koruma Logu Yok!');
    const jahky = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(ayarlar.color)
		.setTitle(`**İzinsiz Emoji Güncellendi!**`) 
        .setFooter(ayarlar.footer)
        .setDescription(`<@${entry.executor.id}> (**${entry.executor.id}**) adlı yetkili, izinsiz emoji güncelledi! **Emoji eski haline getirildi ve yetkili jaile atıldı!**`)
    channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
});

client.on("guildMemberAdd", async member => {
    const entry = await member.guild
        .fetchAuditLogs({ type: "BOT_ADD" })
        .then(audit => audit.entries.first());
    const xd = entry.executor;
    
    if (matthe.bots.includes(entry.executor.id)) return;
    if (matthe.owners.includes(entry.executor.id)) return;
    if (matthe.guvenlid.includes(entry.executor.id)) return;
    if (member.user.bot) {
        member.guild.roles.cache.forEach(async function (jahky) {
            if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                jahky.setPermissions(0).catch(err => { });
            }
        });
        member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
        member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
        let channel = client.channels.cache.get(ayarlar.log1)
        if (!channel) return console.log('Bot Koruma Logu Yok!');
        const jahky = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(ayarlar.color)
			.setTitle(`**Sunucuya İzinsiz Bot Eklendi!**`)
            .setFooter(ayarlar.footer)
            .setDescription(`**${member.user.tag}** (**${member.id}**) botu, **${xd.tag}** (**${xd.id}**) adlı yetkili tarafından sunucumuza eklendi! **Yetkili sunucudan yasaklandı!**`)
        channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: jahky })
	  channel.send(`<@424640284543025153> <@363376578308210688>`, { embed: wexriswashere })	
        return client.users.cache.get(ayarlar.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
    }
});

//-------------------------------------------------------------\\


client.on("ready", () => {
    if (danger) console.log("Role Database aktif!")
    if (danger !== true) {
        RoleBackup()
        setInterval(() => {
            RoleBackup()
        }, 36000 * 60 * 60);//? 1 saatte bir alır süreyi değiştirebilirsiniz (1000 = 1 saniye)
    }
});

client.on("message", message => {
    let prefix = '.'
    if (!matthe.backupowners.includes(message.author.id) || !prefix || !message.guild) return;
    let args = message.content.split(' ').slice(1);
    let command = message.content.split(' ')[0].slice(prefix.length);
    let embed = new Discord.MessageEmbed().setColor(message.member.displayHexColor).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true, })).setFooter("Dark. Was Here?!").setTimestamp();

    if (command === "backup-al") {
        RoleBackup();
        message.channel.send(embed.setDescription(`Başarıyla veri tabanına sunucu rol verisini kaydettiniz!`))
    }

    if (command === "eval") {
        if (!args[0]) return message.channel.send(`Kod belirt!`);
        let code = args.join(' ');
        function clean(text) {
            if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
            text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
            return text;
        };
        try {
            var evaled = clean(eval(code));
            if (evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, "Yasaklı komut");
            message.channel.send(`${evaled.replace(client.token, "Njk2MTY4Nz8SDIFDU4OTA1MDk4.b4nug3rc3k.bir.t0k3ns4n4cak.kadarsalagim")}`, { code: "js", split: true });
        } catch (err) { message.channel.send(err, { code: "js", split: true }) };
    };

    if (command === "backup-kur") {
        const ıd = args[0]
            if (!ıd) return message.channel.send(embed.setDescription("rol idsi belirt!"))
        const RoleDatabase = db.get(`rolebackup_${message.guild.id}_${ıd}`);
      if (!RoleDatabase) return message.channel.send(embed.setDescription("Lütfen geçerli bi rol idsi belirtin!"))
        const RoleMembers = db.get(`rolemembers_${message.guild.id}_${ıd}`)
        message.guild.roles.create({
            data: {
                name: RoleDatabase.name,
                color: RoleDatabase.color,
                hoist: RoleDatabase.hoist,
                position: RoleDatabase.position,
                permissions: RoleDatabase.permler,
            }
        }).then(newRole => {
            message.channel.send(embed.setDescription(`Başarıyla ${newRole} (${newRole.id}) rolünün backubını kurdunuz!`))
            client.channels.cache.get(ayarlar.log1).send(embed.setDescription(`${message.author} tarafından ${newRole} (${newRole.id}) rolünün backubı kullanıldı!`))
            if (!RoleMembers) return console.log(`${newRole.name} olayında veri tabanına kayıtlı üye olmadığı için rol dağıtımı iptal edildi!`)
            RoleMembers.forEach((member, index) => {
                if (!member) return console.log(`${client.users.cache.get(member).username} adlı üyeyi sunucuda bulamadığım için ${newRole.name} rolünü veremedim!`)
          setTimeout(() => {
 message.guild.members.cache.get(member).roles.add(newRole.id).then(x => console.log(`${client.users.cache.get(member).username} Adlı üye ${newRole.name} rolünü aldı!`)).catch(err => console.log(`${err} sebebiyle ${client.users.cache.get(member).username} adlı üye ${newRole.name} rolünü alamadı!`))
          }, index*3000)
            })
        })


    }
})

async function RoleBackup() {
    client.guilds.cache.get(ayarlar.sunucuid).roles.cache.filter(e => !e.managed).forEach(async role => {
        db.set(`rolebackup_${role.guild.id}_${role.id}`, {
            name: role.name,
            color: role.hexColor,
            hoist: role.hoist,
            position: role.rawPosition,
            permler: role.permissions,
            mentionable: role.mentionable,
        })
        db.set(`rolemembers_${role.guild.id}_${role.id}`, role.members.map(e => e.id))
    })
    let rolsize = client.guilds.cache.get(ayarlar.sunucuid).roles.cache.filter(rls => rls.name !== "@everyone").size
    console.log(`${moment(Date.now()).format("LLL")} Tarihinde başarıyla ${rolsize} rolün backup alma işlemi gerçekleştirildi!`)
}


client.on('ready', ()=>{
client.channels.cache.get(ayarlar.sesli).join()
})



client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (newMessage.author.bot || newMessage.channel.type === "dm") return;
    if (newMessage.content.startsWith(prefix)) return;
    let sc = ayarlar.messagelog
    let scbul = newMessage.guild.channels.cache.get(sc)
    if(!scbul) {
      
    }
    if (oldMessage.content == newMessage.content) return;
    let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`${client.user.username}`, client.user.avatarURL())
      .setDescription(` Mesaj Düzenlendi`, newMessage.author.avatarURL())
      .addField("Kullanıcı", newMessage.author)
      .addField("Eski Mesaj", "```" + oldMessage.content + "```")
      .addField("Yeni Mesaj", "```" + newMessage.content + "```")
      .addField("Kanal Adı", newMessage.channel.name)
      .addField("Mesaj ID", newMessage.id)
      .addField("Kullanıcı ID", newMessage.author.id)
      .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
          3}:${newMessage.createdAt.getMinutes()}`
      );
    scbul.send(embed);
  });
  
  client.on("messageDelete", async deletedMessage => {
    if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
    if (deletedMessage.content.startsWith(prefix)) return;
    let sc = ayarlar.messagelog
    let scbul = deletedMessage.guild.channels.cache.get(sc)
    if(!scbul) {
      
    }
    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(`${client.user.username}`, client.user.avatarURL())
      .setDescription(` Mesaj Silindi`)
      .addField("Kullanıcı", deletedMessage.author)
      .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
      .addField("Kanal Adı", deletedMessage.channel.name)
      .addField("Mesaj ID", deletedMessage.id)
      .addField("Kullanıcı ID", deletedMessage.author.id)
      .setFooter(`Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
          3}:${deletedMessage.createdAt.getMinutes()}`
      );
    scbul.send(embed);
  });


  
  
  
  client.on("guildMemberAdd", member => {
      
      if (member.user.bot) return;
  

      let date = moment(member.user.createdAt)
         const startedAt = Date.parse(date);
         var msecs = Math.abs(new Date() - startedAt);
           
         const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
         msecs -= years * 1000 * 60 * 60 * 24 * 365;
         const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
         msecs -= months * 1000 * 60 * 60 * 24 * 30;
         const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
         msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
         const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
         msecs -= days * 1000 * 60 * 60 * 24;
         const hours = Math.floor(msecs / (1000 * 60 * 60));
         msecs -= hours * 1000 * 60 * 60;
         const mins = Math.floor((msecs / (1000 * 60)));
         msecs -= mins * 1000 * 60;
         const secs = Math.floor(msecs / 1000);
         msecs -= secs * 1000;
           
         var string = "";
         if (years > 0) string += `${years} yıl ${months} ay`
         else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
         else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
         else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
         else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
         else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
         else if (secs > 0) string += `${secs} saniye`
             
           
         string = string.trim();
     
         let guild = member.client.guilds.cache.get(ayarlar.sunucuid)
         let log = guild.channels.cache.get("981611048589213747");
         let endAt = member.user.createdAt
         let gün = moment(new Date(endAt).toISOString()).format('DD')
         let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
         let yıl = moment(new Date(endAt).toISOString()).format('YYYY')
         let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
         let kuruluş = `${gün} ${ay} ${yıl} ${saat}`;
        
         const darkbiat2 = new Discord.MessageEmbed()
         .setColor('WHITE')
         .setDescription(`
         ・ Sunucumuza hoş geldin! ${member}, seninle **${member.guild.memberCount}** kişiyiz!
              
         ・  Hesabın **${kuruluş} (${string})** önce oluşturulmuş.
         `)
         .setTimestamp()

         log.send(darkbiat2)
  });

  







client.login(ayarlar.token);
