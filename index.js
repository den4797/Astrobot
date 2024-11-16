const TelegramApi = require('node-telegram-bot-api');
const { formMessageOptions } = require('./options');

const token = '7832945479:AAHnrO8h6bDqyG3aUlACJJw7Yd-rqPWGAlI';

const bot = new TelegramApi(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Hello'},
        {command: '/info', description: 'info'},
        {command: '/end', description: 'bye'},
    ]);

    bot.on('message', async (msg) => {
        const sendMessage = (message, form) => bot.sendMessage(chatId, message, form);
        const sendSticker = (link) => bot.sendMessage(chatId, link);

        const text = msg.text;
        const firstName = msg.from.first_name;
        const chatId = msg.chat.id;

        switch (text) {
            case '/start':
                await sendSticker('https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/9.webp');
                await sendMessage(`Привет ${firstName}!`, formMessageOptions);
                break;
            case '/info':
                await sendMessage(`info`);
                break;
            case '/end':
                await sendMessage(`Пока ${firstName}!`);
                break;
            default:
                return sendMessage(`Я тебя не понимаю!`);
        }
        console.log(msg);
    });

    bot.on('callback_query', async (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        await bot.sendMessage(chatId, `ты выбрал ${data}`)
        console.log(msg);
    });
};

start();
