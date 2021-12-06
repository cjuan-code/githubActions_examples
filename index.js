const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TG_TOKEN;
const chatId = process.env.TG_CHAT_ID;
const person = process.env.PERSON;


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

async function sendTGMessage() {

  await bot.sendMessage(chatId, 'Workflow ejecutado correctamente tras el último commit. Saludos '+ person + '.');
  console.log('Mensaje enviado');

  process.exit(0);
}

sendTGMessage();