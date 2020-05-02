const fs = require('fs');
const rl = require('readline');
const pr = require('process');

const readLine = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the operation: ", function (command) {
    switch (command) {
        case "Create":
            readLine.question("Enter name and extension of file: ", function (fileName) {
                if (!fs.existsSync(fileName)) {
                    fs.openSync(fileName, 'w');
                    console.log("File is created.");
                } else {
                    console.log("File with that name exists.");
                }
                pr.exit(1);
            });
            break;

        case "Read":
            readLine.question("Enter file name: ", function (fileName) {
                fs.readFile(fileName, 'utf-8', function (err, data) {
                    if (err) {
                        if (err.code == 'ENOENT') {
                            console.log('File is not found.');
                        }
                        else {
                            console.log('Unknown error.');
                        }
                        pr.exit(1);
                    } else {
                        console.log(data);
                        pr.exit(1);
                    }
                });
            });
            break;

        case "Update":

        case "Delete":

    }

});

/* readLine.question("Want to continue?: ", function (answer) {
    if (answer == 'yes') {
        fileSystem();
    }
    else {
        pr.exit(1);
    }
}); */
