let first = 'Knowledge is power, but enthusiam pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,23,42';

let mySplit = third.split(',');
console.log(mySplit);


let mySlice = first.slice(13, 18);
console.log(mySlice);

let mySubStr = first.substr(13, 5);
console.log(mySubStr);

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do ');
console.log(myStartsWith);

let myInclude = second.includes('There');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);


let myTrim = '      bloated         ';
console.log(myTrim.length);
console.log(myTrim.trim().length);