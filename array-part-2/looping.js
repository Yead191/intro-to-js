/**
 * Looping techniques
 * 
 * 1. for loop
 * while loop
 * do while----> ignore
 * for of---> array loop korar jnno
 * for in----> object loop korar jnno
 */


const friends = ['karim', 'rahim', 'elon', 'mask', 'waren']

for (const friend of friends) {
    // console.log(friend);    
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);

}

const numbers = [34, 456, 65, 63, 83, 54, 389, 30, 28, 16]

for (let n = 0; n < numbers.length; n++) {
    // console.log(numbers[n]);

}


let i = 0;
while (i<friends.length) {
    // console.log(friends[i]);
    i++
    
}


let n = 0
while (n<numbers.length) {
    console.log(numbers[n]);
    n++
    
}
