const Theme = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Select your preferred theme:', {
            reply_markup: {
                keyboard: [
                    ['Light', 'Dark'],
                    ['Back to Settings']
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error sending theme selection menu:', error);
    }
};

module.exports = Theme;
