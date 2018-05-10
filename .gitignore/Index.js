const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const storeadapter = new FileSync('store.json');
const db = low(adapter);
const storedb = low(storeadapter);
const  CLEAR_MESSAGES  =  ' ! clearMessages ';
const ytdl = require('ytdl-core');





db.defaults({ histoires: [], xp: []}).write()

var bot = new Discord.Client();
var prefix = ("S!");
var randnum = 0;




var storynumber = db.get('histoires').map('story_value').value();
bot.on('guildMemberAdd', member => {
member.createDM().then(channel => {
return channel.send('Bienvenue sur mon serveur, passe un bon moment en notre compagnie ! Si tu rencontres un bug ou si tu aurais des suggestions hésite pas à nous en faire part dans le channel #suggestions ! Pense à lire le règlement et a nous donner un avis sur le serveur ! Bonne discussion ! https://imgur.com/tOIo7yG ')
}).catch(console.error)
// On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})
   
    bot.on("message", message => {

        bot.on("guildMemberAdd", member => {
            member.guild.channels.find("name", "—👋•›bienvenue-welcome").send(`Bienvenue à toi ${member} passe un bon moment en notre compagnie ! Nous sommes désormais ${memberCount} !`)
        })

    bot.on("guildMemberRemove", member => {
        member.guild.channels.find("name", "—👋•›bienvenue-welcome").send(`${member} a quitter le serveur, nous sommes désormais ${memberCount} !`)
    })

    bot.on("guildMemberAdd", member => {
        var role = memer.roles.find('name', '|🎮]๑❤JOUEUR❤๑[🎮|');
        member.addRole(role)
    })
    
    })



bot.on('ready', () => {
   
    bot.on('message', message => {
      if (message.content === prefix +  "clear") {
  
        // Check the following permissions before deleting messages:
        //    1. Check if the user has enough permissions
        //    2. Check if I have the permission to execute the command
  
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          return;
        } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          return;
        }
  
        // Only delete messages if the channel type is TextChannel
        // DO NOT delete messages in DM Channel or Group DM Channel
        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length; // number of messages deleted
  
              // Logging the number of messages deleted on both the channel and console.
              message.channel.sendMessage("Suppression des messages ok : Total des messages suprrimé : "+messagesDeleted);
              console.log('Suppression des messages ok : Total des messages suprrimé : '+messagesDeleted)
            })
            .catch(err => {
              console.log('Error while doing Bulk Delete');
              console.log(err);
            });
        }
      }
    });
  });
 

  

bot.on('ready', () => {
bot.user.setPresence({ game: { name: '[S!help] Sotix Bot !'} });
console.log("Bot prêt Chef !");
});

bot.login('NDQzMTEwNzUxOTUxOTEyOTgx.DdWq3Q.bE1h1ANM5ILimkTbQjHSUsLgZ_0');

bot.on('message', message => {

})

 

bot.on('message', message => {



    var msgauthor = message.author.id;

if(message.author.bot)return;

if (!db.get("xp").find({user: msgauthor}).value()){
db.get("xp").push({user: msgauthor, xp: 1}).write();
}else{
var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
console.log(userxpdb);
var userxp = Object.values(userxpdb)
console.log(userxp);
console.log(`Nombre d'xp de ${message.author.username} : ${userxp[1]}`)

db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
}



    if (!message.content.startsWith(prefix)) return;
var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()){


 case "newstory":
 var value = message.content.substr(10);
 var author = message.author.toString();
 var number = db.get('histoires').map('id').value();

 var storynumber = db.get('histoires').map('story_value').value();
 //var storyid = Mathnumber + 1;
 console.log(value);
 message.reply("Ajout de l'histoire a la base de données")
 
 db.get('histoires') 
 .push({story_value: value, story_author: author})
 .write();

 break;

    
 case "tellstory" :

 story_random();
 console.log(randnum);

var story = db.get(`histoires[${randnum}].story_value`).toString().value();
 var author_story = db.get(`histoires[${randnum}].story_author`).toString().value();
 console.log(story);

 message.channel.send(`Voici l'histoire : ${story} (Histoire de ${author_story} ))`)

break;

    

 case "test":
 message.reply("test");
 console.log("Commande test demandée !");
 break;

 case "ping":
 message.reply("pong");
 console.log("Commande Ping demandée !");
 break;

 case "bonjour":
 message.reply("Bonjour, ça va ?");
 console.log("Commande Bonjour demandée !");
 break;

case "modérateur":
message.reply("Voici le formulaire demandée : https://goo.gl/forms/jbj8Qec4IXiQSYdy1");
console.log("Commande Formulaire A demandée !")
break;

case "animateur":
message.reply("Voici le formulaire demandée : https://goo.gl/forms/ifuWaTFk8H3Xgrg13");
console.log("Commande Formulaire B demandée !")
break;

 case "coucou":
 message.reply("Hey, ça va ?");
 console.log("Commande Coucou demandée");
 break;

 case "au revoir":
 message.reply("Au revoir et à bientôt !");
 console.log("Commande Au revoir demandée !'");
 break;

 case "bonne nuit":
 message.reply("test");
 console.log("Commande Bonne Nuit demandée !");
 break;



    case "store":
     var store_embed = new Discord.RichEmbed()
     .setColor('#00FFD1')
     .setTitle("SotixBot", "Money utilisé : XP")
     .setDescription("Salut, ici tu trouveras des items et des badges a acheter !")
     .addField("Items:", "Burger de KFC [15XP][ID: item0001] Description: Un bon burger de chez KFC !")

     message.channel.send({embed: store_embed});


    break;
    
case "pingserver":
message.channel.sendMessage('Temps de latence avec le serveur :`' + `***${message.createdTimestamp - Date.now()}` + `ms***`);
break;

case "clearall":
if (message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.fetchMessages()
    .then(function(list){
        message.channel.bulkDelete(list);   
    }, function(err){message.channel.send("Erreur !")})}
    break;

    case "botinfo":
    var embedbot = new Discord.RichEmbed()
    .setTitle("Informations du Bot !")
    .addField("Description du bot :", "Je suis un bot multifonction présent H24, simple d'accès et d'utilisation !")
    .addField("Nombre de serveur dans lequel je suis :", bot.guilds.size)
    .addField("Crée par :", "[LL ZedRoff]#6104")
    .addField("Version du bot :", "1.4.1")
    .addField("Nom du serveur mère du bot", "Sotix")
    .addField("Lien du serveur de dév :", "https://discord.gg/WFB5cZw")
    .addField("Nombre de commande", "25 pour l'instant ! :D")
    .setFooter("Pour toute demande ou problème rencontrer contacté : LL ZedRoff#6104 !")
    .setColor("0x81DAF5")
    message.channel.sendEmbed(embedbot)
    break;

    case "8ball":
    let args = message.content.split(" ").slice(1);
    let tte = args.join(" ")
    if(!tte){
        return message.reply("Merci de poser une question :8ball:")};
    var replys = [
        "Oui",
        "Non",
        "Je ne sais pas",
        "Peut-être"
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var bembed = new Discord.RichEmbed()
    .setDescription(":8ball: 8ball")
    .addField("Question", tte)
    .addField("Réponse", reponse)
    message.channel.sendEmbed(bembed);
break;

case "ban":
   
    
if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")){
    message.reply("Tu n'as pas le droit de ban ! ;)")
}else{
    var memberban = message.mentions.users.first();
    console.log(memberban)
    console.log(message.guild.member(memberban)
    .bannable)
    if(!memberban){
        message.reply("L'utilisateur n'existe pas !");
        
    }else{
   if(!message.guild.member(memberban).bannable){
       message.reply("Utilisateur impossible à ban !");
   }else{
       message.guild.member(memberban).ban().then((member)=> {
       message.channel.send(`${member.displayName} a été Banni !`);
   }).catch(() => {
       message.channel.send("Ban Refusé !")
   })
    }
}
}
   break;


}

    if (message.content === prefix + "Qui es-tu ?"){
    message.reply("Je suis Sotix Bot, un BOT codée par LL ZedRoff, je suis là pour t'aider ! Fait S!help pour plus d'information !");
    console.log('Commande Qui es-tu ? demandée !');
    }
    if (message.content === prefix + "Bonne nuit"){
    message.reply("Bonne Nuit repose toi bien !");
    console.log('Commande Bonne nuit demandée !');
  
}
if (message.content === prefix + "Bienvenu"){
    message.reply("Bienvenu à toi nouveau membre ! :D Passe un agréable moment en notre compagnie !")
}

    
    if (message.content === prefix + "Au revoir"){
    message.reply("Au revoir et à bientôt !");
    console.log('Commande Au revoir demandée !');
    }

    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    var mutedrole = message.guild.roles.find("name", "Sotix-Mute");



if (command == "mute") { // creates the command mute
    if (!message.member.roles.some(r=>["Sotix Rôle Mod"].includes(r.name)) ) return message.reply("Vous n'avez pas les permissions pour faire cela !"); // if author has no perms
    var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
    if (!mutedmember) return message.reply("Mettez une mention valide !") // if there is no kickedmmeber var
    if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("Je ne peux pas mute cet utilisateur") // if memebr is an admin
    var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
    var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
    var mutereason = mutereason.join(" "); // joins the list kickreason into one line
    if (!mutereason) return message.reply("Mettez une raison !") // if no reason
    mutedmember.addRole(mutedrole) //if reason, kick
        .catch(error => message.reply(`Désolé ${message.author} je ne peux pas mute cet utilisateur car : ${error}`)); //if error, display error
    message.reply(`${mutedmember.user} a été mute par ${message.author} car: ${mutereason}`); // sends a message saying he was kicked
}

if (command == "unmute") { // creates the command unmute
    if (!message.member.roles.some(r=>["Sotix Rôle Mod"].includes(r.name)) ) return message.reply("Vous n'avez pas assez de permissions pour faire cela !"); // if author has no perms
    var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
    if (!unmutedmember) return message.reply("Mentionnez un utilisateur confirmé !") // if there is no kickedmmeber var
    unmutedmember.removeRole(mutedrole) //if reason, kick
        .catch(error => message.reply(`Désolé ${message.author} je ne peux pas mute cet utilisateur car : ${error}`)); //if error, display error
    message.reply(`${unmutedmember.user} a été mute par ${message.author}!`); // sends a message saying he was kicked
}



if (command == "kick") { // creates the command kick
    if (!message.member.roles.some(r=>["Sotix Rôle Mod"].includes(r.name)) ) return message.reply("Vous n'avez pas les permissions pour !"); // if author has no perms
    var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
    if (!kickedmember) return message.reply("Mentionnez un membre valide !") // if there is no kickedmmeber var
    if (!kickedmember.kickable) return message.reply("Je ne peux pas Kick cet utilisateur !") // if the member is unkickable
    var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
    var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
    var kickreason = kickreason.join(" "); // joins the list kickreason into one line
    if (!kickreason) return message.reply("Donner une raison pour Kick cet utilisateur !") // if no reason
    kickedmember.kick(kickreason) //if reason, kick
        .catch(error => message.reply(`Désolé @${message.author} Je ne peux pas Kick cet utilisateur ca car : ${error}`)); //if error, display error
    message.reply(`${kickedmember.user.username} a été Kick par ${message.author.username} car: ${kickreason}`); // sends a message saying he was kicked
}

    
    
    if (message.content === prefix + "xpstat"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
        .setColor('#00FFD1')
        .setTitle(`Total XP de ${message.author.username}`)
        .setDescription(`Voici tout vos xp : ${message.author.username} :`)
        .addField("XP sur ce serveur ! :", `${xpfinal[1]}XP`)
        .setFooter("XP utilisable en magasin qui est en dév et qui sortira dans la V2 du bot !")
        message.channel.send({embed: xp_embed}); 
        
    }
    if (message.content === prefix + "Staff"){
        var staff_embed = new Discord.RichEmbed()
        .setColor('00FFD1')
        .setTitle("Tout les membres du Staff du serveur Sotix !")
        .addField("Fondateurs", "Ezεч_ч et Shinoa Hīragi")
        .addField("Meneur", "LL ZedRoff")
        .addField("Administrateurs", "Lara Croft et Babou")
        .addField("Helpers", "LG17, PruZalinG_ et McDo")
        .addField("Modérateurs", "LS Metal et Sakura")
        .addField("Animateurs", "Enoch(Barbaru), MisterD et Papio")
        .setFooter("Tout ces membres font parti du Staff et donc doivent être respecter merci !")
        message.channel.send(staff_embed)
    }
    
    
        if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#00FFD1')
        .addField("Description du BOT : ", "BOT interractif qui vous réponds selon vos phrases ou vos mots ! BOT multifonction avec des fonctionnalité interressante et des phrases que vous pouvez ajouter via le channel #idées-SotixBot ! Ce BOT est le BOT du serveur coder par LL ZedRoff ! Amusé vous bien avec ce dernier !")
        .setDescription("Ne pas inclure dans la commande les [] ou les {} !")
        .addField("Commande help : ", "Le prefix du BOT est : S!. S!help : Le BOT affiche ses commandes !")
        .addField("Commande XP : ", "S!xpstat : Le bot vous montre votre nombre de XP !")
        .addField("Commande kick : ", "S!kick [user] {reason} : Pour kick un utilisateur, disponible uniquement pour le Staff du serveur !")
        .addField("Commande Ban : ", "S!ban [user] {reason} : Pour ban un utilisateur définitivement, disponible uniquement pour le Staff !")
        .addField("Commande clearall : ", "S!clearall : Purge tout les messages du channel sur lequel la commande a été utilisé !")
        .addField("Commande clear : ", "Purge 50 messages sur le channel sur lequel la commande a été utilisé !")
        .addField("Commande mute :", "S!mute [user] {reason} : Pour rendre muet un utilisateur !")
        .addField("Commande unmute : ", "Pour démute quelqu'un du serveur !")
        .addField("Commande Roll : ", "S!roll : Le bot pioche au hasard un chiffre entre 1 et 10 !")
        .addField("Commande 8ball : ", "S!8ball : Vous posez une question au bot et il vous répond !")
        .addField("Formulaire Staff : ", "S!modérateur : Commande afin d'avoir le formulaire pour entrer dans le Staff !")
        .addField("Formulaire Animateur : ", "S!animateur : Formulaire pour être recruté en tant qu'Animateur !")
        .addField("Commande Informations sur le serveur : ", "S!serverinfo : Commande pour avoir différentes informations sur le serveur !")
        .addField("Commande Informations sur le bot", "S!botinfo : Le bot vous montre ses informations !")
        .addField("Commande Informations sur le Staff", "S!Staff : Vous montre le personnel du serveur Discord !")
        .addField("Interraction", "S!bienvenu, S!ping, S!coucou, S!Bonne nuit, S!Qui es-tu ?, S!bonjour, S!Au revoir !")
        .addField("Attention : ", "Toute personne utilisant les commandes de modération en étant pas un membre du Staff se verra automatiquement ban par un membre du Staff ! Nous tennons a rappeller que ces commandes sont uniquement d'accès au Staff et non aux membres du serveur !")
        .setFooter("Amusé vous bien avec ce BOT !");
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du BOT :\n Tappez W!help pour afficher les commandes !");
        console.log("Commande Help demandée !")
    }


    if (message.content === prefix + "serverinfo"){
        var embed = new Discord.RichEmbed()
        .setDescription("Informations du serveur Discord !")
        .addField("Nom du serveur :", message.guild.name)
        .addField("Crée le :", message.guild.createdAt)
        .addField("Tu as rejoins le serveur le :", message.member.joinedAt)
        .addField("Utilisateurs total sur le serveur :", message.guild.memberCount)
        .setColor("0x0000FF")
        message.channel.sendEmbed(embed)
    }
    if (message.content.startsWith(prefix + "Sondage")) {
        if (message.author.id == "327074335238127616"){    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription("Sondage Sotix !")
        .addField(thingToEcho, "Répondre avec :white_check_mark: ou par :x:")
        .setColor("0xB40404")
        .setTimestamp()
    message.guild.channels.find("name", "—🌐•›sondages").sendEmbed(embed)
    .then(function (message) {
        message.react("V")
        message.react("X")
    }).catch(function() {
    });
    }else{
        return message.reply("Tu n'as pas la permission !")
    }
    
  

  
 
 
            }
                  
    if (message.content === prefix + "roll"){
        random();
        
        if (randnum == 1){
        message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30755.png")
        console.log(randnum);
        }
        if (randnum == 2){
        message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30675.png");
        console.log(randnum);
        }
        if (randnum == 3){
        message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30799.png");
        console.log(randnum);
        }
        if (randnum == 4){
            message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30689.png")
            console.log(randnum);
            }
            if (randnum == 5){
            message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30670.png");
            console.log(randnum);
            }
            if (randnum == 6){
            message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30791.png");
            console.log(randnum);
            }
            if (randnum == 7){
                message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30800.png")
                console.log(randnum);
                }
                if (randnum == 8){
                message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30762.png");
                console.log(randnum);
                }
                if (randnum == 9){
                message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30707.png");
                console.log(randnum);
                }
                if (randnum == 10){
                    message.reply("```Nombre Random Obtenu :``` http://www.icone-png.com/png/31/30733.png")
    
                
                
                }    


function story_random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(storynumber);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
    }

function random(min, max) {
min = Math.ceil(0);
max = Math.floor(10);
randnum = Math.floor(Math.random() * (max - min +1) + min);
}
}});
















          
