const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const token = require("./token.json"); //loads token.json
const region = require("./region.json"); //loads region.json
const ddiff = require('return-deep-diff');
const fs = require('fs');
const prefix = config.prefix;

function logPingAdd1() {
  var file_logs = fs.readFileSync('logs.json');
  var logs = JSON.parse(file_logs);
  var ping = logs.ping;
  var total = logs.total;
  logs.total = logs.total + 1;

  //change the value in the in-memory object
  logs.ping = logs.ping + 1;
  //Serialize as JSON and Write it to a file
  fs.writeFile('logs.json', JSON.stringify(file_logs), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file_logs));
  console.log('writing to ' + 'logs.json');
});
}

function logAboutAdd1() {
  var file_logs = fs.readFileSync('logs.json');
  var logs = JSON.parse(file_logs);
  var about = logs.about;
  var total = logs.total;
  logs.total = logs.total + 1;

  //change the value in the in-memory object
  logs.about = logs.about + 1;
  //Serialize as JSON and Write it to a file
  fs.writeFile('logs.json', JSON.stringify(file_logs), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file_logs));
  console.log('writing to ' + 'logs.json');
});
}

function logHelpAdd1() {
  var file_logs = fs.readFileSync('logs.json');
  var logs = JSON.parse(file_logs);
  var help = logs.help;
  var total = logs.total;
  logs.total = logs.total + 1;

  //change the value in the in-memory object
  logs.help = logs.help + 1;
  //Serialize as JSON and Write it to a file
  fs.writeFile('logs.json', JSON.stringify(file_logs), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file_logs));
  console.log('writing to ' + 'logs.json');
});
}

function logHelpAdd1() {
  var file_logs = fs.readFileSync('logs.json');
  var logs = JSON.parse(file_logs);
  var help = logs.help;
  var total = logs.total;
  logs.total = logs.total + 1;

  //change the value in the in-memory object
  logs.help = logs.help + 1;
  //Serialize as JSON and Write it to a file
  fs.writeFile('logs.json', JSON.stringify(file_logs), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file_logs));
  console.log('writing to ' + 'logs.json');
});
}

function logInviteAdd1() {
  var file_logs = fs.readFileSync('logs.json');
  var logs = JSON.parse(file_logs);
  var invite = logs.invite;
  var total = logs.total;
  logs.total = logs.total + 1;

  //change the value in the in-memory object
  logs.invite = logs.invite + 1;
  
  //Serialize as JSON and Write it to a file
  fs.writeFile('logs.json', JSON.stringify(file_logs), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file_logs));
  console.log('writing to ' + 'logs.json');
});
}

client.on('ready', () => 
{
  console.log('MooseBot init successful');
  console.log(`Currently serving ${client.guilds.size} servers`);
  console.log(`[${new Date()}]:MooseBot init successful`);
  
  client.user.setGame("&help | &about", "http://twitch.tv/monstercat");

  client.user.setAvatar("./avatar.jpg");
});

client.on('connect', () => 
{
  console.log(`[${new Date()}]: Connected`);
});

client.on('disconnect', () => 
{
  console.log(`[${new Date()}]: Disconnected`);
});


if(config.region === "EU") 
{
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


client.on('message', message => //commands
{ 
  if(message.author.bot) return; //checks if bot user (self) is author
  if(!message.content.startsWith(config.prefix)) return; //check if message starts with config.prefix --- use config.prefix when not testing on BETA

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //allows and creates arguments

  if(command === "ping") 
  {
    const ping = new Date();
    message.channel.sendMessage("Pong!").then((message) => {
    message.edit(`Pong! \`${message.createdTimestamp - message.createdTimestamp}ms\``);
    });
    logPingAdd1();
  } else

  if(command === "about") 
  {
    message.channel.sendMessage("```MooseBot is a Discord Bot created by Moosecoop, a gamer, programmer, student and Discord enthusiast```");
    logAboutAdd1();
  } else

  if(command === "help") 
  {
    message.author.sendMessage(`${fs.readFile('help.txt')}`);
    logHelpAdd1();
  } else

  if(command === "msmsg") 
  {
      if(message.author.id == config.ownerID){
        var message = command.splice(1).join(' ');
        client.Guilds.forEach((guild) => {
        guild.generalChannel.sendMessage(message);
        }) 
      }

  } else 
  
  if(command === "status") 
  {
    const serverCount = client.guilds.size;
    message.channel.sendMessage(`**${client.user.username}** \n Servers: **${serverCount}**\n Uptime: **uptime not yet available**`);   
  }
//other events

client.on('guildMemberAdd', member => 
{
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome **${member.user.username}** to **${member.guild}**!`);
});

client.on('guildCreate', member => 
{
  console.log("guildcreate funcionality is not yet complete! Please check back later");
  guild.defaultChannel.sendMessage(`**${client.username}** has joined **${guild.name}**! Type \`${config.prefix}help\` for help`);
});

client.on('guildDelete', guild => 
{
  console.log(`[${new Date()}]: Left ${guild.name}`);
});

client.on('guildMemberRemove', member => 
{
  let guild = member.guild;
  guild.channel.defaultChannel.sendMessage(`**${member.user.username}*** has left`);
});

client.on('guildMemberUpdate', (oldMember, newMember) =>
{
  console.log(ddiff(oldMember, newMember));
});

client.on('guildBanAdd', (guild, user) => 
{
  guild.defaultChannel.sendMessage(`**${user.username} has been banned!`);
  user.sendMessage(`NOTICE: You have been banned from **${guild.name}**`);
});

client.on('guildBanRemove', (guild, user) => 
{
  guild.defaultChannel.sendMessage(`**${user.username}** has been pardoned!`);
  user.sendMessage(`NOTICE: You have been unbanned from **${guild.name}**`);
});

client.on('channelCreate', channel => 
{
  console.log(`[${new Date()}]: Channel "${channel.name}" created in guild "${channel.guild}"`);
}
); 

<<<<<<< HEAD
}
)
=======
//client.on('guild');
*/
>>>>>>> c53de1291a3e3ee9e714992e700b7fd1d0aaa633
