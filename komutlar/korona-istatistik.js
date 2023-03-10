const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('```πΎπππππΌ πππππ πΌππππ ππππΌππππππ ππΌπ½ππππ πππππΌππππ```\n\n**TΓΌrkiye :flag_tr:**```!korona TR```\**Γin :flag_cn:**```!korona CN```\**Amerika :flag_us:**```!korona US```\**Japonya :flag_jp:**```!korona JP```\**Fransa :flag_fr:**```!korona FR```\**NorveΓ§ :flag_ne:**```!korona NE```\**Δ°sveΓ§ :flag_se:**```!korona SN```')
  let a = args[0].toLowerCase()
  .replace('tΓΌrkiye', 'TR')
  .replace('Γ§in', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveΓ§', 'NE')
  .replace('isveΓ§',  'SN')
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let ΓΌlk = body.countrydata[0].info.title

    let embed = new Discord.MessageEmbed()
    .setColor('#843da4')
    .setTitle('COVID-19')
    .setDescription(`COVID-19 Statistics in **${ΓΌlk}**`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`γ β ${body.countrydata[0].total_cases} β γ\`\` `, true)
    .addField('*:syringe: Toplam Δ°yileΕen:*',`\`\`γ β ${body.countrydata[0].total_recovered} β γ\`\` `, true)
    .addField('*:dna: Toplam Enfekte:*',`\`\`γ β ${body.countrydata[0].total_active_cases} β γ\`\` `, true)
    .addField('*:skull_crossbones: Toplam ΓlΓΌmler:*',`\`\`γ β ${body.countrydata[0].total_deaths} β γ\`\` `, true)
    .addField('*:test_tube: BugΓΌnki Vakalar:*',`\`\`γ β ${body.countrydata[0].total_new_cases_today} β γ\`\` `, true)
    .addField('*:warning: BugΓΌnki ΓlΓΌmler:*',`\`\`γ β ${body.countrydata[0].total_new_deaths_today} β γ\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`γ β ${body.countrydata[0].total_serious_cases} β γ\`\` `, true)
    .addField('*:flag_white:  Γlke:*',`\`\`γ β ${ΓΌlk} β γ\`\` `, true)
    .addField('*:bust_in_silhouette:   KullanΔ±cΔ± (sen):*',`\`\`γ β ${message.author.username} β γ\`\` `, true)
    .setTimestamp()
    .setFooter('COVID-19', client.user.avatarURL());
    
    message.channel.send(embed);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virΓΌs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 's',
  usage: 's'
};