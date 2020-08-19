const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = ""
const developers = ""




client.on("ready", () => {
   btrolie.user.setActivity("حالت البوت هون ")


});


 

client.on('message', message => {
    var prefix = "+help";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply(**يُرجي كتابه النص**');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("" + data + "")
           })
}
});





client.login("NzMxODQzMzQ0ODgzNTE1NDUy.Xwr8Og.rSJqECHDMmbPnlhegGYSGwO-1A8");
