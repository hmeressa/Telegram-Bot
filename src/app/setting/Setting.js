const { Command, Language, Theme, Username, Password, Menu } = require('../setting')
require('dotenv').config();

const Setting = async (bot) => {
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;
        Menu(bot, chatId);
        switch (messageText) {

            // case Command().MENU:
            //     await Menu(bot, chatId);
            //     break;

            case await Command().LANGUAGE:
                await Language(bot, chatId);
                break;

            case Command().THEME:
                await Theme(bot, chatId)
                break;

            case Command().USERNAME:
                await Username(bot, chatId);
                break;

            case Command().PASSWORD:
                await Password(bot, chatId);
                break;

            case Command().EXIT:
                await Exit(bot, chatId);
                break;

            default:
                bot.sendMessage(chatId, 'Command not recognized. Type /help for a list of available commands.', {
                    reply_markup: {
                        keyboard: [
                            ['Start'],
                            ['Help'],
                            ['Upload']
                        ],
                        resize_keyboard: true
                    }
                });
        }
    });
}

module.exports = Setting;
