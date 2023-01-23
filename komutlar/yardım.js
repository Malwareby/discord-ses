const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
  message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setDescription(`**Lwors Yardım Menüsü :innocent:**
  \`\`\`${client.user.username} Yardım Menüsü\`\`\`
  
  **\`!herkese-rol-ver\`
 Belirttiğiniz Rolü Herkese Verir!**
  
  \`!ping\`
  Botun Pingini Gösterir!

   \`!korona\`
Belirtilen Ülkenin Korona Tablosunu Gösterir!

\`!yavaş-mod\`
Yazılan Kanala Yavaş Mod Ekler! **

  
  **\`!çeviri\`
 Mesajınızı Türkçeye Veya İngilizceye Çevirir!**
  
  
  :bouquet: 
  **`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/799170794688217109/799282353192304680/kel20olmak.png'))


  //message.channel.send(embed);
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['help', 'bilgi'],
    permlevel: 0
};

exports.help = {
    name: "yardım"
}
