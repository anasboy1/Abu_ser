const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'heroko', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
๐ สแดสแดแดแด แดแดแดแดแดษดแดs๐
โโโโโโโโโโโโโโโโ
โฃ๐พโ๐ สแดsแดแดสแด
โฃ๐พโ๐ sสแดแดแดแดแดกษด
โฃ๐พโ๐ sแดแดแด แดส
โฃ๐พโ๐ ษขแดแดแด แดส
โฃ๐พโ๐ แดสสแด แดส
โฃ๐พโ๐ แดแดแดแดแดแด
โฃ๐พโ๐ แดแดแดแดแดแด ษดแดแดก
โโโโโโโโโโโโโโโโ
`}) 

}));
