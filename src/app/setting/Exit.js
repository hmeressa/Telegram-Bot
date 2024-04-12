const Exit = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Goodbye! Hope to see you again soon.');
        bot.stopPolling();
        process.exit(0);
    } catch (error) {
        console.error('Error while exiting the chat:', error);
    }
};

module.exports = Exit;
