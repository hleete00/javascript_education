var car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    },
}

function first() {
    return this;
}

console.log(first() === global);


function second() {
    'use strict';
    return this;
}

console.log(second() === global);
console.log(second() === undefined);


let myObject = { value: 'My Object' };

global.value = 'Global object';

function third() {
    return this.value;
}

console.log(third());


console.log(third.call(myObject));
console.log(third.apply(myObject));


function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'boughton',
    print: fifth,
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth,
}

customer1.print();
customer2.print();