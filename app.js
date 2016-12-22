const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const token = require("./token.json"); //loads token.json
const region = require("./region.json"); //loads region.json
const prefix = config.prefix;

client.on('ready', () => {
  console.log('MooseBot init successful');
  console.log(`Currently serving ${client.guilds.size} servers`);
  console.log(`[${new Date()}]:MooseBot init successful`);
});

client.on('connect', () => {
  console.log(`[${new Date()}]: Connected`);
});

client.on('disconnect', () => {
  console.log(`[${new Date()}]: Disconnected`);
});


  if(config.region === "EU") {
  client.login(token.EU);
  console.log(`[${new Date()}]: Now acting as MooseBot EU`);
} else if (config.region === "BETA") {
  client.login(token.BETA);
  console.log(`[${new Date()}]: Now acting as MooseBot BETA`);
} else if (config.region === "NA") {
  client.login(token.NA);
  console.log(`[${new Date()}]: Now acting as MooseBot NA`);
} else {
  console.log(`[${new Date()}]: Unable to log in! No bot user specified in config.json 3:13!`);
}


client.on('message', message => { //commands
  if(message.author.bot) return; //checks if bot user (self) is author
  if(!message.content.startsWith(config.prefix)) return; //check if message starts with config.prefix

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //allows and creates arguments



  if(command === "ping") {
        const timeInMs = Date.now();
        const ping = message.createdAtTimestamp - message.createdAtTimestamp;
        console.log(`ping: ${ping}`);
        message.channel.sendMessage(`Pong! \`${ping}ms\``);
    } else

  if(command === "about") {
        message.channel.sendMessage("MooseBot is a Discord Bot created by Moosecoop, a gamer, programmer, student and Discord enthusiast");
    } else

  if(command === "help") {
      message.user.sendMessage(`COMMANDS: \n ${prefix}ping - returns the ping in milliseconds\n ${prefix}about - returns info about MooseBot and it's creator \n ${prefix}invite - returns link to invite MooseBot to your server`);
    } else

  if(command === "msmsg") {
      if(message.author.id == config.ownerID){
        var message = command.splice(1).join(' ');
        client.Guilds.forEach((guild) => {
        guild.generalChannel.sendMessage(message);
        })
      }
  }
});


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome **${member.user.username}** to **${member.guild}**!`);
});

client.on('guildCreate', member => {
  console.log("guildcreate funcionality is not yet complete! Please check back later");
  gguild.defaultChannel.sendMessage(`**${client.username}** has joined **${guild.name}**! Type \`${config.prefix}help\` for help`);
});

client.on('guildDelete', guild => {
  console.log(`[${new Date()}]: Left ${guild.name}`);
});

client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    guild.defaultChannel.sendMessage(`**${member.user.username}** is speaking`);
  }
});

//client.on('guild');
