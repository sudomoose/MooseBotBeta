const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const token = require("./token.json"); //loads token.json
const region = require("./region.json"); //loads region.json
const ddiff = require('return-deep-diff');
const storage = require('node-persist');
const prefix = config.prefix;

storage.initSync();
storage.setItem('ping',0);
storage.setItem('about',0);
storage.setItem('help',0);
storage.setItem('status',0);
storage.setItem('msmsg',0);

function commLogs(commandRun) {
  var execs = storage.getItem(commandRun);
  var newExecs = execs + 1;
  storage.setItem(commandRun, newExecs);
  var commandRun = commandRun + 1;
}



client.on('ready', () => {
  console.log('MooseBot init successful');
  console.log(`Currently serving ${client.guilds.size} servers`);
  console.log(`[${new Date()}]:MooseBot init successful`);
  client.user.setGame("Merry Christmas | &help", "http://twitch.tv/monstercat");
  client.user.setAvatar("./avatar.png");
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
    const ping = Date.now();
    message.channel.sendMessage("Ping?")
    .then((message) => {
    const Pong = message.createdTimestamp
    const pingms = Pong - ping;
    message.edit(`Pong! \`${pingms}ms\``);
    commLogs('ping');
  });
  } else

  if(command === "about") {
        message.channel.sendMessage("MooseBot is a Discord Bot created by Moosecoop, a gamer, programmer, student and Discord enthusiast");
        commLogs('about');
    } else

  if(command === "help") {
      message.author.sendMessage(`COMMANDS: \n ${prefix}ping - returns the ping in milliseconds\n ${prefix}about - returns info about MooseBot and it's creator \n ${prefix}invite - returns link to invite MooseBot to your server`);
      commLogs('help');
    } else

  if(command === "msmsg") {
      if(message.author.id == config.ownerID){
        var message = command.splice(1).join(' ');
        client.Guilds.forEach((guild) => {
        guild.generalChannel.sendMessage(message);
        }) 
      }
      commLogs('msmsg');
  } else 
  
  if(command === "status") {
    const serverCount = client.guilds.size;
    //const uptime = client.uptime.toHHMMSS();
    console.log(`**${client.user.username}** \n Servers: **${serverCount}**\n`);
    commLogs(status);
} /*else 
  
  if(command === "commstats") {
    var pingU = storage.getItem('ping').valueOf;
    var aboutU = storage.getItem('about').valueOf;
    var helpU = storage.getItem('help').valueOf;
    var statusU = storage.getItem('status').valueOf;
    message.channel.sendMessage(`Command Usage: \n Ping: ${pingU} \n About: ${aboutU} \n Help: ${helpU} \n Status: ${statusU}`);
  }
}); */


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome **${member.user.username}** to **${member.guild}**!`);
});

client.on('guildCreate', member => {
  console.log("guildcreate funcionality is not yet complete! Please check back later");
  guild.defaultChannel.sendMessage(`**${client.username}** has joined **${guild.name}**! Type \`${config.prefix}help\` for help`);
});

client.on('guildDelete', guild => {
  console.log(`[${new Date()}]: Left ${guild.name}`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.channel.defaultChannel.sendMessage(`**${member.user.username}*** has left`);
});

client.on('guildMemberUpdate', (oldMember, newMember) =>{
  console.log(ddiff(oldMember, newMember));
});

client.on('guildBanAdd', (guild, user) => {
  guild.defaultChannel.sendMessage(`**${user.username} has been banned!`);
  user.sendMessage(`NOTICE: You have been banned from **${guild.name}**`);
});

client.on('guildBanRemove', (guild, user) => {
  guild.defaultChannel.sendMessage(`**${user.username}** has been pardoned!`);
  user.sendMessage(`NOTICE: You have been unbanned from **${guild.name}**`);
});

client.on('channelCreate', channel => {
  console.log(`[${new Date()}]: Channel "${channel.name}" created in guild "${channel.guild}"`);
}); 

})


/*
//client.on('', => {});

//client.on('guild');
*/