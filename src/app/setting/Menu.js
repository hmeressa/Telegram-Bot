const Menu = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Main Menu ', {
            reply_markup: {
                keyboard: [
                    ['Language', 'Theme'],
                    ['Password', 'Username'],
                    ['Menu', 'Exit'],
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error while displaying main menu:', error);
    }
};

module.exports = Menu;
