const Help = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, `Available commands:\n
            1. /start - Start the bot.\n
            2. /help - Display available commands.\n
            3. /register - Start the process to create an account.\n
            4. /upload - Initiate the process to upload a file.\n
            5. /settings - Access bot settings.\n
            6. /profile - View or edit user profile.\n
            7. /search - Search for information.\n
            8. /list - List items or options.\n
            9. /buy - Purchase an item.\n
            10. /sell - Sell an item.\n
            11. /report - Report an issue or feedback.\n
            12. /feedback - Provide feedback to the bot.\n
            13. /subscribe - Subscribe to updates or newsletters.\n
            14. /unsubscribe - Unsubscribe from updates or newsletters.\n
            15. /reminder - Set a reminder.\n
            16. /calendar - Access calendar or schedule.\n
            17. /stats - View statistics or analytics.\n
            18. /weather - Get current weather information.\n
            19. /news - Get latest news updates.\n
            20. /support - Contact customer support.`, {
            reply_markup: {
                keyboard: [
                    ['/start', '/help', '/register', '/upload'],
                    ['/settings', '/profile', '/search', '/list'],
                    ['/buy', '/sell', '/report', '/feedback'],
                    ['/subscribe', '/unsubscribe', '/reminder', '/calendar'],
                    ['/stats', '/weather', '/news', '/support']
                ],
                resize_keyboard: true
            }
        });
    } catch (error) {
        console.error('Error sending help message:', error);
    }
};

module.exports = Help;
