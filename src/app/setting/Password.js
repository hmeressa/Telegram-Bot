const Password = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Enter your current password:');
    } catch (error) {
        console.error('Error sending password change prompt:', error);
    }
};

module.exports = Password;
