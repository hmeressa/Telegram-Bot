const TelegramBot = require('node-telegram-bot-api');
const { Upload, Register, Help, Command } = require('./app/index');
const Setting = require('./app/setting/Setting');
const { Menu } = require('./app/setting');
require('dotenv').config();

const App = async () => {
    const token = process.env.TELEGRAM_TOKEN;
    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;

        switch (messageText) {
            case Command().START:
                bot.sendMessage(chatId, 'Welcome to the bot!', {
                    reply_markup: {
                        keyboard: [
                            ['Menu', "Setting"],
                            ['Help', 'Register'],
                            ['Commands', 'Upload'],
                        ],
                        resize_keyboard: true
                    }
                });
                break;
            case Command().HELP:
                await Help(bot, chatId)
                break;
            case Command().REGISTER:
                await Register(bot, chatId);
                break;
            case Command().UPLOAD:
                await Upload(bot, chatId);
                break;
            case Command().SETTING:
                await Setting(bot)
                break;
            default:
                bot.sendMessage(chatId, 'Command not recognized. Type /help for a list of available commands.', {
                    reply_markup: {
                        keyboard: [
                            ['Setting'],
                            ['Help', 'Menu'],
                            ['Upload', 'Register'],
                        ],
                        resize_keyboard: true
                    }
                });
        }
    });
};


module.exports = App;
