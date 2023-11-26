const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const {TOKEN} = process.env
const bot = new TelegramBot(TOKEN, {polling: true});
bot.on('message', (msg)=>{
    console.log(msg.text, msg.from.id)
    let {id, first_name, last_name} = msg.from
    if(msg.text === '/start'){
        bot.sendMessage(id, 'Hello, I am a bot, send me a message to start!')
    }
    else if(msg.text === '/help'){
        bot.sendMessage(id, 'Send me a message to start!')
    }
    else{
        bot.sendMessage(id, `Welcome ${first_name} ${last_name}`)
    }
})