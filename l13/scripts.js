const fs = require('fs');
const rl = require('readline-sync'); // npm install readline-sync
const nm = require('nodemailer'); //npm install nodemailer

console.log("1. Create\n2. Read\n3. Update\n4. Delete\n5. Extra");
let answer = 'yes';

while (answer == 'yes') {

    let fileName;
    let command = rl.question("Enter the command: ");

    switch (command) {
        case '1':
            fileName = rl.question("Enter name and extension of file: ");
            if (!fs.existsSync("files/" + fileName)) {
                fs.openSync("files/" + fileName, 'w');
                console.log("File is created.");
            } else {
                console.log("File is not found.");
            }
            break;

        case '2':
            fileName = rl.question("Enter file name: ");
            if (fs.existsSync("files/" + fileName)) {
                console.log(fs.readFileSync("files/" + fileName, 'utf-8'));
            } else {
                console.log("File is not found.");
            }
            break;

        case '3':
            fileName = rl.question("Enter file name: ");
            if (fs.existsSync("files/" + fileName)) {
                let str = rl.question("Enter data to push it in file: ");
                fs.appendFileSync("files/" + fileName, `${str}\n`);
                console.log("File is updated");
            } else {
                console.log("File is not found.");
            }
            break;

        case '4':
            fileName = rl.question("Enter file name, what you want to delete: ");
            if (fs.existsSync("files/" + fileName)) {
                fs.unlinkSync("files/" + fileName);
                console.log("File is deleted.");
            } else {
                console.log("File is not found.")
            }
            break;

        case '5':
            let sender = nm.createTransport({
                host: "smtp.mailtrap.io", //smtp сервер mailtrap
                port: 2525,
                auth: {
                    user: "b20f9d06d7de61",
                    pass: "12723c82b77f75"
                }
            });

            let mailOptions = {
                from: '2099812368-be35ec@inbox.mailtrap.io',
                to: 'mouzer92@gmail.com',
                subject: 'Учим nodemailer и SMTP',
                text: 'SMTP — это простой протокол передачи почты. С английского языка переводится, как Simple Mail Transfer Protocol. Исходя из названия, можно сделать вывод, что SMTP сервер отвечает за отправку почтовых рассылок.'
            };

            sender.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            break;

        default:
            console.log("This command does not exists.");
            break;
    }

    answer = rl.question("Want to continue? (yes/no)");
}
