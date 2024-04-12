const Language = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Select your preferred language:', {
            reply_markup: {
                keyboard: [
                    ['English', 'French'],
                    ['Spanish', 'German'],
                    ['Italian', 'Russian'],
                    ['Back to Settings']
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error sending language selection menu:', error);
    }
};

module.exports = Language;
