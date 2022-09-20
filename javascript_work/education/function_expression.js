setTimeout(function () {
    console.log('I waited 5 seconds')
},
    5000);


let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('Hello Hunter! This has ran ' + ++counter + ' times.');
        timeout();
    }, 5000);
}


timeout();


(function () {
    console.log('Hello Hunter! We are immediately invoking the expression.');
})();