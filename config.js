//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/sircylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/purbus.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/lt92j5.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27615045572";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session-ll.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhwTmVNVHlaeDY5RDRJRmZmRDl4Wi95eFZVQnlKQUs1YVRRSVhMZ0prbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamx2WE8wVEtDSTNMTjNSVkcrQUhDbzAzOEZXRktxVmU4QkJkR2xjblhnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTFFPRFlrbFlvTzVNdGlMZFAyYWxxWFdZNWw2TkJKUjlQeEVKMkZ0TUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTGt1R3NwWXdCVzYybmR6T0tIOXMyNXkwL2JIQzViZHZLZk4wQ3g4eUhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIS1NvelMzYVJ5R3VseG1FSktxS21ETHBTUnZhcDZZaDBuOGRBU3F1R0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxNb3lEOFdqa1diS24yd0Ztb01PaFZ6OG5rejZFay80TGE4SXJJY2RXajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZ5aXNUNHVzWUt0eUxlZCtVSGlKUjZ5a0czbllib1BsUjNnamtzTVlGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjRXV3ZQTHhGZnp3VktWU01SRTlXTXFQRnZBd1JzWG5venhPZng5eERnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFtWHVsNGIwc1Y1YXpicUZuWHVaUHhpTDNwM2dTc1Bhdjd3N1VJVmUwR05NVS9xT1dVbzAxeXphZ3E2Y0U0WDBkMjFOUzdYdUxES0p4Y3RTT1ZzUWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IktuUXQ1emRZNnRBbURIWWNkcDVWUHhrVnBCTTlmZ3F1ZXVVRWEvSUp3Mk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFyUEJzUVFIUWV5Q2JqMFdLUkE0TXciLCJwaG9uZUlkIjoiNWZkNmJkODctYTJkMS00YzExLWI1YWQtNmNkZjMyMDYzNmNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNqTHlvc08yUGNKRGxGem9EaUdaQjhMZE0rRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWXZZOFh2bm9Kb2hzZkFlK3dKMDBaMWFEbjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFRWUzdHMjMiLCJtZSI6eyJpZCI6IjI3ODM1MDM5NzI1OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InRob3VnaHQgcHN5Y2hvbG9neSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJQbktFRUVLSGl0TDhHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNHpieDU4a3ZsZ1QrUS92MVA1OXFQNVhEME5Vd2p2MGdNWlZuTU5jTCtCRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYlhKUXloUUpCbjJTY1dQc3dscmd3WFptYlBCZXBPRDYwY044U0QyYm1oMXhPZG9kZXc5VlFHeHM4SU5QOW1GYWFOS09vNkRvVGNad0crRnhPRXBVREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlhwQVVRTVQvYTk4bmFIUFJlMWlTQzQ0dy9nSC9QbXJING9KWnJaQUZvbDNDVzYraUpQOHovUmxoekc0MGhHSzF3TStQMDJmbmlsR0NQTFN4U1dmdGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc4MzUwMzk3MjU6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZU0yOGVmSkw1WUUva1A3OVQrZmFqK1Z3OURWTUk3OUlER1ZaekRYQy9nUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzU5Nzg3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOUU8ifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "sircylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
