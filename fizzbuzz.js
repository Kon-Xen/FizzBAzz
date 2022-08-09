// If a number is a multiple of 7, print "Bang" instead of the number. For numbers which are multiples of seven and three / five,
// append Bang to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").
//
// If a number is a multiple of 11, print "Bong" instead of the number. Do not print anything else in these cases. (E.g. 3 * 11 = 33: "Bong")
//
// If a number is a multiple of 13, print "Fezz" instead of the number. For multiples of most other numbers,
// the Fezz goes immediately in front of the first thing beginning with B, or at the end if there are none.
// (E.g. 5 * 13 = 65: "FezzBuzz", 3 * 5 * 13 = 195: "FizzFezzBuzz").
// !! Note that Fezz should be printed even if Bong is also present (E.g. 11 * 13 = 143: "FezzBong") !!
//
// If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed. (E.g. 3 * 5 * 17 = 255: "BuzzFizz") - use a pattern?


for (let i = 1; i <= 200; i++) {
    let multOf_3 = !!(i % 3);   // Fizz with 5 = FizzBuzz
    let fizz = 'Fizz';
    let multOf_5 = !!(i % 5);   // Bazz with 3 = FizBuzz
    let buzz = 'Buzz';
    let multOf_7 = !!(i % 7);   // Bang
    let bang = 'Bang';
    let multOf_11 = !!(i % 11); // Bong !! Plays Solo
    let bong = 'Bong';
    let multOf_13 = !!(i % 13); // Fezz Also likes 5 + 7  but plays  first - FezzBazz, FezzBang
    let fezz = 'Fezz';
    let multOf_17 = !!(i % 17); // reverses order of combined outputs layout - Need to store output to an array /object ?

    if (!multOf_11) {
        if (multOf_3 && multOf_5) {
            console.log(fizz + buzz + ' test:' + i);
        } else if (multOf_13 && multOf_5) {
            console.log(fezz + buzz + ' test:' + i);
        } else if (multOf_13 && multOf_7) {
            console.log(fezz + bang + ' test:' + i);
        } else if (multOf_3) {
            console.log(fizz + ' test:' + i);
        } else if (multOf_5) {
            console.log(buzz + ' test:' + i);
        } else if (multOf_7) {
            console.log(bang + ' test:' + i);
        } else if (multOf_13) {
            console.log(fezz + ' test:' + i);
        } else {
            console.log(i);
        }
    } else {
        console.log(bong + ' test: ' + i);
    }
}


