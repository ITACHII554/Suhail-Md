const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13156132504";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_21_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRblpnSzdrQ1B5dzdwNi9Xb3JwRjMreE42TVUvU2NEVUdZNHBVUXR3dEFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEzMTU2MTMyNTA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MTk0ODY3Q0IxRTlFOEY2NzA2OUU0RTg3Mzc0QTdFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyMjI4OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMzE1NjEzMjUwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTUxMkJENUQwQ0Q2QzhEODE0MUFCNEMxQ0M3RTk2MTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MjIyODk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTMxNTYxMzI1MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3QUI4NjIxQTgyRjg1MzlBMERERjA3MDg4MzRBM0E0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzIyMjkwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEzMTU2MTMyNTA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDVDMkQyRDgxQjBDMDkxNEY2RjUzODkxQkFGNDA3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyMjI5MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLU5sWXpZRnlSazYtUEhObTVXbmttQVwiLFxuICBcInBob25lSWRcIjogXCI4Mzc2MjIwMy1mMzkxLTQyZDktYTllYi0yY2E5YzZjNmNlOWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICA5OSxcbiAgICAgIDE3OCxcbiAgICAgIDE1MSxcbiAgICAgIDIxNyxcbiAgICAgIDE0NyxcbiAgICAgIDgxLFxuICAgICAgMjMsXG4gICAgICA3OCxcbiAgICAgIDg3LFxuICAgICAgMTksXG4gICAgICAyNTUsXG4gICAgICAyMzIsXG4gICAgICAyNDIsXG4gICAgICAxNzQsXG4gICAgICA0MyxcbiAgICAgIDE0OCxcbiAgICAgIDU1LFxuICAgICAgMTkwLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyMzksXG4gICAgICA1NyxcbiAgICAgIDEzNSxcbiAgICAgIDEyNixcbiAgICAgIDEwMSxcbiAgICAgIDE5MCxcbiAgICAgIDUsXG4gICAgICAxOSxcbiAgICAgIDExMSxcbiAgICAgIDE0NyxcbiAgICAgIDIzNixcbiAgICAgIDE3OCxcbiAgICAgIDg5LFxuICAgICAgMTE0LFxuICAgICAgMjM0LFxuICAgICAgMjksXG4gICAgICAyMTYsXG4gICAgICAxMjQsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOelptcU1GRU9uNzZySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZqanU5bWx4V3owWmxERkxFZStOdjZBR1VsZGZrY0lCenYxL0t1UzV3d0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYm1wU1VLOFp0L3lVZFkxZnAyRUlaNm9HUzhjejh5clgvV29remFIdUdCeTZnNEZyVFBYelhRODRid0NlbFJIdjB4RUI2M3hIUENBRkxwaGY1YThBREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFdKdXgzK09QMHByeU5sTDdmUGdzVkxtVUdkRnZhcFd0SE1tenJTcmZwd3luSnBEMEZDaFZPZmNsWEQ0Uk1OSlpBL3NRdEswbjRuamlFbnh6L2ZBQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMzE1NjEzMjUwNDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg0NTEzOTI2MzkwNjM6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLmgrLJquG0m+G0p+G0hMqcyarjip1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEzMTU2MTMyNTA0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyMjI4OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUkpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSSi5qc29uIjogIntcImtleURhdGFcIjpcImQzL1Q1ZWpqdkRiNkpqZWFFYVBRMnloZFdlYjdUUWV0Wm1Ia251OXJPWDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNjAxNTA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
