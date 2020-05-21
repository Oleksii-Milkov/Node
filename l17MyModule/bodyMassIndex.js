const clc = require("cli-color");

module.exports.getBodyMassIndex = function (height, weight) {
    return answer(round(weight / (height + height)));
}

function answer(bMI) {
    console.log("Ваш ИМТ = " + bMI);
    if (bMI <= 18) {
        console.log(clc.green("Дефицит массы тела"));
    }
    else if (bMI >= 19 && bMI <= 24.5) {
        console.log(clc.blue("Ваша масса тела в норме"));
    }
    else if (bMI >= 25 && bMI <= 30) {
        console.log(clc.yellow("Предожирение"));
    }
    else if (bMI >= 31) {
        console.log(clc.red("Ожирение"));
    }
}

function round(bMI) {
    return Math.round(bMI * 100) / 100;
}