const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const token = require("./token.json"); //loads token.json
const region = require("./region.json"); //loads region.json

client.on('ready', () => {
  console.log('MooseBot init successful');
  console.log(`Currently serving ${client.guilds.size} servers`);
  console.log(`[${new Date()}]:MooseBot init successful`);
});


client.on('message', message => { //commands
  if(message.author.bot) return; //checks if bot user (self) is author
  if(!message.content.startsWith(config.prefix)) return; //check if message starts with config.prefix

  let command = message.content.split(" ")[0]; 
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //allows and creates arguments

  /*if(command === "ping") {
        message.channel.sendMessage(`Pong! \`${Date.now - message.createdTimeStamp} ms\``);
    } else */

  if(command === "ping") {
    const ping = new Date();
    message.channel.sendMessage("Pong!").then(msg => {
    const pong = new Date() - ping;
    msg.edit(`Pong! \`${pong}ms\``);
    });

  } else

  if(command === "about") {
        message.channel.sendMessage("MooseBot is a Discord Bot created by Moosecoop, a gamer, programmer, student and Discord enthusiast");
    } else

  if (command === "help") {
      message.channel.sendMessage("this feature is not yet finished! sorry");
    } else

  if(command === "msmsg") {
      if(message.author.id == config.ownerID){
        var message = command.splice(1).join(' ');
        client.Guilds.forEach((guild) => {
        guild.generalChannel.sendMessage(message);
      })

      }

  };


if(region.config === "EU") {
  client.login(token.EU);
  console.log(`[${new Date()}]: Now acting as MooseBot EU`);
} else if (region.config === "BETA") {
  client.login(token.BETA);
  console.log("Now acting as MooseBot BETA");
} else {
  client.login(token.NA);
  console.log("Now Acting as MooseBot NA");
}


client.on('GuildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to ${member.guild}`);
});


client.on('GuildCreate', member => {
  console.log("guildcreate funcionality is not yet complete! Please check back later");
  guild.defaultChannel.sendMessage(`@${client.user.name} has joined ${guild.name}`);
});

client.on('GuildDelete', guild => {
  console.log(`[${new Date()}]: Left ${guild.name}`);
})});
