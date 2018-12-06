const TelegramBot = require('node-telegram-bot-api')
const os = require ('os')

const bot = new TelegramBot ('692265285:AAGnO1L0bRyTjjFDCr1wWEaQ2sE2tcxQ730', {polling: true})

bot.on('message', msg => {
	
	bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
	
})