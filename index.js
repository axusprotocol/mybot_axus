const TelegramBot = require('node-telegram-bot-api');

// ВСТАВЬ СЮДА СВОЙ ТОКЕН от BotFather
const token = '7845796711:AAFovYHijxboQL--RATshNrzpNaaiWzijnY';

const bot = new TelegramBot(token, { polling: true });

// Простейшая база (в памяти)
const users = new Set();

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim();

  // Сохраняем пользователя
  users.add(chatId);

  // Простой ответ
  if (text === '/start') {
    bot.sendMessage(chatId, 'Добро пожаловать! Ваш Telegram ID сохранён.');
  } else {
    bot.sendMessage(chatId, `Вы написали: ${text}`);
  }

  // Здесь ты можешь в будущем передавать chatId на сайт, Firebase и т.д.
});