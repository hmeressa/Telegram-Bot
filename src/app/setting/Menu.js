const Menu = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Main Menu ', {
            reply_markup: {
                keyboard: [
                    ['Language', 'Theme'],
                    ['Password', 'Username'],
                    ['Back', 'Exit'],
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error while displaying main menu:', error);
    }
};

module.exports = Menu;
