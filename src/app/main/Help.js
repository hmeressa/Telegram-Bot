const Help = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, `Available commands:\n
            1. Start - Start the bot.\n
            2. Help - Display available commands.\n
            3. Register - Start the process to create an account.\n
            4. Upload - Initiate the process to upload a file.\n
            5. Settings - Access bot settings.\n
            6. Profile - View or edit user profile.\n
            7. Search - Search for information.\n
            8. List - List items or options.\n
            9. Buy - Purchase an item.\n
            10.Sell - Sell an item.\n
            11.Report - Report an issue or feedback.\n
            12.Reedback - Provide feedback to the bot.`, {
            reply_markup: {
                keyboard: [
                    ['Start', 'Help', 'Register', 'Upload'],
                    ['Settings', 'Profile', 'Search', 'List'],
                    ['Buy', 'Sell', 'Report', 'Feedback'],
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error sending help message:', error);
    }
};

module.exports = Help;
