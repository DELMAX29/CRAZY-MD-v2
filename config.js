const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '236717672068'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || "237620114013"
global.devs = "237620114013";
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'






module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,'k29promax'
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5udlMzaUdXK2ZkOHZYc1RuTTl1YjRTM0tBaU93VTFCaDgxTm5qenRtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1d0V3hiS2taZDRxZExMSnJHWHFOc2VyN2FoYmdTSVFYcHdZT0JZOEtWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q1Q5SGpsN21zOXJOYW9tLzVZUzI2dTU4c3dURFlUcHl3U0VOWWF4VlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnc1hZNUd3SU5zRGJYdzg5Z09xQjV1K0RxSER2SzFxS0pBREltbHFEY1JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JdnhnVzVlcGlnK1ZBSFFCQ09DUTBacDFoV0Z6ZHRPREVOL1d3V1J4MEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVJRmcwelpWbHUyUkNDTDZBOE0xZDd6d2paNjVoNTZFSEVqcEFKT3FQVms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hwek1CWUVCcGUzNEFZVDQ1aHBTTmRTUlJPTE1xSDFaR0pnbllDT0kwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3o3cGdYZmhnRVhTR3JvSWhYRjFqVnBvMzkwRW9XYUFjZ0ZsSTdJVnNYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOQ2pnUjFqWS9ZUDY5WU1TVHI5TGpXaHFIU0JEZGI1TnBtbnNxK2tkTUJFbEdIMkNBc3BRdW8rNGhNa3dVcHVIMUx5Y0NrNWgycmpxVGhJeFhHNEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJ3MDJMVS95Vm9Oblk2U0YwVTZSSXNGbGkwMm11M1NHSUtMY21kUlZvUHk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGa1lqaGZZOFRGMmNLZXdYVEFrd25nIiwicGhvbmVJZCI6IjM4ZTdjODBhLTVlOGEtNGRlMy05ODM0LWFiZjQ1NGU2MDQ3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVjQwcy9DUzFuQjdjUk1QK0tzVjhWVkhlWDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnJDRG9NcVJQRkJBQ09Panl0VG9xamgxZnRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNCWURLN0ZZIiwibWUiOnsiaWQiOiIyNjM3ODczODI4NTI6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSzI5cHJvbWF4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZnA4dk1GRUxIUzJiVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZK2JoYytGZHhpdFRyK0ltVURRM3NDQmhONllSL2tUaUxUdVg5TlBZYVQwPSIsImFjY291bnRTaWduYXR1cmUiOiJ0SjNzdzJlMjIreDVmd0xGSzFpdW10NkJOU1FDM3NDM0l3N0wvRHVNK2FJNFBOVTVOT0l5NkhHMHdFdy8xd2hhc090a2tCbTRkNmpSVWpQbzNPZk1CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWUp0ZTFYaTRZYmI5QjVJSFdIamNIOEs1TWdoYm1VS292TDRQeUZRTHhiTkNNSVZ3RE9ZSmxxbXdLT2NHNWpqcTRQamhzQzJDeWp5NTNSaFc3RFpZQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODczODI4NTI6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1BtNFhQaFhjWXJVNi9pSmxBME43QWdZVGVtRWY1RTRpMDdsL1RUMkdrOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIzMDUyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCa1gifQ=='
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Crazy-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  GENIUS_API_KEY:  process.env.GENIUS_API_KEY === undefined ? '6vdum57Wo2tsKxaEGKJcvNHeSo1sd9oNTcPpDZD8E9v3mUh0jArn5TSvuvgmZLIs' : process.env.GENIUS_API_KEY,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
