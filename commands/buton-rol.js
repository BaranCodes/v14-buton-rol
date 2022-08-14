const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Yeterli yetkin yok!")
  
  let rol = message.mentions.roles.first()
 
  if(!rol) return message.channel.send("Lütfen bir rol etiketle!")
  let emoji = args[1]
  if (!emoji) return message.channel.send("Lütfen bir emoji gir!")
  let mesaj = args.slice(2).join(" ")
  if (!mesaj) return message.channel.send("Lütfen bir embed mesaj yazısı gir!")
  const embed = new EmbedBuilder()
  .setTitle("Godzilla - Rol Al Sistemi!")
  .setDescription(`${mesaj}`)
  .setColor("#ff0000")
  const row = new Discord.ActionRowBuilder()
  .addComponents(
  new Discord.ButtonBuilder()
  .setLabel(`${emoji} `+ rol.name)
  .setStyle(Discord.ButtonStyle.Secondary)
  .setCustomId("rol")
  )
  message.channel.send({embeds: [embed], components: [row]})
db.set(`buton_rol${message.guild.id}`, rol.id)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "buton-rol"
};
