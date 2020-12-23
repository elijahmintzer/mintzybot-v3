const Discord = require('discord.js');

module.exports = {
    name: 'get-avatar',
    description: "fetches a user's avatar.",
    args: true,
    execute(message, args) {
        const Embed =  new Discord.MessageEmbed();
        Embed.setColor("#bf2ec9");
        Embed.setFooter(`Made with ❤️\nProgrammed by Mintz#8233`);
        if(args[0] = message.mentions.users.first()){
            const user = message.mentions.users.first();
            Embed.setDescription(`${user}'s avatar`)
            Embed.setImage(user.displayAvatarURL());
            return message.channel.send(Embed);
        }
    }
}