const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtTVnptV1FJQVBWS28xQ1ZRcUg0dG5xb1dDYVc0S2pmcmVvZTRVWU1XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGx3dW5HUjZOQ29ZOFVBNG9DTmtkbkdBbjRDVVBXanhLRDRXM0hBMGhTYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1NwR01melR2N2cyYUlGL3pvcFQ0ZTF4Tlk2cDUyODdPWE9kV0c5L21NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkck9ta0l6RHI2WTEzb2hqK0k2L0lXcW9vRmhiQVh4TGpXK0RyUU9DSmhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBb29FZGkydUVtc2R1RkJ0cXI3RTVTODh5OFVaWGdyKzdmRXJPZFBPa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik40blRTbXhXemhlazJOTlhqcW5XK1lwVlZvdlR4TFY3Q1NYTkRmS1NIejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUV1bGVBVlZsNmM0b09xUHNEQ1N4YTcxS1cxWVlYcHlqWmh6cWlaVDNFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjAvd0czb2pNLzhFTVBOcEpFTDF4U0JHMUt2c0g2bXlNeVlKZzFLZ2wxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhEaDhRUnliNDdaeUF0YUg2bWdpMkZZd1pYZGU0VXJPTHNjVFhIRFB2dkppdUlvWENlaDgzNmxKbmFlKzV0QS8yVk5DMVJLR3pEOEc0Q2J3SUZDc2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJZK0FSZnNpZFUzOXdYVnh2V3RuQ1FPTUF4aXZoQThlaGlibjY2ajl3dmFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiMjc4MTgyMzIyNjk6OTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmFsbGFzIiwibGlkIjoiMTc0NTkxMDkxNjc1MzI4OjkwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStkODBFUW1PL2R4QVlZRmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoianRoV2c2ZFo1c09XYk0xYk1QRTdmQmVWWXpqdUNsbC9FQ0Q4U28wS2pobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibjEzSzgwS3RmL3UyUG9CNGJLbDdaeUprOFFUeFpsM3g5N2hRSFJTSlRrc3ROMHlJekg4aEx3Q0pHYStOWjVlS3lDVXJrZzZEelpJVmd4SG44ek13Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhlMDh1OHRmT0dDbHlZM1JoWGtHbW9SQkwxZ2k2OGJrWGFRQ29adWNVSHI3U1dHMnRDemtHM3pFZ3JFQXZBRkl3ZSt6ME0vdDEvQmlZSi90Rk5uNmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc4MTgyMzIyNjk6OTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTdZVm9PbldlYkRsbXpOV3pEeE8zd1hsV000N2dwWmZ4QWcvRXFOQ280YSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NzU3MDIwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWlHIn0=",
  START_IMG: process.env.START_IMG || "https://files.catbox.moe/zdf59d.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BALLAS𝗑ᴾᴿᴼ*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zdf59d.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "BALLAS𝗑ᴾᴿᴼ",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27767494368",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ BALLAS𝗑ᴾᴿᴼ*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/zdf59d.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *BALLAS𝗑ᴾᴿᴼ*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "27767494368",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_THIS BOT DOES NOT ACCEPT ANY CALLS, PLEASE CONTACT OWNER_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
