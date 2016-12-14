if(!message.content.startsWith(prefix)) return;
if (message.content.startsWith(prefix + "$broadcast"))  //must use &$broadcast
            if(message.author == user.id '199621462586425346')
            {
                var message = command.splice("$&broadcast ").join(' '); //removes &$broadcast from the message
                bot.Guilds.forEach((guild) => {
                  guild.generalChannel.sendMessage(message);
                };
            );
            }else{
              message.channel.sendMessage("You don't have permission");
            }








            if(message.content.startsWith(prefix + "joke"))
            function sendRandomJoke() {
              var jokes = [ "How does NASA throw a party? \n They planet", "Jimmy  was wondering why the baseball was getting bigger \n And then it hit him", "Did you hear the story about the dog who ran 5 miles to fetch a stick? I didn't believe it at first because... \n it was too farfetched" ];
              var jokeToSendNum = Math.random()
              var jokeToSend = jokes[jokeToSendNum];
              message.channel.sendMessage(jokeToSend);
            }
                  sendRandomJoke();

              });





              let command = message.content.split(" ")[0]
              command = command.slice(prefix.length);
              console.log(command);
