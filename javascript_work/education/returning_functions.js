var myVariable = 'I am at the global scope!';

var myFunction = function () {
    console.log('me too!');
}

console.log(myVariable);
myFunction();

function one() {
    return 'one';
}

let value = one;
console.log(value);
console.log(value());

console.log(typeof value);

function two() {
    return function () {
        console.log('two');
    }
}

let newFunction = two();
newFunction();


function three() {
    return function returnThree() {
        return 'three';
    }
}

console.log(three());
console.log(three()());