function sayHello() {
    console.log('------');
    console.log('Hello!');
    console.log('------');
}

sayHello();

let a = sayHello;
a();


function sayHelloToName(name) {
    console.log('-------------');
    console.log('Hello ' + name + '!');
    console.log('-------------');
}

sayHelloToName('Hunter');


function calculateTax(amount) {
    let result = amount * 0.075
    return result
}

let taxAmount = calculateTax(100);
console.log(taxAmount);