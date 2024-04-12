const fs = require('fs');
const path = require('path');

const Upload = async (bot, chatId) => {
    bot.sendMessage(chatId, 'Please select a file to upload.');

    try {
        const doc = await new Promise((resolve, reject) => {
            bot.once('document', resolve);
            bot.once('error', reject);
        });

        const fileId = doc.document.file_id;
        const fileUrl = await bot.getFileLink(fileId);
        const fileStream = bot.getFileStream(fileId);
        const fileName = doc.document.file_name;

        // Create a directory if it doesn't exist
        const directory = './downloads';
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        const filePath = path.join(directory, fileName);
        const writeStream = fs.createWriteStream(filePath);

        writeStream.on('finish', () => {
            console.log('File download completed.');
            bot.sendMessage(chatId, `File uploaded successfully. You can download it from ${fileUrl}.`);
        });

        writeStream.on('error', (err) => {
            console.error('Error writing file:', err);
            bot.sendMessage(chatId, 'Failed to upload the file. Please try again later.');
        });

        fileStream.pipe(writeStream);
    } catch (error) {
        console.error('Error uploading file:', error);
        bot.sendMessage(chatId, 'Failed to upload the file. Please try again later.');
    }
};

module.exports = Upload;
