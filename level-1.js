//Level 1

// Question 1

var flower = "lavender";

// Question 2

var person = {
    name: "Camilla",
    age: 28
}

// Question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of Stock");
}

else {
    console.log("In stock");
}

// Question 4

var numbers = [1, 2, 3, 4, 5];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 5

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

//Question 6

for(var i = 15; i <= 25; i++){
    if(i === 20) {
    console.log(i);
    }
}

// Question 7

var houses = [
    {
      colour: "red",
      numberOfWindows: 8,
      chimney: true
    },
    
    {        
        colour: "white",
        numberOfWindows: 5,
        chimney: false
    }
    ];

for(var i = 0; i < houses.length; i++) {
    console.log(houses[i].numberOfWindows);
    console.log(houses[i].chimney);
}

// Question 8

function whatIDontLike(food) {
    console.log("I don't like " + food);
}

whatIDontLike("olives");

// Question 9

function subtractArgument(number1, number2) {
    var subtracting = number1 - number2;
    console.log(subtracting);
}

subtractArgument(10, 5);

// Question 10

var emptyArray = [];

function vacation(destination) {
    emptyArray.push(destination);
    console.log(destination);
}

vacation("France");