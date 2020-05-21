const bMI = require('./bodyMassIndex');

let human = {
    weight: 90,    //редактируем вес
    height: 1.86    //редактируем рост в метрах
};

bMI.getBodyMassIndex(human.height, human.weight);
