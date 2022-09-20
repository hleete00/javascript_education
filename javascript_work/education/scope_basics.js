let a = 'first';

function scopeTest() {
    console.log(a);
    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log(b);
        let c = 'third';
    }
    //console.log(c);

}

scopeTest();
//console.log(b);