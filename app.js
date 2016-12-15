const Discord = require('discord.js'); //loads discord.js package
const client = new Discord.Client(); //creates client

const config = require("./config.json"); //loads config.json
const help = require("./commandhelp.json"); //loads commandhelp.json

client.on('ready', () => {
  console.log('MooseBot init successful');
  console.log("ya haven`t screwed up yet!")
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
        message.channel.sendMessage('pong');
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
    } //says any text stated after $say //kicks user mentioned after "kick "
  });

client.login(config.token); //connects to MooseBot NA Node bot user accnt

client.on('GuildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to ${member.guild}`);
}); //welcomes new guild members

client.on('guildCreate',  guild => {
  console.log((`${client.user} Has Joined ${guild.name}`));
}); //bot user (self) guild join accouncment

/*client.on("presenceUpdate", (oldMember, newMember) => { //disable this code
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Overwatch");
  if(!playRole) return;

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  }
});
*/
