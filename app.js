const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const token = require("./token.json"); //loads token.json
const region = require("./region.json"); //loads region.json

client.on('ready', () => {
  console.log('MooseBot init successful');
  console.log(`Currently serving ${bot.guilds.size} servers`);
  client.setGame(`Fast Response Times for ${bot.guilds.size}`, "http://www.twitch.tv/monstercat");
  console.log(`[${new Date()}]:MooseBot init successful`);
});
client.on('message', message => { //commands
  if(message.author.bot) return; //checks if bot user (self) is author
  if(!message.content.startsWith(config.prefix)) return; //check if message starts with config.prefix


  let command = message.content.split(" ")[0]; //removes config.prefix from message to make command creation if statements much easier to create
  command = command.slice(config.prefix.length); //^^^

  let args = message.content.split(" ").slice(1); //allows and creates arguments

  if (command === "sum") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(total)
  } else  //adds any numbers stated after $add together and sends message of answer

  if(command === "say") {
        message.channel.sendMessage("${message.user} says: " + args.join(" "));
    } else //sends any text after "say " to channel

  if(command === "ping") { //returns "pong"
        message.channel.sendMessage(`Pong! \`${Date.now - message.createdTimeStamp} ms\``);
    } else

  if(command === "about") {
        message.channel.sendMessage("MooseBot is a Discord Bot created by Moosecoop, a gamer, programmer, student and Discord enthusiast");
    } else  //sends about info to channel

  if(command === "purge") { //purges ammount stated after "purge " of messages
        message.user.sendMessage("You Do Not Have The Required Permissions to do this!");
        message.channel.sendMessage("This feature is not yet complete! Please check back later!");
          message.channel.sendMessage("This feature is not yet complete! Please check back later!");
      } else
      if (command === "help") {
      message.channel.sendMessage("this feature is not yet finished! sorry");
    }
  });



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
})
