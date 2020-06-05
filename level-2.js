// Level 2

// Question 1

for(var i = 15; i <= 25; i++){
    if(i % 2 === 0) {
    console.log(i);
    }
}

// Question 2

function whatAmI(type) {
    console.log("I am a " + type);
}

whatAmI("function");

var innerFunction = whatAmI;

function outerFunction(name) {
    console.log("My name is " + name);
}

outerFunction("Camilla");