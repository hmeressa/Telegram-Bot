
const askQuestion = async (bot, chatId, question) => {
    return new Promise((resolve, reject) => {
        bot.once('text', async (msg) => {
            const answer = msg.text;
            await bot.sendMessage(chatId, question);
            resolve(answer);
        });
        bot.sendMessage(chatId, question);
    });
};

const Register = async (bot, chatId) => {
    try {
        await bot.sendMessage(chatId, 'Please provide your personal information:');
        const firstName = await askQuestion(bot, chatId, 'First Name:');
        const lastName = await askQuestion(bot, chatId, 'Last Name:');
        const age = await askQuestion(bot, chatId, 'Age:');
        const address = await askQuestion(bot, chatId, 'Address:');
        const email = await askQuestion(bot, chatId, 'Email:');
        const phoneNumber = await askQuestion(bot, chatId, 'Phone Number:');
        const message = `Thank you for creating your account with the following details :
        \nFirst Name: ${firstName}
        \nLast Name: ${lastName}
        \nAge: ${age}
        \nAddress: ${address}
        \nEmail: ${email}
        \nPhone Number: ${phoneNumber}`;
        await bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error occurred during registration:', error);
    }
};

module.exports = Register;
