const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
  
 
    let helpEmbed = new MessageEmbed()
 
   .setTitle(`SUPPORT`)
   .setURL(`https://discord.gg/yE7u7UMYyQ`)
   .setDescription(`INVITE`)
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=769188260228104203&permissions=1878523729&scope=bot`)
      .setColor("RANDOM");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
