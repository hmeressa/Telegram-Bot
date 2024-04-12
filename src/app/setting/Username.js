const Username = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Enter your new username:');
    } catch (error) {
        console.error('Error sending username change prompt:', error);
    }
};

module.exports = Username;
