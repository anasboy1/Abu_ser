const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'mp3 downlod', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
ðº á´á´3 á´á´á´á´á´É´á´sðº
ââââââââââââââââ
â£ð¾âðº á´á´3
â£ð¾âðº sá´Éªá´á´á´Ê
â£ð¾âðº á´Êá´á´á´
â£ð¾âðº Êá´á´ á´Êá´á´
â£ð¾âðº Êá´ss
â£ð¾âðº á´Éªá´á´Ê
â£ð¾âðº Êá´á´¡
â£ð¾âðº á´á´s
â£ð¾âðº á´É´á´ á´Éªá´á´
â£ð¾âðº Êá´á´á´á´ á´ÊÉ¢
â£ð¾âðº á´á´á´á´
â£ð¾âðº á´á´á´
â£ð¾âðº á´Êá´
â£ð¾âðº á´Êá´É¢ÉªÉ´
â£ð¾âðº á´Êá´É¢ÉªÉ´ ÊÉªsá´
â£ð¾âðº Êá´á´á´á´ á´
â£ð¾âðº ÒÉªÊá´á´Ê
â£ð¾âðº á´Éªá´
â£ð¾âðº ÊÊá´á´á´
â£ð¾âðº á´É´ÊÊá´á´á´
â£ð¾âðº á´¡Êá´Éªs
â£ð¾âðº á´ÉªÉ´É¢
â£ð¾âðº á´á´É´á´
â£ð¾âðº Êá´Êá´
â£ð¾âðº ÉªÉ´Òá´
ââââââââââââââââ
`}) 

}));
