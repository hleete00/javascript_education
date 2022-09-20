var count = 3;
if (count == 4) {
    console.log('Count is equal to 4');
} else if (count > 4) {
    console.log('Count is greater than 4');
} else if (count < 4) {
    console.log('Count is less than 4');
} else {
    console.log('Count is not equal to 4');
}


let hero = 'Superman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:
        console.log('Member of JLA');
        break;
}


let a = 1;
let b = '1';
let result = (a !== b) ? 'not equal' : 'equal';
console.log(result);