import inquirer from 'inquirer';
import { writeFile, createWriteStream } from 'fs';
import qr from 'qr-image';

const filePath = "E:/Tech/Learnings/Web Dev/Udemy/Resources/Challenges/Backend/QR-code-generator";
const questionsArr = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL you want QR Code for : '
    }
];
const urlTxtfile = filePath + '/URL.txt';
inquirer.prompt(questionsArr).then((answers) => {
    writeFile(urlTxtfile, answers.url, (err) => {
        if (err) throw err;
        console.log('URL saved into text file at ' + urlTxtfile  + '.');
    });
    var qr_png = qr.image(answers.url, {type: 'png'});
    qr_png.pipe(createWriteStream(filePath + '/qrcode.png'));
});
