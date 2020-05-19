//callback -> XMLHttpRequest
//es6 -> promise => fetch
//async/await

function coffeeMachine(coffee, callback) {
    setTimeout(function () {
        let milk = coffee + ' with milk';
        return callback(milk);
    }, 1000);
}

let coffee = "Jacobs";

coffeeMachine(coffee, function (data) {
    let changedData = data.toUpperCase();
    console.log(changedData);
});




