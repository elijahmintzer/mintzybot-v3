module.exports = {
    name: 'ping',
    description: 'ping command.',
    args: false,
    execute(message, args){
        message.channel.send('pong');
    },
};