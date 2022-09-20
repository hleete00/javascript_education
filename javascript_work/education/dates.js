let today = new Date();

let bob1 = new Date('December 7, 1998');
let bob2 = new Date('1998-12-07t07:01:23');
let bob3 = new Date(1969, 11, 6);
let bob4 = new Date(1969, 11, 6, 7, 1, 23);

var elapstedTime = today - bob1;
console.log(elapstedTime);

console.log(bob1.getDate());
console.log(bob1.getTime());


getMonth()
getDay()

getHours()
getMinutes()
getSeconds()
getMilliseconds()
