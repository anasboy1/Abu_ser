const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'downlod', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
ð¥ á´á´á´¡É´Êá´á´ á´á´á´á´á´É´á´sð¥
ââââââââââââââââ
â£ð¾âð¥ á´ Éªá´á´á´
â£ð¾âð¥ sá´É´É¢
â£ð¾âð¥ á´ Éªá´á´á´
â£ð¾âð¥ ÉªÉ´sá´á´
â£ð¾âð¥ sá´á´ÊÊ
â£ð¾âð¥ ÒÊ
â£ð¾âð¥ Éªá´É¢
â£ð¾âð¥ á´¡Éªá´Éª
ââââââââââââââââ
`}) 

}));
