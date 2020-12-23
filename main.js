const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    token = process.env.TOKEN,
    prefix = process.env.PREFIX
} = require('dotenv-flow').config();

client.on('ready', () => {
    console.log(`${client.user.username} is now online`);
});

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    if(!args.length && command.args){
        return message.channel.send(`you have not provided any arguments, ${message.author}`);
    };
    try{
        command.execute(message, args);
    } catch(error){
        console.error(error);
        message.reply('There was an issue executing that command!');
    }
});

client.login(token);