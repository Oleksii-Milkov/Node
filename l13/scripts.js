const fs = require('fs');
const rl = require('readline-sync');

console.log("1. Create\n2. Read\n3. Update\n4. Delete");
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

        default:
            console.log("This command does not exists.");
            break;          
    }

    answer = rl.question("Want to continue? (yes/no)");
}
