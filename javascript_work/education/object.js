let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
console.log(car['year'])

var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);

var a = {
    myPropery: { b: 'hi' }
}

console.log(a.myPropery.b);

var c = {
    myValues: [
        { d: 'this' },
        { e: 'can' },
        { g: 'get' },
        { f: 'crazy' },
    ]
};

console.log(c.myValues[1])

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' },
];

console.log(carLot[0].year)

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Johnson', phoneNumbers: ['(479) 123-4567', '(987) 654-4321'] },
        { firstName: 'Richard', lastName: 'Boughton', phoneNumbers: ['(976) 653-1453', '(331) 577-9621'] },
    ],
    employees: [
        { firstName: 'Jim', lastName: 'Jimson', phoneNumbers: ['(809) 543-4456', '(678) 901-2345'] },
        { firstName: 'Frank', lastName: 'Franklin', phoneNumbers: ['(342) 875-1368'] },
        { firstName: 'Will', lastName: 'Williamson', phoneNumbers: ['(864) 453-1975 '] },
    ],
};