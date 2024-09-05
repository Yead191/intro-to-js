/**
 * even: n%2===0
 * odd: n%2===1;
 *      n%2!==0;
 */


// odd numbers

// for (let i = 1; i <=20; i++) {
//     if (i%2===1) {
//         console.log(i);
//     }

// }
// for (let i = 1; i <=20; i++) {
//     if (i%2!==0) {
//         console.log(i);
//     }

// }

// for (let i = 1; i <=20; i+=2) {
// console.log(i);

// }


// 1-30 porjnto emn number gula dekhao jgula 5 diye vag korle vagsesh 0 thake

// for (let i = 1; i <=100; i++) {
//     if (i%5===0) {
//         console.log(i);

//     }

// }
// for (let i = 1; i <=100; i++) {
//     if (i%5===0 || i%3===0) {
//         console.log(i);

//     }

// }

// for (let i = 1; i <=100; i++) {
//     if (i%5===0 && i%3===0) {
//         console.log(i);

//     }

// }


// 1-20 porjnto jotogula 3 dara divisible ogular sum ber koro

let sum = 0
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        sum = i + sum
        console.log(i);
        console.log('total', sum);

    }


}
console.log('total number of sum is:', sum);
